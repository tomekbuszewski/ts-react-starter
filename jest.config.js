module.exports = {
  // testRegex: "(/__tests__/.*|(\\\\.|/)(test|spec))\\\\.[jt]sx?$",
  testMatch: ["**/__tests__/**/*.[jt]s?(x)", "**/?(*.)+(spec|test).[jt]s?(x)"],
  moduleFileExtensions: ["js", "jsx", "svg", "json", "node", "ts", "tsx"],
  collectCoverage: true,
  moduleNameMapper: {
    "@config/(.*)$": "<rootDir>/@config/$1",
    "@components$": "<rootDir>/src/components",
    "@components/(.*)$": "<rootDir>/src/components/$1",
    "@decorators$": "<rootDir>/src/decorators",
    "@decorators/(.*)$": "<rootDir>/src/decorators/$1",
    "@redux$": "<rootDir>/src/redux",
    "@redux/(.*)$": "<rootDir>/src/redux/$1",
    "@services$": "<rootDir>/src/services",
    "@services/(.*)$": "<rootDir>/src/services/$1",
    "__mocks__/(.*)$": "<rootDir>/__mocks__/$1",
  },
};
