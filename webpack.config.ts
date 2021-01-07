import { config } from "dotenv";
import path from "path";
import * as webpack from "webpack";
import { Configuration as DevServer } from "webpack-dev-server";
import HtmlWebpackPlugin from "html-webpack-plugin";
import ReactRefreshPlugin from "@pmmmwh/react-refresh-webpack-plugin";
import ScriptExtHtmlWebpackPlugin from "script-ext-html-webpack-plugin";
import { WebpackManifestPlugin } from "webpack-manifest-plugin";
import Dotenv from "dotenv-webpack";

import moduleResolution from "./@config/moduleAlias";

interface Configuration extends webpack.Configuration {
  devServer?: DevServer;
}

config();

const IS_DEV = process.env.NODE_ENV === "development";

const mode =
  process.env.NODE_ENV === "development" ? "development" : "production";

const entry = "./src/index.tsx";

const output = (isDev = IS_DEV) => ({
  filename: isDev ? "[name].js" : "[name].[contenthash].js",
  path: path.resolve(__dirname, "dist"),
});

const resolve: webpack.ResolveOptions = {
  extensions: [".js", ".ts", ".tsx"],
  alias: moduleResolution(),
};

const rules = (isDev = IS_DEV): webpack.RuleSetRule[] => {
  const use = [
    {
      loader: "ts-loader",
      options: { transpileOnly: true },
    },
  ];

  if (isDev) {
    use.unshift({
      loader: "babel-loader",
      options: {
        // @ts-ignore
        plugins: ["react-refresh/babel"],
      },
    });
  }

  return [
    {
      test: /\.worker\.([tj]s)$/i,
      use: [
        {
          loader: "comlink-loader",
          options: {
            singleton: true,
          },
        },
      ],
    },
    {
      exclude: /node_modules/,
      test: /\.[tj]sx?$/,
      use,
    },
  ];
};

const plugins = (isDev = IS_DEV) => {
  const config = [
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
    }) as any,

    new WebpackManifestPlugin({
      filter: ({ isInitial }) => isInitial,
    }),

    new Dotenv(),
  ];

  if (isDev) {
    config.unshift(new ReactRefreshPlugin());
  }

  return config;
};

const common: Configuration = {
  mode,
  entry,
  resolve,
};

const dev: Configuration = {
  ...common,
  output: output(true),
  module: {
    rules: rules(true),
  },
  plugins: plugins(true),
  devServer: {
    hot: true,
    port: Number(process.env.HMR_PORT || "8888"),
  },
};

const prod: Configuration = {
  ...common,
  output: output(false),
  module: {
    rules: rules(false),
  },
  plugins: plugins(false),
  optimization: {
    runtimeChunk: {
      name: (entrypoint: Record<string, string>) =>
        `runtime~${entrypoint.name}`,
    },
    minimize: true,
    nodeEnv: "production",
    chunkIds: "size",
    splitChunks: {
      chunks: "all",
      minSize: 30000,
      maxSize: 208000,
      minChunks: 2,
      maxAsyncRequests: 5,
      maxInitialRequests: 3,
      automaticNameDelimiter: "-",
      cacheGroups: {
        vendor: {
          chunks: "initial",
          reuseExistingChunk: true,
          enforce: true,
        },
      },
    },
  },
};

const webpackConfiguration: Configuration = IS_DEV ? dev : prod;
export default webpackConfiguration;
