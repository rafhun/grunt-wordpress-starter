# Managing WordPress

## Installation

Upon running `npm install` WordPress is automatically installed with (depending on whether WP CLI is available) the language locale you are prompted for during the process. Do not right away start with installing WordPress through a browser but take a moment and save the database credentials to your `secrets.json` file. This is gitignored by default and thus will not end up in your repository. Then run either `grunt` (if you also want to start up BrowserSync) or just `grunt local` to simply compile all starting assets and a starter `wp-config.php`. Now you are ready to visit your development URL in your browser of choice and set up your site.

By default only the production configuration file sets `define( 'DISALLOW_FILE_MODS', true );`, meaning you will be able to update languages and plugins through the WordPress backend in the local and staging environment but not on the server. However it is recommended to manage plugins through the Composer file already in the repo and core version through Gruntconfig (see below), especially if you need to lock versions in to ensure compatibility. As thus the configurations get shared over all environments not just your local one.

Alternatively, if you have the WP CLI available in your path you can manage WordPress directly through it. A configuration file for it already sits in the root folder pointing the WP CLI to the correct WordPress folder (set up during the installation process). Through this you are able to update WordPress core, languages and plugins as well as running database operations and more. Find out more directly on their [website](http://wp-cli.org/).

## Version Management

Before the compilation of your assets a quick version check runs to make sure you are working with the same WordPress core files as other maintainers of the project. The basic WordPress version is to be set in the `Gruntconfig.yml` file and is then compared to the version in the core files (`wp-includes/version.php`). If versions match everything is good and will run normally, if there is a mismatch the script tries to download the version specified in your `Gruntconfig.yml` using WP-CLI. If that fails you will get a message indicating that you will need to update your WordPress core and which version is required. Therefore if a new version of WordPress rolls out the recommended step is to adjust the version in `Gruntconfig.yml` then run `grunt`.
