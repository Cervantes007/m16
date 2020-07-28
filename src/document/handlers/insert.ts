export const insertOne = (fn) => async (doc, options) => {
  const { Constructor } = fn();
  const _doc = new Constructor(doc);
  await _doc.save(options);
  return _doc;
};

export const insertMany = (fn) => (data, options) => {
  const { collection } = fn();
  return collection.insertMany(data, options);
};
