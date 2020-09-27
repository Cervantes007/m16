import { ensureId } from '../../utils/unsure-id';

export const find = (fn) => (filter, options) => {
  ensureId(filter);
  const { collection } = fn();
  return collection.find(filter, options).toArray();
};

export const findOne = (fn) => async (filter, options) => {
  ensureId(filter);
  const { collection, Constructor } = fn();
  const doc = await collection.findOne(filter, options);
  return new Constructor(doc);
};

export const findOneAndUpdate = (fn) => async (filter, update, options) => {
  ensureId(filter);
  const { collection } = fn();
  return collection.findOneAndUpdate(filter, update, options);
};

export const findOneAndReplace = (fn) => async (filter, doc, options) => {
  ensureId(filter);
  const { collection } = fn();
  return collection.findOneAndReplace(filter, doc, options);
};

export const findOneAndDelete = (fn) => async (filter, options) => {
  ensureId(filter);
  const { collection } = fn();
  return collection.findOneAndDelete(filter, options);
};
