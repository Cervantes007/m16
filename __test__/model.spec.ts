import { Dog } from './data/dog';

test('document.save', async () => {
  const dog = new Dog({});
  const result = await dog.save();
  expect(dog._id).toBe(result.insertedId);
  const dogs = await Dog.model.find({ name: dog.name });
  expect(dogs.length).toBeGreaterThan(0);
});

test('document.findOne', async () => {
  const dog = await Dog.model.insertOne({ name: 'Bethoven' });
  expect(dog._id).toBeDefined();
  const projection = { name: 1 };
  const dogDocument: Dog = await Dog.model.findOne({ name: dog.name }, { projection });
  expect(dogDocument.name).toBe(dog.name);
  const result = await Dog.model.findOneAndUpdate({ name: dog.name }, { $set: { name: 'Bethoven 2' } });
  expect(result.ok).toBe(1);
});

test('document.validation', async () => {
  const dog = new Dog({ name: 'Scooby', age: '12' });
  try {
    await dog.save();
  } catch (errors) {
    expect(errors.length).toBe(2);
  }
});
