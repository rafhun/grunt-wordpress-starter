# Managing WordPress

## Installation

Upon running `npm install` WordPress is automatically installed with (depending on whether WP CLI is available) the language locale you are prompted for during the process. Do not right away start with installing WordPress through a browser but take a moment and save the database credentials to your `secrets.json` file. This is gitignored by default and thus will not end up in your repository. Then run either `grunt` (if you also want to start up BrowserSync) or just `grunt local` to simply compile all starting assets and a starter `wp-config.php`. Now you are ready to visit your development URL in your browser of choice and set up your site.

By default only the production configuration file sets `define( 'DISALLOW_FILE_MODS', true );`, meaning will be able to update languages and plugins through the WordPress backend in the local and staging environment but not on the server. However it is recommended to manage plugins through the Composer file already in the repo, especially if you need to lock versions in to ensure compatibility. As thus the configurations get shared over all environments not just your local one.

Alternatively, if you have the WP CLI available in your path you can manage WordPress directly through it. A configuration file for it already sits in the root folder pointing the WP CLI to the correct WordPress folder (set up during the installation process). Through this you are able to update WordPress core, languages and plugins as well as running database operations and more. Find out more directly on their [website](http://wp-cli.org/).
