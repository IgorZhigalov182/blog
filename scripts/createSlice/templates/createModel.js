const fs = require('fs/promises');
const resolveRoot = require('../resolveRoot');
const createReduxSliceTemplate = require('./createReduxSliceTemplate');
const schemaTemplate = require('./schemaTemplate');

module.exports = async (layer, sliceName) => {
  const resolveModelPath = (...segments) =>
    resolveRoot('src', layer, sliceName, 'model', ...segments);

  try {
    await fs.mkdir(resolveModelPath());
    await fs.mkdir(resolveModelPath('types'));
    await fs.mkdir(resolveModelPath('selectors'));
    await fs.mkdir(resolveModelPath('slices'));
    await fs.mkdir(resolveModelPath('services'));
  } catch (error) {
    console.log(error.message);
    console.error(`Не удалось создать директорию для слайса ${sliceName}`);
  }

  const createReduxSlice = async (sliceName) => {
    try {
      await fs.writeFile(
        resolveModelPath('slices', `${sliceName}Slice.ts`),
        createReduxSliceTemplate(sliceName),
      );
    } catch (error) {
      console.log(error.message);
      console.log(`Не удалось создать redux slice для слайса ${sliceName}`);
    }
  };

  const createSchema = async (sliceName) => {
    try {
      await fs.writeFile(
        resolveModelPath('types', `${sliceName}Schema.ts`),
        schemaTemplate(sliceName),
      );
    } catch (error) {
      console.log(error.message);
      console.log(`Не удалось создать schema для слайса ${sliceName}`);
    }
  };

  createReduxSlice(sliceName);
  createSchema(sliceName);
};
