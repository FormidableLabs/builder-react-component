"use strict";
/**
 * Webpack frontend test (w/ coverage) configuration.
 */
var devRequire = require("builder-react-component-dev/require");
var _ = devRequire("lodash"); // devDependency
var testCfg = require("./webpack.config.test");

module.exports = _.merge({}, testCfg, {
  module: {
    preLoaders: [
      // Manually instrument client code for code coverage.
      // https://github.com/deepsweet/isparta-loader handles ES6 + normal JS.
      {
        test: /src\/.*\.jsx?$/,
        exclude: /(test|node_modules)\//,
        loader: devRequire.resolve("isparta-loader")
      }
    ]
  }
});
