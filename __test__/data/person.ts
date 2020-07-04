import { document, BaseDocument } from '../../src';

@document({ collectionName: 'documents' })
export class Person extends BaseDocument {
  name?: string;
  // store = () => {
  //   const data = this.toObject();
  //   return this._collection.insertOne(data);
  // };
  //
  // static findX(filter) {
  //   const collection = getModelMetadata(Person)().collection;
  //   return collection.find(filter).toArray();
  // }
}
