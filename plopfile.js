const ui = require("./@config/plop/generators/ui");
const redux = require("./@config/plop/generators/redux");

module.exports = (plop) => {
  plop.setGenerator("ui", ui);
  plop.setGenerator("redux", redux);
};
