import { ensureId } from '../../utils/unsure-id';

export const deleteOne = (fn) => async (filter, options) => {
  ensureId(filter);
  const { collection } = fn();
  return collection.deleteOne(filter, options);
};

export const deleteMany = (fn) => async (filter, options) => {
  ensureId(filter);
  const { collection } = fn();
  return collection.deleteMany(filter, options);
};
