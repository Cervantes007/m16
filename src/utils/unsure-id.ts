import { ObjectId } from 'mongodb';

export const ensureId = (data) => {
  if (data && data._id && typeof data._id === 'string') {
    (data as any)._id = new ObjectId(data._id);
  }
};
