import { Model as BaseModel } from './model';
import { Connection } from '../connection/connection';
import { Schema } from '../schema/schema';
import { getDefaultConnection } from '..';
import { Collection } from 'mongodb';

interface CreateModel {
  name: string;
  schema: Schema | Record<string, any>;
  options?: Record<string, any>;
  connection?: Connection;
}

export const createModel = ({ name, schema, options, connection }: CreateModel) => {
  const conn = connection || getDefaultConnection();
  const { db } = conn;
  const collectionName = options?.collectionName || name;
  const collection = db.collection(collectionName);
  const metadata: ModelMetadata = {
    collection,
    collectionName,
    connection: conn,
    modelName: name,
    schema,
    options,
  };

  const ModelFactory = buildModel(metadata);
  setModelMetadata(ModelFactory, metadata);

  // Adding dynamic static methods
  for (const key in schema?._statics) {
    ModelFactory[key] = schema?._statics[key].bind(ModelFactory);
  }

  // Extend model properties dynamically to allow autocomplete and typescript support
  type ExtractStaticTypes = typeof ModelFactory;

  // Find a way to add dynamic props and methods, then remove this type
  type WhateverTypes = { [key: string]: any };

  return ModelFactory as ExtractStaticTypes &
    WhateverTypes & {
      new <T>(data: T): BaseModel<T> & T;
    };
};

const buildModel = (metadata: ModelMetadata) => {
  const { collection, schema } = metadata;
  return class Model<T> extends BaseModel<T> {
    constructor(data) {
      super();
      this._applyData(data);

      // Adding methods to the model instance
      if (schema?._methods) {
        for (const key in schema?._methods) {
          nonenumerable(this, key);
          this[key] = schema?._methods[key];
        }
      }
    }

    static async find(filter = {}) {
      return collection.find(filter).toArray();
    }

    static async insertMany(data) {
      return collection.insertMany(data);
    }
  };
};

export interface ModelMetadata {
  modelName: string;
  collectionName: string;
  schema: Schema;
  collection: Collection;
  connection: Connection;
  options?: any;
}

export const modelMetadataSymbol = Symbol('modelMetadataSymbol');
export const getModelMetadata = (modelConstructor) => modelConstructor[modelMetadataSymbol];
export const setModelMetadata = (modelConstructor, metadata: ModelMetadata) =>
  (modelConstructor[modelMetadataSymbol] = metadata);

/**
 * Set a given property of the target to be no-enumerable
 * Will not be listed on Object.keys and will be excluded by spread operator
 */
export const nonenumerable = (target: any, propertyKey: string) => {
  const descriptor = Object.getOwnPropertyDescriptor(target, propertyKey) || {};
  if (descriptor.enumerable !== false) {
    descriptor.enumerable = false;
    descriptor.writable = true;
    Object.defineProperty(target, propertyKey, descriptor);
  }
};
