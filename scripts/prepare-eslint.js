#!/usr/bin/env node
/* eslint-disable */
const packagesSource = require("../package.json");
const pathsSource = require("../tsconfig.json").compilerOptions.paths;
const eslint = require("../.eslintrc.js");

const { writeFileSync } = require("fs");

const packages = Object.keys(packagesSource.dependencies)
  .filter((item) => item !== "react")
  .map((pattern) => ({
    group: "external",
    pattern,
  }));

packages.unshift({
  group: "parent",
  pattern: "react",
});

const paths = Object.keys(pathsSource).map((pattern) => ({
  group: "internal",
  pattern: `${pattern.split("/")[0]}/**`,
  position: "before",
}));

const newConfig = {
  ...eslint,
};

newConfig.rules["import/order"][1].pathGroups = [...packages, ...paths];

writeFileSync(
  "./.eslintrc.js",
  `module.exports = ${JSON.stringify(newConfig)}`,
);
