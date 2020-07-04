import { find } from './handlers/find';
import { insertMany } from './handlers/insert-many';
import { setModelMetadata } from '../utils';
import { getDefaultConnection } from '../connection';

export const document = (options) => (Constructor) => {
  let connection;
  let collection;

  const updateRefence = () => {
    if (!connection) {
      connection = getDefaultConnection();
    }
    if (connection && !collection) {
      collection = connection.db.collection(options?.collectionName || Constructor.name);
    }
    return { connection, collection, options };
  };

  setModelMetadata(Constructor, updateRefence);
  Constructor.find = find(updateRefence);
  Constructor.insertMany = insertMany(updateRefence);
  return Constructor;
};
