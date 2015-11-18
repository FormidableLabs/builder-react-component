/**
 * Copy the builderrc into the project root
 */
var fs = require("fs");
var path = require("path");

/* Paths */
console.log(process);
var builderrcSrc = path.join(__dirname, "..", ".builderrc");
var builderrcTarget = path.join(process.cwd(), "../..", ".builderrc");

/* Copy .builderrc to project root */
fs.readFile(builderrcSrc, function (err, contents) {
  fs.writeFile(builderrcTarget, contents.toString(), function (err) {
    if (err) {
      console.warn("Unable to generate .builderrc");
    } else {
      console.log("Successfully generated .builderrc in project root");
    }
  });
});


