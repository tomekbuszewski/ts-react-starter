const { resolve, rules } = require("../webpack/common");

module.exports = ({ config }) => ({
  ...config,
  resolve: {
    ...config.resolve,
    ...resolve,
  },
  module: {
    ...config.module,
    rules: [...config.module.rules, ...rules],
  },
});
