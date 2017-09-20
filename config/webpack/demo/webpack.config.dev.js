"use strict";

var webpack = require("webpack");

module.exports = {

  devServer: {
    contentBase: "./demo",
    noInfo: false
  },

  output: {
    path: "./demo",
    filename: "main.js",
    publicPath: "/assets/"
  },

  cache: true,
  devtool: "source-map",
  entry: {
    app: ["./demo/app.js"]
  },
  stats: {
    colors: true,
    reasons: true
  },
  resolve: {
    extensions: ["", ".js", ".json"]
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: [/node_modules/],
        // **Note**: Cannot use shorthand `"babel-loader"` or `"babel"` when
        // we are playing around with `NODE_PATH` in builder. Manually
        // resolve path.
        loader: require.resolve("babel-loader")
      }, {
        test: /\.json$/,
        loader: require.resolve("json-loader")
      }, {
        test: /\.css$/,
        loader: require.resolve("style-loader") + "!" + require.resolve("css-loader")
      }, {
        test: /\.(png|jpg)$/,
        loader: require.resolve("url-loader") + "?limit=8192"
      }
    ]
  },
  plugins: [
    new webpack.NoErrorsPlugin()
  ]
};
