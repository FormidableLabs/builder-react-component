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

## Project Structure

This archetype assumes an architecture as follows:

```
demo/
  app.jsx
  index.html
src
  components/
    *.jsx
  index.js
test
  client/
    spec/
      components/
        *.jsx?
      *.jsx?
    main.js
    test.html
.builderrc
package.json
```

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

An example project using this structure is:
[formidable-react-component-boilerplate][]

## Usage Notes

This archetype does not currently specify its own `.babelrc`. Your project
should specify its own in the root directory if you want non-default Babel
settings (like using stage 0, for instance). See [the recommended
settings](config/babel/.babelrc).

## Tasks

```
$ builder help builder-react-component

Usage:

  builder builder-react-component [flags] [task]

Actions:

  help, run, concurrent, install

Flags:

  --builderrc: Path to builder config file (default: `.builderrc`)

Tasks:

  builder:check
    npm run builder:lint

  builder:lint
    npm run builder:lint-server

  builder:lint-server
    eslint --color -c config/eslint/.eslintrc-server config/karma config/webpack

  builder:prepublish
    node util/dev.js

  npm:postinstall
    node -e "require('fs').stat('lib', function(e,s){process.exit(e || !s.isDirectory() ? 1 : 0)})" || builder run build-lib

  npm:preversion
    builder run check

  npm:test
    builder run test-frontend

  npm:version
    builder run clean && builder run build && git add -A dist

  build
    builder run build-lib && builder run build-dist

  build-dist
    builder run clean-dist && builder run build-dist-min && builder run build-dist-dev

  build-dist-dev
    webpack --config node_modules/builder-react-component/config/webpack/webpack.config.dev.js --colors

  build-dist-min
    webpack --config node_modules/builder-react-component/config/webpack/webpack.config.js --colors

  build-lib
    builder run clean-lib && babel src -d lib --copy-files

  check
    builder run lint && builder run test

  check-ci
    builder run lint && builder run test-ci

  check-cov
    builder run lint && builder run test-cov

  check-dev
    builder run lint && builder run test-dev

  clean
    builder run clean-lib && builder run clean-dist

  clean-dist
    rimraf dist

  clean-lib
    rimraf lib

  dev
    builder concurrent server-dev server-test

  hot
    builder concurrent server-hot server-test

  lint
    builder concurrent lint-server lint-client lint-client-test

  lint-client
    eslint --color --ext .js,.jsx -c node_modules/builder-react-component/config/eslint/.eslintrc-client src demo/*.jsx

  lint-client-test
    eslint --color --ext .js,.jsx -c node_modules/builder-react-component/config/eslint/.eslintrc-client-test src test/client

  lint-server
    eslint --color -c node_modules/builder-react-component/config/eslint/.eslintrc-server *.js

  open-demo
    opener http://127.0.0.1:3000

  open-dev
    builder concurrent dev open-demo

  open-hot
    builder concurrent hot open-demo

  server-dev
    webpack-dev-server --port 3000 --config node_modules/builder-react-component/config/webpack/demo/webpack.config.dev.js --colors --content-base demo

  server-hot
    webpack-dev-server --port 3000 --config node_modules/builder-react-component/config/webpack/demo/webpack.config.hot.js --colors --hot --content-base demo

  server-test
    webpack-dev-server --port 3001 --config node_modules/builder-react-component/config/webpack/webpack.config.test.js --colors

  test
    builder run npm:test

  test-ci
    builder run test-frontend-ci

  test-cov
    builder run test-frontend-cov

  test-dev
    builder run test-frontend-dev

  test-frontend
    karma start node_modules/builder-react-component/config/karma/karma.conf.js

  test-frontend-ci
    karma start --browsers PhantomJS,Firefox node_modules/builder-react-component/config/karma/karma.conf.coverage.js

  test-frontend-cov
    karma start node_modules/builder-react-component/config/karma/karma.conf.coverage.js

  test-frontend-dev
    karma start node_modules/builder-react-component/config/karma/karma.conf.dev.js
```

[builder]: https://github.com/FormidableLabs/builder
[formidable-react-component-boilerplate]: https://github.com/FormidableLabs/formidable-react-component-boilerplate
[trav_img]: https://api.travis-ci.org/FormidableLabs/builder-react-component.svg
[trav_site]: https://travis-ci.org/FormidableLabs/builder-react-component
