import { setModelMetadata } from '../utils';
import { Connection, getDefaultConnection } from '../connection';
import { pluralize } from '../utils/plurarize';

interface DocumentOptions {
  connection?: Connection;
  collectionName?: string;
}

export const document = (options: DocumentOptions = {}) => (Constructor) => {
  let connection = options?.connection;
  let collection;

  const updateRefence = () => {
    if (!connection) {
      connection = getDefaultConnection();
    }
    if (connection && !collection) {
      const collectionName = options?.collectionName || pluralize(Constructor.name);
      collection = connection.db.collection(collectionName);
    }
    return { connection, collection, options, Constructor };
  };

  setModelMetadata(Constructor, updateRefence);

  return Constructor;
};
