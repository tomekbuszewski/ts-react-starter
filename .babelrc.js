const isTest = String(process.env.NODE_ENV) === "test";

module.exports = {
  plugins: [
    "@babel/proposal-class-properties",
    "@babel/proposal-object-rest-spread",
  ],
  presets: [
    "@babel/typescript",
    "@babel/preset-react",
    ["@babel/preset-env", {
      modules: isTest ? "commonjs" : false,
    }],
  ],
};
