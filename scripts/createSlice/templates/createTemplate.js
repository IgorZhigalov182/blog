const fs = require('fs/promises');
const resolveRoot = require('../resolveRoot');
const createModel = require('./createModel');
const createPublicApi = require('./createPublicApi');
const createUI = require('./createUI');
const firstCharToUppercase = require('../firstCharUpperCase');

module.exports = async (layer, sliceName) => {
  try {
    await fs.mkdir(resolveRoot('src', layer, firstCharToUppercase(sliceName)));
  } catch (error) {
    console.error(`Не удалось создать директорию для слайса ${sliceName}`);
  }

  await createModel(layer, sliceName);
  await createUI(layer, sliceName);
  await createPublicApi(layer, sliceName);

  console.log(`Слайс ${sliceName} в слое ${layer} создан`);
};
