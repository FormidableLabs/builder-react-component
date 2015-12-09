"use strict";

var _ = require("lodash"); // devDependency
var base = require("./webpack.config.dev");

// Clone our own module object.
var mod = _.cloneDeep(base.module);
var firstLoader = mod.loaders[0];

// Update loaders array. First loader needs react-hot-loader.
firstLoader.loaders = [require.resolve("react-hot-loader")]
  .concat(firstLoader.loader ? [firstLoader.loader] : [])
  .concat(firstLoader.loaders || []);

// Remove single loader if any.
firstLoader.loader = null;

module.exports = _.merge({}, _.omit(base, "entry", "module"), {
  entry: {
    app: [
      require.resolve("webpack/hot/dev-server"),
      "./demo/app.jsx"
    ]
  },

  module: mod
});
