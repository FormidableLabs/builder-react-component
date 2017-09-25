"use strict";

var path = require("path");

var SRC = path.resolve("src");
var DEMO = path.resolve("demo");

module.exports = {

  devServer: {
    contentBase: "./demo",
    noInfo: false
  },

  output: {
    path: DEMO,
    pathinfo: true,
    filename: "main.js",
    publicPath: "/assets/"
  },

  cache: true,
  devtool: "source-map",
  entry: {
    app: ["./demo/app"]
  },
  stats: {
    colors: true,
    reasons: true
  },
  module: {
    rules: [
      {
        // Transform source
        test: /\.js$/,
        // Use include specifically of our sources.
        // Do _not_ use an `exclude` here.
        include: [SRC, DEMO],
        // **Note**: Cannot use shorthand `"babel-loader"` or `"babel"` when
        // we are playing around with `NODE_PATH` in builder. Manually
        // resolve path.
        loader: require.resolve("babel-loader")
      },
      {
        test: /\.json$/,
        loader: require.resolve("json-loader")
      },
      {
        test: /\.css$/,
        loader: require.resolve("style-loader") + "!" + require.resolve("css-loader")
      },
      {
        test: /\.(png|jpg)$/,
        loader: require.resolve("url-loader") + "?limit=8192"
      }
    ]
  }
};
