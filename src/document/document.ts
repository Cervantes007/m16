import { Collection, ObjectId } from 'mongodb';
import { validateOrReject } from 'class-validator';
import { getModelMetadata } from '../utils';
import { nonenumerable } from '../utils/noenumarable';
import { ensureId } from '../utils/unsure-id';

interface HooksTypes {
  save?: ((doc) => Document)[];
  update?: ((doc) => Document)[];
  delete?: ((doc) => Document)[];
  validate?: ((doc) => Document)[];
}

/**
 * @example
 * ```typescript
 * @document()
 * export class Dog extends Document {
 *   @prop() name: string;
 * }
 * ```
 */

export abstract class Document {
  _id?: ObjectId;

  private pre: HooksTypes = {};
  private post: HooksTypes = {};

  constructor(data) {
    nonenumerable(this, 'pre');
    nonenumerable(this, 'post');
    this._applyData(data);
  }

  _applyData(data) {
    const defaults = this['__defaults'] || {};
    const doc = { ...defaults, ...data };
    for (const key in doc) {
      this[key] = doc[key];
    }
    ensureId(this);
  }

  /**
   * Returns the connection for this document
   */
  protected get _connection() {
    return getModelMetadata(this.constructor)().connection;
  }

  /**
   * Returns collection for this document
   */
  protected get _collection(): Collection {
    return getModelMetadata(this.constructor)().collection;
  }

  async validate() {
    return validateOrReject(this);
  }

  async save(options = {}) {
    ensureId(this);
    await this.validate();
    const data = this.toObject();
    const _id = data['_id'];
    let result;
    if (_id) {
      result = await this._collection.findOneAndUpdate({ _id }, data, options);
    } else {
      const preHooks = Reflect.getMetadata('m16:pre', this.constructor) || {};
      if (preHooks && preHooks['save']) {
        for (const hook of preHooks['save']) {
          hook(this);
        }
      }
      result = await this._collection.insertOne(data, options);
      this._id = result.insertedId;
      ensureId(this);
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
