import { ensureId } from '../../utils/unsure-id';

export const updateOne = (fn) => (filter, update, options) => {
  ensureId(filter);
  const { collection } = fn();
  return collection.updateOne(filter, update, options);
};

export const replaceOne = (fn) => (query, update) => {
  ensureId(query);
  const { collection } = fn();
  return collection.replaceOne(query, update);
};

export const updateMany = (fn) => (query, update, options) => {
  ensureId(query);
  const { collection } = fn();
  return collection.updateMany(query, update, options);
};
