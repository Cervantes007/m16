# Class: Connection

## Hierarchy

* **Connection**

## Constructors

###  constructor

\+ **new Connection**(`client`: MongoClient, `db`: Db): *[Connection](connection.md)*

**Parameters:**

Name | Type |
------ | ------ |
`client` | MongoClient |
`db` | Db |

**Returns:** *[Connection](connection.md)*

## Properties

###  client

• **client**: *MongoClient*

___

###  db

• **db**: *Db*

___

###  models

• **models**: *object*

#### Type declaration:

## Methods

###  close

▸ **close**(): *Promise‹void›*

**Returns:** *Promise‹void›*

___

###  getModel

▸ **getModel**(`name`: string): *any*

Return a Model constructor from the given name

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |

**Returns:** *any*

___

###  model

▸ **model**(`name`: string, `schema`: [Schema](schema.md) | Record‹string, unknown›, `options?`: any): *Model & object & object*

Create a Model on this connection.

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |
`schema` | [Schema](schema.md) &#124; Record‹string, unknown› |
`options?` | any |

**Returns:** *Model & object & object*
