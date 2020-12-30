require("dotenv").config();
const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ReactRefreshPlugin = require("@pmmmwh/react-refresh-webpack-plugin");
const ScriptExtHtmlWebpackPlugin = require("script-ext-html-webpack-plugin");
const { WebpackManifestPlugin } = require("webpack-manifest-plugin");
const Dotenv = require("dotenv-webpack");

const resolution = require("./@config/moduleAlias");

const IS_DEV = process.env.NODE_ENV === "development";

const opts = {
  chunks: "all",
  minSize: 0,
  minChunks: 1,
  reuseExistingChunk: true,
  enforce: true,
};

module.exports = {
  mode: process.env.NODE_ENV || "production",
  devtool: IS_DEV ? "inline-source-map" : "cheap-source-map",
  entry: "./src/index.tsx",
  output: {
    filename: IS_DEV ? "[name].js" : "[name].[contenthash].js",
    path: path.resolve(__dirname, "dist"),
  },
  resolve: {
    extensions: [".js", ".ts", ".tsx"],
    alias: resolution(),
  },
  module: {
    rules: [
      {
        exclude: /node_modules/,
        test: /\.tsx?$/,
        use: [
          IS_DEV && {
            loader: "babel-loader",
            options: { plugins: ["react-refresh/babel"] },
          },
          {
            loader: "ts-loader",
            options: { transpileOnly: true },
          },
        ].filter(Boolean),
      },
    ],
  },
  plugins: [
    IS_DEV && new ReactRefreshPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "src", "templates", "index.html"),
    }),
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
        MOCKS: JSON.stringify(process.env.MOCKS),
      },
    }),
    new webpack.ProvidePlugin({
      process: "process/browser",
    }),
    new ScriptExtHtmlWebpackPlugin({
      defaultAttribute: "async",
    }),

    new WebpackManifestPlugin({
      filter: ({ isInitial }) => isInitial,
    }),

    new Dotenv(),
  ].filter(Boolean),
  devServer: {
    hot: true,
    port: process.env.HMR_PORT || "8888",
  },
  optimization: IS_DEV
    ? {}
    : {
        runtimeChunk: {
          name: (entrypoint) => `runtime~${entrypoint.name}`,
        },
        moduleIds: "deterministic",
        minimize: true,
        nodeEnv: "production",
        splitChunks: {
          cacheGroups: {
            react: { test: /(react|react-dom)/, ...opts },
            vendors: {
              test: /styled|redux|react-router|react-helmet|ky/,
              ...opts,
            },
          },
        },
      },
};
