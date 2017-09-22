"use strict";
/**
 * Webpack frontend test configuration.
 */
var path = require("path");
var _ = require("builder-react-component-dev/require")("lodash");
var prodCfg = require("./webpack.config");

// Stash the location of `<archetype-dev>/node_modules`
//
// A normal `require.resolve` looks at `package.json:main`. We instead want
// just the _directory_ of the module. So use heuristic of finding dir of
// package.json which **must** exist at a predictable location.
var archetypeDevNodeModules = path.join(
  path.dirname(require.resolve("builder-react-component-dev/package.json")),
  "node_modules"
);

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
    },
    modules: [archetypeDevNodeModules]
  }),
  resolveLoader: {
    modules: [archetypeDevNodeModules]
  },
  module: prodCfg.module,
  devtool: "source-map"
};
