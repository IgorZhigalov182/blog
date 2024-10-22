const fs = require('fs/promises');
const resolveRoot = require('../resolveRoot');

module.exports = (layer, sliceName) => {
  try {
    // fs.writeFile(resolveRoot('src', layer, sliceName, 'index.ts'));
  } catch (error) {
    console.log(error.message);
    console.error(`Не удалось создать public api для слайса ${sliceName}`);
  }
};
