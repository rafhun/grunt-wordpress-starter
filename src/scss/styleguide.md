# Styleguide
This styleguide serves as reference for the styles created for this project. You can find coding examples and their respective styles within the categories.

## Fonts and the Font Loader
For using custom webfonts a loader has been implemented that needs some adjustments to work properly. Open the `src/php/inc/font-loader.php` as well as the `src/config/kss/template/index.html` file and make sure to adjust the font family names. You can also add multiple fonts in multiple stages, however you feel is appropriate. Find some examples [here](https://www.zachleat.com/web/comprehensive-webfonts/) and [here](https://www.zachleat.com/web-fonts/demos/foft.html).

## Architecture
The SCSS is architected roughly according to the atomic desing principles created by Brad Frost. [Find out more about atomic design here](http://bradfrost.com/blog/post/atomic-web-design/).

To keep our code clean and portable we only define globally used variables in the `dependencies/` folder. Everything that is strictly component specific should be defined right with the component. It is usually advisable to put components into their own subfolders containing at least a configuration and style file. Depending on complexity an additional functions or mixins file might be needed.

When defining variables for themeable elements always use the `!default` flag so it is overwritable by a theme file. Be careful not to overuse the flag though as not everything has to be themeable.

## Naming Conventions
* Use hyphens and lowercase not camelCase or undescores for naming variables, mixins, functions, ...
* Always define a variable with a color name that points to it, then assign this to a modular variable (use `$red: #f00; $primary-color: $red;`, never `$primary-color: #f00;`).
