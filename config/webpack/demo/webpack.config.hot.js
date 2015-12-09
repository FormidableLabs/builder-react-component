"use strict";

var _ = require("lodash"); // devDependency
var base = require("./webpack.config.dev");

// Clone our own module object.
var mod = _.cloneDeep(base.module);

// Update loaders array. First loader needs react-hot-loader.
mod.loaders[0].loaders = [require.resolve("react-hot-loader")]
  .concat(mod.loaders[0].loader ? [mod.loaders[0].loader] : [])
  .concat(mod.loaders[0].loaders || []);

// Remove single loader if any.
mod.loaders[0].loader = null;

module.exports = _.merge({}, _.omit(base, "entry", "module"), {
  entry: {
    app: [
      require.resolve("webpack/hot/dev-server"),
      "./demo/app.jsx"
    ]
  },

  module: mod
});
