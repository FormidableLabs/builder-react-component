[![Travis Status][trav_img]][trav_site]

Builder Archetype: React Component
==================================

A React component archetype for [builder][].

## Project Structure

This archetype assumes an architecture as follows:

```
demo/
  app.jsx
  index.html
src
  index.js
test
  client/
    spec/
      *.jsx?
    main.js
    test.html
.builderrc
package.json
```

An example project using this structure is:
[formidable-react-component-boilerplate][]

## Tasks

```
$ builder help
Usage:

  builder [action] [task]

Actions:

  run, help, concurrent

Tasks:

  npm:postinstall
    node -e "require('fs').stat('lib', function(e,s){process.exit(e || !s.isDirectory() ? 1 : 0)})" || builder run build-lib

  npm:preversion
    builder run check

  npm:version
    builder run clean && builder run build && git add -A dist

  npm:test
    builder run test-frontend

  clean-dist
    rimraf dist

  build-dist-min
    webpack --config node_modules/builder-react-component/config/webpack/webpack.config.js

  build-dist-dev
    webpack --config node_modules/builder-react-component/config/webpack/webpack.config.dev.js

  build-dist
    builder run clean-dist && builder run build-dist-min && builder run build-dist-dev

  clean-lib
    rimraf lib

  build-lib
    builder run clean-lib && babel --babelrc node_modules/builder-react-component/config/babel/.babelrc src -d lib

  clean
    builder run clean-lib && builder run clean-dist

  build
    builder run build-lib && builder run build-dist

  server-dev
    webpack-dev-server --port 3000 --config  node_modules/builder-react-component/config/webpack/demo/webpack.config.dev.js --colors --content-base demo

  server-hot
    webpack-dev-server --port 3000 --config  node_modules/builder-react-component/config/webpack/demo/webpack.config.hot.js --colors --hot --content-base demo

  server-test
    webpack-dev-server --port 3001 --config node_modules/builder-react-component/config/webpack/webpack.config.test.js --colors

  dev
    builder concurrent server-dev server-test

  hot
    builder concurrent server-hot server-test

  open-demo
    opener http://127.0.0.1:3000

  open-dev
    builder concurrent dev open-demo

  open-hot
    builder concurrent hot open-demo

  lint-server
    eslint --color -c node_modules/builder-react-component/config/eslint/.eslintrc-server *.js

  lint-client
    eslint --color --ext .js,.jsx -c node_modules/builder-react-component/config/eslint/.eslintrc-client src demo/*.jsx

  lint-client-test
    eslint --color --ext .js,.jsx -c node_modules/builder-react-component/config/eslint/.eslintrc-client-test src test/client

  lint
    builder concurrent lint-server lint-client lint-client-test

  test-frontend
    node node_modules/builder-react-component/node_modules/karma/bin/karma start node_modules/builder-react-component/config/karma/karma.conf.js

  test-frontend-ci
    node node_modules/builder-react-component/node_modules/karma/bin/karma start --browsers PhantomJS,Firefox node_modules/builder-react-component/config/karma/karma.conf.coverage.js

  test-frontend-cov
    node node_modules/builder-react-component/node_modules/karma/bin/karma start node_modules/builder-react-component/config/karma/karma.conf.coverage.js

  test-frontend-dev
    node node_modules/builder-react-component/node_modules/karma/bin/karma start node_modules/builder-react-component/config/karma/karma.conf.dev.js

  test
    builder run npm:test

  test-ci
    builder run test-frontend-ci

  test-cov
    builder run test-frontend-cov

  test-dev
    builder run test-frontend-dev

  check
    builder run lint && builder run test

  check-ci
    builder run lint && builder run test-ci

  check-cov
    builder run lint && builder run test-cov

  check-dev
    builder run lint && builder run test-dev

  postinstall
    builder run npm:postinstall

  preversion
    builder run npm:preversion

  version
    builder run npm:version
```

[builder]: https://github.com/FormidableLabs/builder
[formidable-react-component-boilerplate]: https://github.com/FormidableLabs/formidable-react-component-boilerplate
[trav_img]: https://api.travis-ci.org/FormidableLabs/builder-react-component.svg
[trav_site]: https://travis-ci.org/FormidableLabs/builder-react-component
