import 'reflect-metadata';
import { isString, isNumber } from '../validators';
import { Model } from '../model';

function getValidationForTypes(type) {
  switch (type.name) {
    case 'String':
      return isString();
    case 'Number':
      return isNumber();
    case 'Object':
    default:
      return null;
  }
}

export const defualtValue = (value) => (target, key) => {
  if (!target['__defaults']) {
    target['__defaults'] = {};
  }
  target['__defaults'][key] = value;
};

export const injectModel = (Constructor) => (target, key) => {
  target[key] = new Model(Constructor);
};

export const prop = (...validators) => (target, key) => {
  // Try to get property type from metadata.
  const type = Reflect.getMetadata('design:type', target, key);
  if (type) {
    const validatorType = getValidationForTypes(type);
    if (validatorType) {
      validators.unshift(validatorType);
    }
  }
  // Apply decorators.
  for (const { fn, options } of validators) {
    const _options = Array.isArray(options) ? options : [options];
    fn(..._options)(target, key);
  }
};
