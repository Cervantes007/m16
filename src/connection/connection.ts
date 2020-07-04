import { Db, MongoClient } from 'mongodb';

export class Connection {
  constructor(public client: MongoClient, public db: Db) {}

  close() {
    return this.client.close();
  }
}
