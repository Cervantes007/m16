export const find = (fn) => (filter, options) => {
  const { collection } = fn();
  return collection.find(filter, options).toArray();
};

export const findOne = (fn) => async (filter, options) => {
  const { collection, Constructor } = fn();
  const doc = await collection.findOne(filter, options);
  return new Constructor(doc);
};

export const findOneAndUpdate = (fn) => async (filter, update, options) => {
  const { collection } = fn();
  return collection.findOneAndUpdate(filter, update, options);
};

export const findOneAndReplace = (fn) => async (filter, doc, options) => {
  const { collection } = fn();
  return collection.findOneAndReplace(filter, doc, options);
};

export const findOneAndDelete = (fn) => async (filter, options) => {
  const { collection } = fn();
  return collection.findOneAndDelete(filter, options);
};
