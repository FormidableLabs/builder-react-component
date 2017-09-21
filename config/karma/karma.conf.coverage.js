"use strict";
/*
 * Karma Configuration: "coverage" version.
 *
 * This configuration is the same as basic one-shot version, just with coverage.
 */
var webpackCovCfg = require("../webpack/webpack.config.coverage");

module.exports = function (config) {
  /* eslint-disable global-require */
  require("./karma.conf")(config);
  config.set({
    reporters: ["spec", "coverage-istanbul"],
    webpack: webpackCovCfg,
    coverageIstanbulReporter: {
      reports: [
        "text-summary" // TODO: MORE REPORTS
      ],
      fixWebpackSourcePaths: true
    }
  });
};
