import { prop, length, document, Document, defualtValue, model, pre } from '../../src';

@document()
export class Dog extends Document {
  @prop(length(8))
  @defualtValue('Chiguagua')
  name: string;

  @prop()
  @defualtValue(14)
  age: number;

  @pre('save')
  preSave(doc: Dog) {
    console.log(doc);
  }

  static model = model(Dog);
}
