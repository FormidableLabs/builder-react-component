"use strict";
/**
 * Webpack frontend test configuration.
 */
var path = require("path");
var _ = require("lodash");
var prodCfg = require("./webpack.config");

module.exports = {
  cache: true,
  context: "./test/client",
  entry: "./main",
  output: {
    path: ".",
    filename: "main.js",
    publicPath: "/assets/"
  },
  resolve: _.merge({}, prodCfg.resolve, {
    alias: {
      // Allow root import of `src/FOO` from ROOT/src.
      src: "./src"
    }
  }),
  module: prodCfg.module,
  devtool: "source-map"
};
