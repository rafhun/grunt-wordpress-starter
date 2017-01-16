<?php
/**
 * In dieser Datei werden die Grundeinstellungen für WordPress vorgenommen.
 * @package WordPress
 */

/**  MySQL Einstellungen - diese Angaben bekommst du von deinem Webhoster. */
define('DB_NAME', '@@db_name');
define('DB_USER', '@@db_user');
define('DB_PASSWORD', '@@db_password');
define('DB_HOST', '@@db_host');

define('DB_CHARSET', 'utf8');

/** Der collate type sollte nicht geändert werden */
define('DB_COLLATE', '');

/**
 * Sicherheitsschlüssel
 * @seit 2.6.0
 */
@@include

/**
 * WordPress Datenbanktabellen-Präfix
 */
$table_prefix  = '@@db_prefix';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 */
define( 'WP_DEBUG', @@wp_debug );
define( 'SAVEQUERIES', @@savequeries );

/**
 * Disallow File Mods
 * Since plugins and themes are managed through composer we can and should disable this in the backend.
 * This additionally serves to harden WordPress by making life harder for hackers. However security has to be managed manually!?
 */
define( 'DISALLOW_FILE_MODS', @@disallow_file_mods );

/* Multisite */
define ( 'WP_ALLOW_MULTISITE', @@wp_allow_multisite );

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
  define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
