export const count = (fn) => async (query, options) => {
  const { collection } = fn();
  return collection.count(query, options);
};
