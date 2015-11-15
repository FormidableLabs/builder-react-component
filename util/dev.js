"use strict";

/**
 * Extract devDependencies to separate module.
 */
var pkg = require("../package.json");

// Update "dev" name
pkg.name += "-dev";
pkg.description += " (Development)";

// Patch `devDependencies` into `dependencies`
pkg.dependencies = pkg.devDependencies;

// Remove scripts, dev deps, etc.
pkg.scripts = {};
pkg.devDependencies = {};

// Echo out.
console.log(JSON.stringify(pkg, null, 2));
