"use strict";

var webpack = require("webpack");
var config = require("./webpack.config");

// **WARNING**: Mutates base configuration.
// We do this because lodash isn't available in `production` mode.
config.output.filename = config.output.filename.replace(/\.min\.js$/, ".js");
config.plugins = [
  new webpack.SourceMapDevToolPlugin({
    filename: "[file].map"
  })
];

// Export mutated base.
module.exports = config;
