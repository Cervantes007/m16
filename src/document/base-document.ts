import { Collection } from 'mongodb';
import { getModelMetadata } from '../utils';

export abstract class BaseDocument {
  _id?: string;

  constructor(data) {
    for (const key in data) {
      this[key] = data[key];
    }
  }

  static find(filter): Promise<any> {
    return Promise.resolve(filter);
  }

  static insertMany(data): Promise<any> {
    return Promise.resolve(data);
  }

  /**
   * Returns the connection for this document
   */
  get _connection() {
    return getModelMetadata(this.constructor)().connection;
  }

  /**
   * Returns collection for this document
   */
  get _collection(): Collection {
    return getModelMetadata(this.constructor)().collection;
  }

  async save() {
    const data = this.toObject();
    const _id = data['_id'];
    let result;
    if (_id) {
      result = this._collection.findOneAndUpdate({ _id }, data);
    } else {
      result = await this._collection.insertOne(data);
      this['_id'] = result.insertedId;
    }
    return result;
  }

  toObject() {
    return this.$toObject();
  }

  toJSON() {
    return this.$toObject();
  }

  private $toObject() {
    const data = { ...this };
    for (const key in data) {
      typeof data[key] === 'function' && delete data[key];
    }
    return data;
  }
}
