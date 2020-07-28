export const deleteOne = (fn) => async (filter, options) => {
  const { collection } = fn();
  return collection.deleteOne(filter, options);
};

export const deleteMany = (fn) => async (filter, options) => {
  const { collection } = fn();
  return collection.deleteMany(filter, options);
};
