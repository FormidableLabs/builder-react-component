History
=======

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
