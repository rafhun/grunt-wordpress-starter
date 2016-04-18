# WordPress Configuration

There are two basic `wp-config.php` templates to use for you, one for development and one for production environments. The main difference is that in the development version `WP_DEBUG` and `SAVEQUERIES` are set to true while filemods are allowed (`DISALLOW_FILE_MODS`) while these constants are set exactly in reverse for the production environment. Therefore make sure to only install plugins and themes through Composer. Also control updates through it so you are able to version things. Remember that you will not be able to update plugins, themes and languages through the backend in your live environment.

If you need to apply any customizations to the `wp-config.php` files make sure not to edit the file in your destination folder as these files get wiped on every new run of Grunt. Instead work on the files in `src/config/` where you find the two templates for the development environments (`wp-config-dev.php`) and the live environment (`wp-config-prod.php`).

## Multisite

The configuration preset for your local and staging environments does have the option of installing a multisite baked in. To set it up, run `grunt local` and install WordPress as usual. Then head to Tools > Network and set it up. The configuration templates come prepared for the non-subdomain install. Thus if you choose to install the multisite with folders (needed for some translation plugins) set it up and once you are asked to change your `wp-config.php` and `.htaccess` files, run `grunt multi` which uses already prepared files containing the necessary changes.

If you choose to use another setup go ahead and change the `src/config/wp-config-multi*` files and the `.htacess~multi`. These are automatically used if you choose to use the multisite specific tasks. The task available for use are `multi`, `localMulti`, `stagingMulti` and `productionMulti`. For pushing to the server the easiest way is to either adjust the tasks in the `aliases.yml` file or simply do the build first (`grunt productionMulti`) then rsync after that with `grunt rsync:production`.

## Multisite Database Migration

Since the mighty WP DB Migrate Pro only allows multisite exports in the paid version there is a fallback for at least your local environment. Also if you have SSH access to your hosting and can install the WP CLI on there, you can also use the command as template to run DB migrations on the server.

For local use you can run `shell dbLocal2Stage` or `shell dbLocal2Live` which will automatically safely search and replace your database, export the file ready to be imported on the server and then reverts to your local contents automatically.
