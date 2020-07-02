import { MongoClient } from 'mongodb';
import { createModel } from '../model/model-factory';
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

export const close = () => __connection.close();

export const model = (name: string, schema: any) => {
  if (!__connection) {
    connectFromEnvVariables(name);
  }
  return createModel({ name, schema, connection: __connection });
};

/**
 * Allow connecting from env variable M16_CONNECTION_STRING if provided.
 */
const connectFromEnvVariables = (modelName: string) => {
  const connString = process.env.M16_CONNECTION_STRING || '';
  if (connString) {
    console.log(`Database connect from process.env.OTTOMAN_CONNECTION_STRING`);
    connect(connString);
  } else {
    throw new Error(`There isn't a connection available to create Model ${modelName}`);
  }
};
