Contributing
============

Thanks for helping out!

## Dependencies

We have a three-way dependency scheme:

* `package.json:dependencies`: Production dependencies for the archetype
  installed in a project.
* `dev/package.json:dependencies`: Development dependencies for the archetype
  installed in a project.
* `package.json:devDependencies`: The development dependencies used _internally_
  for the this archetype during development (self tests, checks, etc.) that
  are **not** part of the overall archeype outside workflow.

## Checks, Tests

Run `npm run builder:check`

## Documentation

To generate the usage snippet in the `README.md`, first go to a project
that _uses_ the archetype and then run:

```sh
$ builder help builder-react-component | egrep "^[^\[]|^$"
```

in any project where this archetype is installed and paste in the output.

## Release

For tagged official releases _only_, make sure to:

1. Update appropriate `HISTORY.md` notes
2. Bump `package.json` version
3. Generate a new `ARCHETYPE-dev` `package.json`
4. Add to git, tag, and publish

```sh
$ vim HISTORY.md              # Version notes
$ vim package.json            # Bump version
$ builder-support gen-dev     # Generate `dev/*` files
$ npm run builder:check       # Last check!
$ git add package.json dev HISTORY.md
$ git commit -m "Version bump"
$ git tag -a "vNUMBER" -m "Version NUMBER"
$ git push && git push --tags
$ npm publish                 # Publish main project
$ cd dev && npm publish       # Publish dev project
```
