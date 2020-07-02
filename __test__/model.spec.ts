import { model } from '../src';

test('test', async () => {
  console.log('connected to mongodb');
  const Documents = model('documents', {});
  const result = await Documents.insertMany([{ a: 1 }, { a: 2 }, { a: 3 }]);
  console.log(result);
  const list = await Documents.find({ a: 3 });
  console.log(list);
});
