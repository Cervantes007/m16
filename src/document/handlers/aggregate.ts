export const aggregate = (fn) => (pipeline, options) => {
  const { collection } = fn();
  return collection.aggregate(pipeline, options);
};
