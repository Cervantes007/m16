import { document, Document, defualtValue, model, pre } from '../../src';
import { IsNumber, IsString, Length } from 'class-validator';

@document()
export class Dog extends Document {
  @IsString()
  @Length(8)
  @defualtValue('Chiguagua')
  name: string;

  @IsNumber()
  @defualtValue(14)
  age: number;

  @pre('save')
  preSave(doc: Dog) {
    console.log(doc);
  }

  static model = model(Dog);
}
