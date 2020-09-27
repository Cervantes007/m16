import {
  CollectionInsertManyOptions,
  CommonOptions,
  DeleteWriteOpResultObject,
  FilterQuery,
  FindAndModifyWriteOpResultObject,
  FindOneAndUpdateOption,
  FindOneOptions,
  InsertWriteOpResult,
  OptionalId,
  UpdateOneOptions,
  UpdateQuery,
  UpdateWriteOpResult,
  WithId,
  UpdateManyOptions,
  CollectionInsertOneOptions,
  ReplaceOneOptions,
  ReplaceWriteOpResult,
  FindOneAndReplaceOption,
  FindOneAndDeleteOption,
  MongoCountPreferences,
  CollectionAggregationOptions,
  AggregationCursor,
} from 'mongodb';
import { getModelMetadata } from '../utils';
import { find, findOneAndUpdate, findOne, findOneAndReplace, findOneAndDelete } from '../document/handlers/find';
import { insertMany, insertOne } from '../document/handlers/insert';
import { updateMany, updateOne } from '../document/handlers/update';
import { deleteOne } from '../document/handlers/delete';
import { count } from '../document/handlers/count';
import { aggregate } from '../document/handlers/aggregate';

type ExcludeMatchingProperties<T, V> = Pick<T, { [K in keyof T]-?: T[K] extends V ? never : K }[keyof T]>;
type OmitGetters<T> = Omit<T, '_collection' | '_connection' | '$'>;

// eslint-disable-next-line @typescript-eslint/ban-types
export type clean<T> = ExcludeMatchingProperties<OmitGetters<T>, Function>;

export class Model<T, K = clean<T>> {
  constructor(public doc: new (data) => T) {}

  find(query?: FilterQuery<clean<T>>, options?: FindOneOptions<any>): Promise<T[]> {
    return find(getModelMetadata(this.doc))(query, options);
  }

  findOne(query?: FilterQuery<K>, options?: FindOneOptions<any>): Promise<T> {
    return findOne(getModelMetadata(this.doc))(query, options);
  }

  findOneAndUpdate(
    query: FilterQuery<K>,
    update: UpdateQuery<K> | Partial<K>,
    options?: FindOneAndUpdateOption<any>,
  ): Promise<FindAndModifyWriteOpResultObject<T>> {
    return findOneAndUpdate(getModelMetadata(this.doc))(query, update, options);
  }

  findOneAndReplace(
    filter: FilterQuery<K>,
    doc: K,
    options?: FindOneAndReplaceOption<any>,
  ): Promise<FindAndModifyWriteOpResultObject<K>> {
    return findOneAndReplace(getModelMetadata(this.doc))(filter, doc, options);
  }

  findOneAndDelete(
    filter: FilterQuery<K>,
    options?: FindOneAndDeleteOption<any>,
  ): Promise<FindAndModifyWriteOpResultObject<K>> {
    return findOneAndDelete(getModelMetadata(this.doc))(filter, options);
  }

  insertOne(doc: OptionalId<Partial<K>>, options?: CollectionInsertOneOptions): Promise<WithId<T>> {
    return insertOne(getModelMetadata(this.doc))(doc, options);
  }

  insertMany(
    docs: Array<OptionalId<K>>,
    options?: CollectionInsertManyOptions,
  ): Promise<InsertWriteOpResult<WithId<K>>> {
    return insertMany(getModelMetadata(this.doc))(docs, options);
  }

  replaceOne(filter: FilterQuery<K>, doc: K, options?: ReplaceOneOptions): Promise<ReplaceWriteOpResult> {
    return updateOne(getModelMetadata(this.doc))(filter, doc, options);
  }

  updateOne(
    filter: FilterQuery<K>,
    update: UpdateQuery<K> | Partial<K>,
    options?: UpdateOneOptions,
  ): Promise<UpdateWriteOpResult> {
    return updateOne(getModelMetadata(this.doc))(filter, update, options);
  }

  updateMany(
    filter: FilterQuery<K>,
    update: UpdateQuery<K> | Partial<K>,
    options?: UpdateManyOptions,
  ): Promise<UpdateWriteOpResult> {
    return updateMany(getModelMetadata(this.doc))(filter, update, options);
  }

  deleteOne(
    filter: FilterQuery<K>,
    options?: CommonOptions & { bypassDocumentValidation?: boolean },
  ): Promise<DeleteWriteOpResultObject> {
    return deleteOne(getModelMetadata(this.doc))(filter, options);
  }

  deleteMany(filter: FilterQuery<K>, options?: CommonOptions): Promise<DeleteWriteOpResultObject> {
    return deleteOne(getModelMetadata(this.doc))(filter, options);
  }

  count(query?: FilterQuery<K>, options?: MongoCountPreferences): Promise<number> {
    return count(getModelMetadata(this.doc))(query, options);
  }

  aggregate<A = K>(pipeline?: Record<string, unknown>[], options?: CollectionAggregationOptions): AggregationCursor<A> {
    return aggregate(getModelMetadata(this.doc))(pipeline, options);
  }
}

export const model = <T>(Doc: new (data) => T): Model<T> => new Model(Doc);
