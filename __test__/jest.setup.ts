import { connect, close } from '../src';

beforeAll(async () => {
  await connect('mongodb://localhost:27017/pets');
});

afterAll(async () => {
  close();
});
