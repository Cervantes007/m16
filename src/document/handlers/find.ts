export const find = (fn) => (filter) => {
  const { collection } = fn();
  return collection.find(filter).toArray();
};
