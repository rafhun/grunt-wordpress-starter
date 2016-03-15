# WordPress Configuration

There are two basic `wp-config.php` templates to use for you, one for development and one for production environments. The main difference is that in the development version `WP_DEBUG` and `SAVEQUERIES` are set to true while filemods are allowed (`DISALLOW_FILE_MODS`) while these constants are set exactly in reverse for the production environment. Therefore make sure to only install plugins and themes through Composer. Also control updates through it so you are able to version things. Remember that you will not be able to update plugins, themes and languages through the backend in your live environment.

If you need to apply any customizations to the `wp-config.php` files make sure not to edit the file in your destination folder as these files get wiped on every new run of Grunt. Instead work on the files in `src/config/` where you find the two templates for the development environments (`wp-config-dev.php`) and the live environment (`wp-config-prod.php`).
