<a name="0.4.0"></a>
# [0.4.0](https://github.com/rafhun/wpbp/compare/v0.3.1...v0.4.0) (2015-11-17)


### Bug Fixes

* **hashres:** correctly hash script file ([7353bcf](https://github.com/rafhun/wpbp/commit/7353bcf))

### Features

* **grunt:** add ftp push task ([349a8cb](https://github.com/rafhun/wpbp/commit/349a8cb))
* **htaccess:** add production env template ([c8e2a71](https://github.com/rafhun/wpbp/commit/c8e2a71))
* **setup:** allow for wget or curl downloads ([0045db0](https://github.com/rafhun/wpbp/commit/0045db0))



<a name="0.3.1"></a>
## [0.3.1](https://github.com/rafhun/wpbp/compare/v0.3.0...v0.3.1) (2015-11-10)


### Bug Fixes

* **grunt:** remove excessive commas from secrets template ([6b7fca2](https://github.com/rafhun/wpbp/commit/6b7fca2))

### Features

* **kss:** add custom kss template ([0d66bdd](https://github.com/rafhun/wpbp/commit/0d66bdd)), closes [#5](https://github.com/rafhun/wpbp/issues/5)



<a name="0.3.0"></a>
# [0.3.0](https://github.com/rafhun/wpbp/compare/v0.2.3...v0.3.0) (2015-11-03)


### Bug Fixes

* **grunt:** remove sassdown reference from gruntfile ([4794e94](https://github.com/rafhun/wpbp/commit/4794e94))
* **php:** remove empty files ([94cebe8](https://github.com/rafhun/wpbp/commit/94cebe8))
* **rsync:** improve configuration for most use cases ([0b9367b](https://github.com/rafhun/wpbp/commit/0b9367b))
* **scss:** remove all partial imports from style.scss except bower dependencies ([46ad264](https://github.com/rafhun/wpbp/commit/46ad264))
* **scss-lint:** disable spaceAroundOperators rule ([e7bc23e](https://github.com/rafhun/wpbp/commit/e7bc23e))
* **secrets-template:** remove unnecessary config values ([cc78da7](https://github.com/rafhun/wpbp/commit/cc78da7))

### Features

* **grunt:** add acf pro key to composer.json on setup ([1b3b2a8](https://github.com/rafhun/wpbp/commit/1b3b2a8))
* **grunt:** automatically update devUrl on setup ([5bcdc50](https://github.com/rafhun/wpbp/commit/5bcdc50))



<a name="0.2.3"></a>
## [0.2.3](https://github.com/rafhun/wpbp/compare/v0.2.2...v0.2.3) (2015-10-26)


### Bug Fixes

* **languages:** add watch task for translations ([08fed98](https://github.com/rafhun/wpbp/commit/08fed98))

### Features

* **grunt:** add default htaccess and tasks to copy it ([5c788ea](https://github.com/rafhun/wpbp/commit/5c788ea))
* **wp:** add translation tasks ([17e9b53](https://github.com/rafhun/wpbp/commit/17e9b53))



<a name="0.2.2"></a>
## [0.2.2](https://github.com/rafhun/wpbp/compare/v0.2.1...v0.2.2) (2015-10-09)


### Bug Fixes

* **grunt:** better behavior of watch on composer changes ([8b680a1](https://github.com/rafhun/wpbp/commit/8b680a1))
* **grunt:** open browserSync to defined styleguide folder ([8c20b7e](https://github.com/rafhun/wpbp/commit/8c20b7e))



<a name="0.2.1"></a>
## [0.2.1](https://github.com/rafhun/wpbp/compare/v0.2.0...v0.2.1) (2015-10-09)


### Bug Fixes

* **scss:** use bower provided normalize and update main manifest structure ([edcf87e](https://github.com/rafhun/wpbp/commit/edcf87e))
* **styles:** correctly name the styleguide index file ([0fb1b44](https://github.com/rafhun/wpbp/commit/0fb1b44))

### Features

* **wp:** add some more default plugins ([aa656bd](https://github.com/rafhun/wpbp/commit/aa656bd))



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




