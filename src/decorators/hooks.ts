import 'reflect-metadata';

export const pre = (hook: string) => (target, prop) => {
  const preHooks = Reflect.getMetadata('m16:pre', target.constructor) || {};
  if (!preHooks[hook]) {
    preHooks[hook] = [];
  }
  preHooks[hook].push(target[prop]);
  Reflect.defineMetadata('m16:pre', preHooks, target.constructor);
};
