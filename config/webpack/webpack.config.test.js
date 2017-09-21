"use strict";
/**
 * Webpack frontend test configuration.
 */
var path = require("path");
var _ = require("builder-react-component-dev/require")("lodash");
var prodCfg = require("./webpack.config");

module.exports = {
  cache: true,
  context: path.resolve("test/client"),
  entry: "./main",
  externals: {
    "react/addons": true,
    "react/lib/ExecutionEnvironment": true,
    "react/lib/ReactContext": true
  },
  output: {
    filename: "main.js",
    publicPath: "/assets/"
  },
  resolve: _.merge({}, prodCfg.resolve, {
    alias: {
      // Allow root import of `src/FOO` from ROOT/src.
      src: path.resolve("src")
    }
  }),
  module: prodCfg.module,
  devtool: "source-map"
};
