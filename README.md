[![Travis Status][trav_img]][trav_site]

Builder Archetype: React Component
==================================

A React component archetype for [builder][].

## Installation

To use the production and development workflows, install both this package
and the development module:

```sh
$ npm install --save builder-react-component
$ npm install --save-dev builder-react-component-dev
```

## Generator

To bootstrap a new project from scratch with template files from this
archetype, you can use [builder-init][]:

```sh
$ npm install -g builder-init
$ builder-init builder-react-component
```

This will download this archetype, prompt you for several template data values
and inflate the [archetype templates](./init) to real files at a chosen
directory.

## Project Structure

See the [development][] guide for workflows associated with this archetype.

The archetype assumes a file structure like the following:

```
demo/
  app.js
  index.html
src
  components/
    *.js
  index.js
test
  client/
    spec/
      components/
        *.js
      *.js
    main.js
    test.html
.builderrc
package.json
```

This matches the [`builder-init` templates](init) found in the source of this
archetype.

### File / Component Name

The `name` field in `package.json` (the published `npm` package name) is
assumed to be:

1. The desired file name of the distribution files and dash-cased.
2. The desired default exported class name when converted to PascalCase.

So, if a `package.json` has:

```js
{
  "name": "my-cool-component"
}
```

The distribution files to output are:

```
dist/my-cool-component.js
dist/my-cool-component.js.map
dist/my-cool-component.min.js
dist/my-cool-component.min.js.map
```

and the exported class name is `MyCoolComponent`.

## Usage Notes

This archetype does not currently specify its own `.babelrc`. Your project
should specify its own in the root directory if you want non-default Babel
settings (like using stage 0, for instance). See [the recommended
settings](config/babel/.babelrc).

## Tasks

```
$ builder help builder-react-component

Usage:

  builder <action> <task(s)>

Actions:

  run, concurrent, envs, help

Flags: General

  --builderrc: Path to builder config file (default: `.builderrc`)

  --help: Display help and exit

  --version: Display version and exit

  --quiet: Silence logging

  --log-level: Level to log at (`info`, `warn`, `error`, `none`)

  --env: JSON string of environment variables to add to process

  --env-path: JSON file path of environment variables to add to process

Tasks:

  npm:postinstall
    [builder-react-component] builder run build

  npm:postpublish
    [builder-react-component] publishr postpublish -V

  npm:postversion
    [builder-react-component] publishr postversion -V

  npm:preversion
    [builder-react-component] builder run check

  npm:test
    [builder-react-component] builder run test-frontend

  npm:version
    [builder-react-component] builder run clean && builder run build && git add -A dist

  build
    [builder-react-component] builder run build-libs && builder run build-dist

  build-babel
    [builder-react-component] babel src --copy-files

  build-dist
    [builder-react-component] builder run clean-dist && builder run build-dist-min && builder run build-dist-dev

  build-dist-dev
    [builder-react-component] webpack --bail --config node_modules/builder-react-component/config/webpack/webpack.config.dev.js --colors

  build-dist-min
    [builder-react-component] webpack --bail --config node_modules/builder-react-component/config/webpack/webpack.config.js --colors

  build-es
    [builder-react-component] builder run --env '{"BABEL_ENV":"es"}' build-babel -- -d es

  build-lib
    [builder-react-component] builder run --env '{"BABEL_ENV":"commonjs"}' build-babel -- -d lib

  build-libs
    [builder-react-component] builder concurrent --queue=1 build-lib build-es

  check
    [builder-react-component] builder run lint && builder run test

  check-ci
    [builder-react-component] builder run lint && builder run test-ci

  check-cov
    [builder-react-component] builder run lint && builder run test-cov

  check-dev
    [builder-react-component] builder run lint && builder run test-dev

  clean
    [builder-react-component] builder run clean-libs && builder run clean-dist

  clean-dist
    [builder-react-component] rimraf dist

  clean-libs
    [builder-react-component] rimraf es lib

  dev
    [builder-react-component] builder concurrent server-dev server-test

  hot
    [builder-react-component] builder concurrent server-hot server-test

  lint
    [builder-react-component] builder concurrent lint-server lint-client lint-client-test

  lint-client
    [builder-react-component] eslint --color -c node_modules/builder-react-component/config/eslint/.eslintrc-client src demo/*.js

  lint-client-test
    [builder-react-component] eslint --color -c node_modules/builder-react-component/config/eslint/.eslintrc-client-test src test/client

  lint-server
    [builder-react-component] eslint --color -c node_modules/builder-react-component/config/eslint/.eslintrc-server *.js

  open-demo
    [builder-react-component] opener http://127.0.0.1:3000

  open-dev
    [builder-react-component] builder concurrent dev open-demo

  open-hot
    [builder-react-component] builder concurrent hot open-demo

  server-dev
    [builder-react-component] webpack-dev-server --port 3000 --config node_modules/builder-react-component/config/webpack/demo/webpack.config.dev.js --colors --content-base demo

  server-hot
    [builder-react-component] webpack-dev-server --port 3000 --config node_modules/builder-react-component/config/webpack/demo/webpack.config.hot.js --colors --hot --content-base demo

  server-test
    [builder-react-component] webpack-dev-server --port 3001 --config node_modules/builder-react-component/config/webpack/webpack.config.test.js --colors

  test
    [builder-react-component] builder run npm:test

  test-ci
    [builder-react-component] builder run test-frontend-ci

  test-cov
    [builder-react-component] builder run test-frontend-cov

  test-dev
    [builder-react-component] builder run test-frontend-dev

  test-frontend
    [builder-react-component] karma start node_modules/builder-react-component/config/karma/karma.conf.js

  test-frontend-ci
    [builder-react-component] karma start --browsers PhantomJS,Firefox node_modules/builder-react-component/config/karma/karma.conf.coverage.js

  test-frontend-cov
    [builder-react-component] karma start node_modules/builder-react-component/config/karma/karma.conf.coverage.js

  test-frontend-dev
    [builder-react-component] karma start node_modules/builder-react-component/config/karma/karma.conf.dev.js

  version-dry-run
    [builder-react-component] publishr dry-run -V
```

[builder]: https://github.com/FormidableLabs/builder
[builder-init]: https://github.com/FormidableLabs/builder-init
[development]: ./DEVELOPMENT.md
[trav_img]: https://api.travis-ci.org/FormidableLabs/builder-react-component.svg
[trav_site]: https://travis-ci.org/FormidableLabs/builder-react-component
