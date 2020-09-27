Mongodb ODM for TypeScript.

![CI](https://github.com/Cervantes007/m16/workflows/CI/badge.svg)
[![codecov](https://codecov.io/gh/Cervantes007/m16/branch/master/graph/badge.svg)](https://codecov.io/gh/Cervantes007/m16)



```typescript
import { Document, document, connect } from 'm-16';
import { IsNotEmpty } from "class-validator";

connect('mongodb://localhost:27017/test');

@document()
export class Dog extends Document {
  @IsNotEmpty() name: string;
}

const dog = new Dog({name:'Pluto'});
await dog.save();
```