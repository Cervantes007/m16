import { Person } from './data/person';
test('document.save', async () => {
  const john = new Person({ name: 'John' });
  const result = await john.save();
  expect(john._id).toBe(result.insertedId);
  const documents = await Person.find({ name: john.name });
  expect(documents.length).toBeGreaterThan(0);
});
