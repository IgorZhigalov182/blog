const firstCharUpperCase = require('../firstCharUpperCase');

module.exports = (sliceName) => {
  return `
export interface ${firstCharUpperCase(sliceName)}Schema {
  isLoading: boolean;
  error?: string;
}
`;
};
