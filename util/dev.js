"use strict";

/**
 * Update devDependencies module to archetype base script.
 */
var fs = require("fs");
var path = require("path");
var pkg = require("../package.json");
var devPkg = require("../dev/package.json");

// Update "dev" name
pkg.name += "-dev";
pkg.description += " (Development)";

// Patch `devDependencies` into `dependencies`
pkg.dependencies = devPkg.dependencies;

// Remove scripts, dev deps, etc.
pkg.scripts = {};
pkg.devDependencies = {};

// Write out.
fs.writeFileSync(path.join(__dirname, "../dev/package.json"), JSON.stringify(pkg, null, 2));
