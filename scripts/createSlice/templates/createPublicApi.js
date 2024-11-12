const fs = require('fs/promises');
const resolveRoot = require('../resolveRoot');
const publicApiTemplate = require('./componentPublicApiTemplate');

module.exports = async (layer, sliceName) => {
  const resolveModelPath = (...segments) => resolveRoot('src', layer, sliceName, ...segments);

  try {
    await fs.writeFile(resolveModelPath(`index.ts`), publicApiTemplate(sliceName));
  } catch (error) {
    console.log(error.message);
    console.error(`Не удалось создать public api для слайса ${sliceName}`);
  }
};
