const firstCharUpperCase = require('../firstCharUpperCase');

module.exports = (sliceName) => {
  return `
export {${sliceName}Slice} from './model/slices/${sliceName}Slice';
export {${firstCharUpperCase(
    sliceName,
  )}Schema} from './model/types/${sliceName}Schema';
`;
};
