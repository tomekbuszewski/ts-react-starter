const page = require("./@config/plop/generators/page");
const redux = require("./@config/plop/generators/redux");
const ui = require("./@config/plop/generators/ui");

module.exports = (plop) => {
  plop.setGenerator("ui", ui);
  plop.setGenerator("redux", redux);
  plop.setGenerator("page", page);
};
