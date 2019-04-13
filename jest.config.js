module.exports = {
  // testRegex: "(/__tests__/.*|(\\\\.|/)(test|spec))\\\\.[jt]sx?$",
  testMatch: [ "**/__tests__/**/*.[jt]s?(x)", "**/?(*.)+(spec|test).[jt]s?(x)" ],
  moduleFileExtensions: ["js", "jsx", "svg", "json", "node", "ts", "tsx"],
  collectCoverage: true,
  moduleNameMapper: {
    "@config/(.*)$": "<rootDir>/@config/$1",
    "@components/(.*)$": "<rootDir>/src/components/$1",
    "@decorators/(.*)$": "<rootDir>/src/decorators/$1",
    "@services/(.*)$": "<rootDir>/src/services/$1",
  },
};
