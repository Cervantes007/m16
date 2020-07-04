export const modelMetadataSymbol = Symbol('modelMetadataSymbol');
export const getModelMetadata = (modelConstructor) => modelConstructor[modelMetadataSymbol];
export const setModelMetadata = (modelConstructor, fn) => (modelConstructor[modelMetadataSymbol] = fn);
