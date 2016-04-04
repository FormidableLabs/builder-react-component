"use strict";
/**
 * Webpack frontend test configuration.
 */
var path = require("path");
var _ = require("builder-react-component-dev/require")("lodash");
var prodCfg = require("./webpack.config");

// Replace with `__dirname` if using in project root.
var ROOT = process.cwd();

module.exports = {
  cache: true,
  context: path.join(ROOT, "test/client"),
  entry: "./main",
  output: {
    filename: "main.js",
    publicPath: "/assets/"
  },
  resolve: _.merge({}, prodCfg.resolve, {
    alias: {
      // Allow root import of `src/FOO` from ROOT/src.
      src: path.join(ROOT, "src")
    }
  }),
  module: prodCfg.module,
  devtool: "source-map"
};
