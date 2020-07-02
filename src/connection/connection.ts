import { Db, MongoClient } from 'mongodb';
import { Schema } from '../schema/schema';
import { createModel } from '../model/model-factory';

export class Connection {
  models = {};

  constructor(public client: MongoClient, public db: Db) {}

  /**
   * Create a Model on this connection.
   */
  model(name: string, schema: Schema | Record<string, unknown>, options?) {
    const ModelFactory = createModel({ name, schema, options, connection: this });
    this.models[name] = ModelFactory;
    return ModelFactory;
  }

  /**
   * Return a Model constructor from the given name
   */
  getModel(name: string) {
    return this.models[name];
  }

  close() {
    return this.client.close();
  }
}
