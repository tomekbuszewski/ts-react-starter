const path = require("path");
const common = require("./common");

module.exports = {
  mode: "development",
  devtool: "inline-source-map",
  entry: [...common.entry],
  output: { ...common.output(false) },
  resolve: {
    ...common.resolve,
    alias: {
      ...common.resolve.alias,
    },
  },
  module: {
    rules: [...common.rules(false)],
  },
  optimization: {
    ...common.optimization(false),
  },
  plugins: common.plugins(false),
  devServer: {
    contentBase: path.join(__dirname, "..", "..", "public"),
    port: process.env.HMR_PORT || "8888",
  },
};
