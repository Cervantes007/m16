export const updateOne = (fn) => (filter, update, options) => {
  const { collection } = fn();
  return collection.updateOne(filter, update, options);
};

export const replaceOne = (fn) => (query, update) => {
  const { collection } = fn();
  return collection.replaceOne(query, update);
};

export const updateMany = (fn) => (query, update, options) => {
  const { collection } = fn();
  return collection.updateMany(query, update, options);
};
