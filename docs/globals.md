# M16

## Variables

### `Let` __connection

• **__connection**: *[Connection](classes/connection.md)*

Store default connection

___

### `Const` __connections

• **__connections**: *[Connection](classes/connection.md)[]* = []

___

### `Const` modelMetadataSymbol

• **modelMetadataSymbol**: *unique symbol* = Symbol('modelMetadataSymbol')

## Functions

### `Const` buildModel

▸ **buildModel**(`metadata`: [ModelMetadata](interfaces/modelmetadata.md)): *Model*

**Parameters:**

Name | Type |
------ | ------ |
`metadata` | [ModelMetadata](interfaces/modelmetadata.md) |

**Returns:** *Model*

___

### `Const` close

▸ **close**(): *Promise‹void›*

**Returns:** *Promise‹void›*

___

### `Const` connect

▸ **connect**(`connectionUrl`: string, `options`: object): *Promise‹[Connection](classes/connection.md)‹››*

**Parameters:**

▪ **connectionUrl**: *string*

▪`Default value`  **options**: *object*= { useUnifiedTopology: true }

Name | Type | Default |
------ | ------ | ------ |
`useUnifiedTopology` | boolean | true |

**Returns:** *Promise‹[Connection](classes/connection.md)‹››*

___

### `Const` connectFromEnvVariables

▸ **connectFromEnvVariables**(`modelName`: string): *void*

Allow connecting from env variable M16_CONNECTION_STRING if provided.

**Parameters:**

Name | Type |
------ | ------ |
`modelName` | string |

**Returns:** *void*

___

### `Const` createModel

▸ **createModel**(`__namedParameters`: object): *Model & object & object*

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type |
------ | ------ |
`connection` | undefined &#124; [Connection](classes/connection.md)‹› |
`name` | string |
`options` | undefined &#124; object |
`schema` | [Schema](classes/schema.md)‹› &#124; object |

**Returns:** *Model & object & object*

___

### `Const` getConnections

▸ **getConnections**(): *[Connection](classes/connection.md)[]*

**Returns:** *[Connection](classes/connection.md)[]*

___

### `Const` getDefaultConnection

▸ **getDefaultConnection**(): *[Connection](classes/connection.md)*

**Returns:** *[Connection](classes/connection.md)*

___

### `Const` getModelMetadata

▸ **getModelMetadata**(`modelConstructor`: any): *any*

**Parameters:**

Name | Type |
------ | ------ |
`modelConstructor` | any |

**Returns:** *any*

___

### `Const` model

▸ **model**(`name`: string, `schema`: any): *Model & object & object*

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |
`schema` | any |

**Returns:** *Model & object & object*

___

### `Const` nonenumerable

▸ **nonenumerable**(`target`: any, `propertyKey`: string): *void*

Set a given property of the target to be no-enumerable
Will not be listed on Object.keys and will be excluded by spread operator

**Parameters:**

Name | Type |
------ | ------ |
`target` | any |
`propertyKey` | string |

**Returns:** *void*

___

### `Const` setModelMetadata

▸ **setModelMetadata**(`modelConstructor`: any, `metadata`: [ModelMetadata](interfaces/modelmetadata.md)): *[ModelMetadata](interfaces/modelmetadata.md)*

**Parameters:**

Name | Type |
------ | ------ |
`modelConstructor` | any |
`metadata` | [ModelMetadata](interfaces/modelmetadata.md) |

**Returns:** *[ModelMetadata](interfaces/modelmetadata.md)*
