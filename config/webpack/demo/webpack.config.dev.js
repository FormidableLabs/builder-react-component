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
    app: ["./demo/app.jsx"]
  },
  stats: {
    colors: true,
    reasons: true
  },
  resolve: {
    extensions: ["", ".js", ".jsx"]
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: [/node_modules/],
        loader: "babel"
      }, {
        test: /\.css$/,
        loader: "style!css"
      }, {
        test: /\.(png|jpg)$/,
        loader: "url?limit=8192"
      }
    ]
  },
  plugins: [
    new webpack.NoErrorsPlugin()
  ]
};