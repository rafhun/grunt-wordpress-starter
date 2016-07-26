# Styles

Our styles are compiled with `libsass` then put through PostCSS where they are automatically prefixed and are finally minified through `cssmin`. Before minification we add the banner needed for the WordPress theme to work and save this file to the theme folder. It is not included in the site, but serves as an uncompressed reference and information source for WordPress.

## Fonts and the Font Loader
For using custom webfonts a loader has been implemented that needs some adjustments to work properly. Open the `src/php/inc/font-loader.php` as well as the `src/config/kss/template/index.html` file and make sure to adjust the font family names. You can also add multiple fonts in multiple stages, however you feel is appropriate. Find some examples [here](https://www.zachleat.com/web/comprehensive-webfonts/) and [here](https://www.zachleat.com/web-fonts/demos/foft.html).

## Documentation
There are two types of documentation available within our Sass code. For one we can document our Sass itself through Sassdoc, on the other hand a styleguide can be generated directly from the source code.

### Sassdoc
Use this to document your Sass logic such as variables, functions, mixins or extends. Make sure to include detailed documentation especially if the Sass code itself will be reused.

### KSS
A styleguide is generated based on `kss-node` with a slightly adapted default layout. You should always generate a styleguide for your project to ease keeping a good view of all the styles. Also it is easier and recommended to run visual regression tests (see below) on the styleguide and on a component level, not on the final page.

## Visual Regression Testing
A testing suite is set up using CasperJS and PhantomCSS, ready for your own custom tests. One example test is already set up (can be found in the `tests/` folder). It is recommended to add tests as you finalize components then add the `phantomcss` task to your default task (commented out at the moment as part of the docs task) so you do not mistakenly break comoponents you have already programmed.

On the first runs (or if no screenshots exist yet) the baselines will be created. To reset a component, simply delete the respective screenshot from the `tests/screenshots/` folder.
