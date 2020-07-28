import { MongoClient } from 'mongodb';
import { Connection } from './connection';

/**
 * Store default connection
 */
export let __connection: Connection;
export const __connections: Connection[] = [];

export const getDefaultConnection = (): Connection => __connection;
export const getConnections = (): Connection[] => __connections;

export const connect = async (connectionUrl: string, options = { useUnifiedTopology: true }) => {
  const lastIndex = connectionUrl.lastIndexOf('/');
  const url = connectionUrl.substring(0, lastIndex);
  const databaseName = connectionUrl.substring(lastIndex + 1);

  const client = await MongoClient.connect(url, options);
  const db = client.db(databaseName);
  const connection = new Connection(client, db);
  if (!__connection) {
    __connection = connection;
  }
  return connection;
};

export const close = () => __connection && __connection.close();
