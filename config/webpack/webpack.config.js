"use strict";

var path = require("path");
var _ = require("lodash");
var webpack = require("webpack");

// Replace with `__dirname` if using in project root.
var ROOT = process.cwd();
var ENTRY_JS = path.join(ROOT, "src/index.js");

// **Little Hacky**: Infer the filename and library name from the code itelf.
//
// Assumptions:
// - `src/index` has exactly one key.
// - The name of that key is the `CamelCase` class name we want to export.
// - The `kebab-case`'d name is the desired output file name.
//
require("babel-core/register");
var lib = require(ENTRY_JS);
var libKeys = Object.keys(lib);
if (libKeys.length !== 1) {
  throw new Error("Need exactly one exported component key");
}
var libName = libKeys[0];
var libPath = _.kebabCase(libName);

module.exports = {
  cache: true,
  entry: ENTRY_JS,
  externals: [
    {
      "react": {
        root: "React",
        commonjs2: "react",
        commonjs: "react",
        amd: "react"
      }
    }
  ],
  output: {
    path: path.join(ROOT, "dist"),
    filename: libPath + ".min.js",
    library: libName,
    libraryTarget: "umd"
  },
  resolve: {
    extensions: ["", ".js", ".jsx"]
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: [/node_modules/],
        // **Note**: Cannot use shorthand `"babel-loader"` or `"babel"` when
        // we are playing around with `NODE_PATH` in builder. Manually
        // resolve path.
        loader: require.resolve("babel-loader")
      }, {
        test: /\.css$/,
        loader: require.resolve("style-loader") + "!css"
      }, {
        test: /\.(png|jpg)$/,
        loader: require.resolve("url-loader") + "?limit=8192"
      }
    ]
  },
  plugins: [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new webpack.DefinePlugin({
      // Signal production, so that webpack removes non-production code that
      // is in condtionals like: `if (process.env.NODE_ENV === "production")`
      "process.env.NODE_ENV": JSON.stringify("production")
    }),
    new webpack.SourceMapDevToolPlugin("[file].map")
  ]
};
