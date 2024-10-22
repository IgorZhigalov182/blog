const fs = require('fs/promises');
const resolveRoot = require('../resolveRoot');
const createReactTemplate = require('./componentTemplate');
const createStorybookTemplate = require('./storybookTemplate');
const scssTemplate = require('./scssTemplate');
const firstCharToUppercase = require('../firstCharUpperCase');

module.exports = async (layer, sliceName) => {
  const resolveModelPath = (...segments) => resolveRoot('src', layer, sliceName, 'ui', ...segments);

  const createUIDir = async () => {
    try {
      await fs.mkdir(resolveModelPath());
    } catch (error) {
      console.log(error.message);
      console.error(`Не удалось создать директорию для слайса ${sliceName}`);
    }
  };

  const createReactTSX = async () => {
    try {
      const componentName = firstCharToUppercase(sliceName);

      await fs.mkdir(resolveModelPath(componentName));
      await fs.writeFile(resolveModelPath(componentName, `${componentName}.tsx`), createReactTemplate(sliceName));
      await fs.writeFile(
        resolveModelPath(componentName, `${componentName}.stories.tsx`),
        createStorybookTemplate(sliceName, componentName)
      );
      await fs.writeFile(resolveModelPath(componentName, `${componentName}.module.scss`), scssTemplate(sliceName));
    } catch (error) {
      console.log(error.message);
      console.log(`Не удалось создать react component для слайса ${sliceName}`);
    }
  };

  createUIDir();
  createReactTSX();
};
