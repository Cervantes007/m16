import 'reflect-metadata';
import { Model } from '../model';

export const defualtValue = (value) => (target, key) => {
  if (!target['__defaults']) {
    target['__defaults'] = {};
  }
  target['__defaults'][key] = value;
};

export const injectModel = (Constructor) => (target, key) => {
  target[key] = new Model(Constructor);
};
