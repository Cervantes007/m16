Mongodb ODM for TypeScript.

![CI](https://github.com/Cervantes007/m16/workflows/CI/badge.svg)
[![codecov](https://codecov.io/gh/Cervantes007/m16/branch/master/graph/badge.svg)](https://codecov.io/gh/Cervantes007/m16)



```typescript
import { Document, document, connect, prop } from 'm-16';
connect('mongodb://localhost:27017/test');

@document()
export class Dog extends Document {
  @prop() name: string;
}

const dog = new Dog({name:'Pluto'});
await dog.save();
```


```typescript
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true, useUnifiedTopology: true});

const Cat = mongoose.model('Cat', { name: String });

const kitty = new Cat({ name: 'Zildjian' });
kitty.save().then(() => console.log('meow'));
```