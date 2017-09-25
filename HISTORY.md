History
=======

## 0.4.2

* Fix `es/` build to actually preserve `import`, `export`.

## 0.4.1

* Upgrade `npm:version` to remove old `git` command. (Not correct with new
  `publishr` workflow).

## 0.4.0

* Update dependencies, templates to modern webpack, babel, eslint, etc.
* Add publishr support.
* Upgrade Travis to modern yarn + node engines.
* Switch to separate repo for `builder-react-component-dev`
* Output new `es/` directory
* Remove `.jsx` suffix.

## 0.3.5

* Fix sanity-check in `demo/index.html` to support React 15.

## 0.3.4

* Add `json-loader` to support loading JSON files.
* Update webpack test config `externals` to support Enzyme.

## 0.3.3

* Update frontend code with "module pattern" for dev. dependencies.

## 0.3.2

* Publishing error. **Do not use**.

## 0.3.1

* Update Node code with "module pattern" for dev. dependencies.
* Add eslint to `dev/` files.
* Update recommended Builder `PATH` modifications verbiage.

## 0.3.0

* Update dependencies and templates (to use `archetype` data field).

## 0.2.0

* Add `builder-init` support with `init.js` and `init` templates.

## 0.1.4

* Ensure webpack exits with status 1 on errors

## 0.1.3

* Use to [`builder-support`](https://github.com/FormidableLabs/builder-support)
  to generate `dev/package.json` and add `README.md` to dev module.
  [#7](https://github.com/FormidableLabs/builder-react-component/issues/7)
  [#8](https://github.com/FormidableLabs/builder-react-component/issues/8)
* Switch to `cd lib ||` test for `npm:postinstall` task.
* Fix bug for `require.resolve`-ing "css" loader.
  [#15](https://github.com/FormidableLabs/builder-react-component/issues/15)

## 0.1.2

* Fix demo hot loader webpack configuration. ( [@coopy][] )

## 0.1.1

* Copy non-JS files in babel build step. ( [@hartmamt][] )

## 0.1.0

* Switch to `ARCHETYPE` + `ARCHETYPE-dev` model for dependencies.

## 0.0.4

* Switch to project root `.babelrc` instead of from archetype until fixed
  upstream. ( [@exogen][] )

## 0.0.3

* Infer component name off `package.json:name` instead of `src/index.js`.

## 0.0.2

* Fix dependency bug.

## 0.0.1

* Initial release.

[@coopy]: https://github.com/coopy
[@exogen]: https://github.com/exogen
[@hartmamt]: https://github.com/hartmamt
[@ryan-roemer]: https://github.com/ryan-roemer
