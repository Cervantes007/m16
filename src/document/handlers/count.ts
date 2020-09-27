import { ensureId } from '../../utils/unsure-id';

export const count = (fn) => async (query, options) => {
  ensureId(query);
  const { collection } = fn();
  return collection.count(query, options);
};
