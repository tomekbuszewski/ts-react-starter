const path = require("path");
const webpack = require("webpack");

const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ScriptExtHtmlWebpackPlugin = require("script-ext-html-webpack-plugin");
const ManifestPlugin = require("webpack-manifest-plugin");
const Dotenv = require("dotenv-webpack");

const getPaths = require("../moduleAlias");

const PROD = process.env.NODE_ENV === "production";
const MOCKS = Boolean(process.env.MOCKS);
const ENV = PROD ? "production" : "development";

const mode = PROD ? "production" : "development";
const devtool = PROD ? "none" : "inline-source-map";

const resolve = {
  extensions: [".ts", ".tsx", ".js", ".jsx"],
  alias: getPaths(),
};

const entry = ["./src/index.tsx"];

const output = (isProd) => ({
  path: path.resolve("public", "assets"),
  filename: isProd ? "[name].[contenthash].js" : "[name].js",
  hotUpdateChunkFilename: ".hot/[id].[hash].hot-update.js",
  hotUpdateMainFilename: ".hot/[hash].hot-update.json",
  publicPath: "/assets/",
});

const rules = (isProd) => {
  const cfg = {
    test: /\.[tj]s(x?)$/,
    exclude: /node_modules/,
  };

  return isProd
    ? [
        {
          ...cfg,
          loader: "ts-loader",
        },
      ]
    : [
        {
          ...cfg,
          use: [
            { loader: "babel-loader" },
            { loader: "react-docgen-typescript-loader" },
          ],
        },
      ];
};

const optimization = (isProd) => {
  const opts = {
    chunks: "all",
    minSize: 0,
    minChunks: 1,
    reuseExistingChunk: true,
    enforce: true,
  };

  if (isProd) {
    return {
      runtimeChunk: {
        name: ({ name }) => `runtime~${name}`,
      },
      minimize: isProd,
      nodeEnv: isProd ? "production" : "development",
      splitChunks: {
        cacheGroups: {
          react: { test: /(react|react-dom)/, ...opts },
          "react~3rd": {
            test: /styled|redux|react-router|react-helmet|ky/,
            ...opts,
          },
        },
      },
    };
  }

  return {};
};

const plugins = (isProd) => {
  const plugins = [
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify(ENV),
        MOCKS: JSON.stringify(MOCKS),
      },
    }),

    new ManifestPlugin({
      filter: ({ isInitial }) => isInitial,
    }),

    new HtmlWebpackPlugin({
      template: path.resolve("src", "templates", "index.html"),
      filename: path.resolve("public", "index.html"),
      minify: true,
      hash: true,
      inject: "body",
      title: "",
    }),

    new ScriptExtHtmlWebpackPlugin({
      defaultAttribute: "async",
    }),

    new Dotenv(),
  ];

  if (!isProd) {
    plugins.push(new webpack.HotModuleReplacementPlugin());
    plugins.push(new ReactRefreshWebpackPlugin());
  }

  return plugins;
};

module.exports = {
  entry,
  mode,
  devtool,
  resolve,
  output,
  rules,
  optimization,
  plugins,
};
