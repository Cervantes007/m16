export const insertMany = (fn) => (data) => {
  const { collection } = fn();
  return collection.insertMany(data);
};
