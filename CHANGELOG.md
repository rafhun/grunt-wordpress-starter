<a name="0.2.0"></a>
# [0.2.0](https://github.com/rafhun/wpbp/compare/v0.1.8...v0.2.0) (2015-10-01)


### Bug Fixes

* **browserSync:** refresh on changes to styleguide files as well ([4f932f3](https://github.com/rafhun/wpbp/commit/4f932f3)), closes [#2](https://github.com/rafhun/wpbp/issues/2)

### Features

* **grunt:** adjust imagemin to wordpress environment ([703d092](https://github.com/rafhun/wpbp/commit/703d092)), closes [#4](https://github.com/rafhun/wpbp/issues/4)
* **grunt:** watch for file changes to styleguide markup files ([e6c736f](https://github.com/rafhun/wpbp/commit/e6c736f)), closes [#3](https://github.com/rafhun/wpbp/issues/3)



<a name="0.1.8"></a>
## [0.1.8](https://github.com/rafhun/wpbp/compare/v0.1.7...v0.1.8) (2015-09-29)


### Bug Fixes

* **git:** ignore generated svg files ([d2c2806](https://github.com/rafhun/wpbp/commit/d2c2806))
* **grunt:** save documentation into the wwwroot not the project root ([fee9033](https://github.com/rafhun/wpbp/commit/fee9033))
* **rsync:** use compareMode: checksum by default ([8ee5878](https://github.com/rafhun/wpbp/commit/8ee5878)), closes [#1](https://github.com/rafhun/wpbp/issues/1)



<a name="0.1.7"></a>
## [0.1.7](https://github.com/rafhun/wpbp/compare/v0.1.6...v0.1.7) (2015-09-23)


### Bug Fixes

* **kss:** correctly include js to styleguide ([85449c0](https://github.com/rafhun/wpbp/commit/85449c0))
* **watch:** run specific jshint task on changes not all ([cac1fa9](https://github.com/rafhun/wpbp/commit/cac1fa9))



<a name="0.1.6"></a>
## [0.1.6](https://github.com/rafhun/wpbp/compare/v0.1.5...v0.1.6) (2015-09-22)


### Bug Fixes

* **git:** ignore whole wwwroot ([023510a](https://github.com/rafhun/wpbp/commit/023510a))
* **grunt:** add getWP to setup task ([ecdb85c](https://github.com/rafhun/wpbp/commit/ecdb85c))
* **grunt:** call kss instead of sassdown in watch task ([c74fa3c](https://github.com/rafhun/wpbp/commit/c74fa3c))



<a name="0.1.5"></a>
## [0.1.5](https://github.com/rafhun/wpbp/compare/v0.1.4...v0.1.5) (2015-09-22)


### Bug Fixes

* **grunt:** adjust sassdoc configuration build folder ([f378b09](https://github.com/rafhun/wpbp/commit/f378b09))
* **grunt:** correctly import kss assets ([9ef4b46](https://github.com/rafhun/wpbp/commit/9ef4b46))
* **grunt:** optimize config ([ef5ecfa](https://github.com/rafhun/wpbp/commit/ef5ecfa))
* **grunt:** remove another typo from aliases ([5e0fe86](https://github.com/rafhun/wpbp/commit/5e0fe86))
* **grunt:** remove dot in aliases ([8cf15ec](https://github.com/rafhun/wpbp/commit/8cf15ec))

### Features

* **grunt:** manage plugins and themes through composer ([16c5907](https://github.com/rafhun/wpbp/commit/16c5907))



<a name="0.1.4"></a>
## [0.1.4](https://github.com/rafhun/wpbp/compare/v0.1.3...v0.1.4) (2015-09-21)


### Bug Fixes

* **grunt:** optimize grunt tasks ([c6a5262](https://github.com/rafhun/wpbp/commit/c6a5262))

### Features

* **docs:** add sassdoc and kss-node ([77c70e5](https://github.com/rafhun/wpbp/commit/77c70e5))



<a name="0.1.3"></a>
## [0.1.3](https://github.com/rafhun/wpbp/compare/v0.1.2...v0.1.3) (2015-09-09)


### Bug Fixes

* set better db prefix in secrets-template ([539d841](https://github.com/rafhun/wpbp/commit/539d841))
* **grunt:** add placeholder favicon ([56c23da](https://github.com/rafhun/wpbp/commit/56c23da))
* **grunt:** correct hashres ([fb91908](https://github.com/rafhun/wpbp/commit/fb91908))
* **grunt:** correctly set dest folder for imagemin task ([f37976a](https://github.com/rafhun/wpbp/commit/f37976a))
* **grunt:** reference correct getWP task ([46b5ecb](https://github.com/rafhun/wpbp/commit/46b5ecb))



<a name="0.1.2"></a>
## [0.1.2](https://github.com/rafhun/wpbp/compare/v0.1.1...v0.1.2) (2015-09-07)


### Bug Fixes

* **grunt:** add keys source file ([5ab0db6](https://github.com/rafhun/wpbp/commit/5ab0db6))
* **grunt:** add missing / to css path ([edfbb6e](https://github.com/rafhun/wpbp/commit/edfbb6e))
* **grunt:** better key getter ([2ff56b9](https://github.com/rafhun/wpbp/commit/2ff56b9))
* **grunt:** fix wp install ([f785b1e](https://github.com/rafhun/wpbp/commit/f785b1e))
* **grunt:** pass root folder as variable to script ([f3d5911](https://github.com/rafhun/wpbp/commit/f3d5911))
* **grunt:** reference correct config file for getWP ([eddcdac](https://github.com/rafhun/wpbp/commit/eddcdac))
* **grunt:** relax jshint settings ([9a63018](https://github.com/rafhun/wpbp/commit/9a63018))

### Features

* **grunt:** add smarter script to download WP ([1f337d7](https://github.com/rafhun/wpbp/commit/1f337d7))



<a name="0.1.1"></a>
## [0.1.1](https://github.com/rafhun/wpbp/compare/v0.1.0...v0.1.1) (2015-08-19)


### Bug Fixes

* **build:** fix bump config ([4655ac4](https://github.com/rafhun/wpbp/commit/4655ac4))

### Features

* **build:** add changelog ([476d4e6](https://github.com/rafhun/wpbp/commit/476d4e6))
* **grunt:** complete rebuild of grunt config and plugins ([52cb38f](https://github.com/rafhun/wpbp/commit/52cb38f))



<a name="0.1.0"></a>
# 0.1.0 (2015-04-20)




