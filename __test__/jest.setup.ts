import { connect, close } from '../src';

beforeAll(async () => {
  const url = 'mongodb://localhost:27017/ex';
  await connect(url);
});

afterAll(async () => {
  close();
});
