import { IsInt, IsNumber, IsString, Length } from 'class-validator';

export const isInt = (options?) => ({ fn: IsInt, options });
export const isNumber = (options?) => ({ fn: IsNumber, options });
export const isString = (options?) => ({ fn: IsString, options });
export const length = (...options) => ({ fn: Length, options });
