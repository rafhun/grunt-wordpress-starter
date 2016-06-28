<?php
/**
 * werbelinie functions and definitions
 *
 * @package grunt-wordpress-starter
 */

/**
 * Set the content width based on the theme's design and stylesheet.
 */
if ( ! isset( $content_width ) ) {
  $content_width = 640; /* pixels */
}

if ( ! function_exists( 'werbelinie_setup' ) ) :
/**
 * Sets up theme defaults and registers support for various WordPress features.
 *
 * Note that this function is hooked into the after_setup_theme hook, which
 * runs before the init hook. The init hook is too late for some features, such
 * as indicating support for post thumbnails.
 */
function werbelinie_setup() {

  /*
   * Make theme available for translation.
   * Translations can be filed in the /languages/ directory.
   * If you're building a theme based on werbelinie, use a find and replace
   * to change 'themeName' to the name of your theme in all the template files
   */
  load_theme_textdomain( 'themeName', get_template_directory() . '/languages' );

  // Add default posts and comments RSS feed links to head.
  add_theme_support( 'automatic-feed-links' );

  /*
   * Let WordPress manage the document title.
   * By adding theme support, we declare that this theme does not use a
   * hard-coded <title> tag in the document head, and expect WordPress to
   * provide it for us.
   */
  add_theme_support( 'title-tag' );

  /*
   * Enable support for Post Thumbnails on posts and pages.
   *
   * @link http://codex.wordpress.org/Function_Reference/add_theme_support#Post_Thumbnails
   */
  add_theme_support( 'post-thumbnails' );

  // add additional image size for page headers
  // add_image_size( 'page-header', 2000, 1200, true );
  // add_image_size( 'flexslider', 952, 625, true);
  // add_image_size( 'header-desktop', 2560, 604 );
  // add_image_size( 'header-mobile', 1240, 1240, true);

  // This theme uses wp_nav_menu() in two locations.
  register_nav_menus( array(
    'primary-menu' => __( 'main nav', 'themeName' ),
    'off-canvas-menu' => __( 'Off Canvas Menu', 'themeName'),
    'metanavigation' => __( 'Metanavigation', 'themeName' )
  ) );

  /*
   * Switch default core markup for search form, comment form, and comments
   * to output valid HTML5.
   */
  add_theme_support( 'html5', array(
    'search-form', 'comment-form', 'comment-list', 'gallery', 'caption',
  ) );

  /*
   * Enable support for Post Formats.
   * See http://codex.wordpress.org/Post_Formats
   */
  add_theme_support( 'post-formats', array(
    'aside', 'image', 'video', 'quote', 'link',
  ) );

  /**
   * Enable support for a custom logo – make it possible to adjust the page logo through the customizer
   *
   * Note: These settings will not be correct by default for every theme, adjust sizes according to your specs
   */
  $args = array(
    'height' => 100, // expected logo height in pixels
    'width' => 400, // expected logo width in pixels
    'flex-height' => true, // allow for logo to be higher (if there is room around the logo vertically -> makes sense in a sidebar)
    'flex-width' => true, // allow for logo to be wider (if there is room around the logo horizontally)
    // 'header-text' => array( 'site-title', 'site-description' ), // header text to be replaced by logo
  );

  add_theme_support( 'custom-logo', $args );
}
endif; // werbelinie_setup

add_action( 'after_setup_theme', 'werbelinie_setup' );

/**
 * Register widget area.
 *
 * @link http://codex.wordpress.org/Function_Reference/register_sidebar
 */
/*
function werbelinie_widgets_init() {
  register_sidebar( array(
    'name'          => __( 'Sidebar', 'themeName' ),
    'id'            => 'sidebar-1',
    'description'   => '',
    'before_widget' => '<aside id="%1$s" class="widget %2$s">',
    'after_widget'  => '</aside>',
    'before_title'  => '<h1 class="widget-title">',
    'after_title'   => '</h1>',
  ) );
}
add_action( 'widgets_init', 'werbelinie_widgets_init' );
*/

/**
 * Enqueue scripts and styles.
 */
function werbelinie_scripts() {
  wp_enqueue_style( 'werbelinie-style', get_template_directory_uri() . '/style.min.css', array(), null );

  wp_enqueue_script( 'werbelinie-script', get_template_directory_uri() . '/js/script.min.js', array(), null, true);

  // needed for ajax loading
  /*
  global $wp_query;
  wp_localize_script( 'werbelinie-localized-script', 'ajaxpagination', array(
    'ajaxurl' => admin_url( 'admin-ajax.php' ),
    'query_vars' => json_encode( $wp_query->query )
  ));
*/
/*
  if ( is_singular() && comments_open() && get_option( 'thread_comments' ) ) {
    wp_enqueue_script( 'comment-reply' );
  }*/
}

add_action( 'wp_enqueue_scripts', 'werbelinie_scripts' );


// Following are includes / requires containing configuration that is outsourced to files

/**
 * Load Custom Editor Functionality (custom stylesheets and style select)
 */
require get_template_directory() . '/inc/editor.php';

/**
 * Template Tags (to be used within the loop)
 */
require get_template_directory() . '/inc/template-tags.php';

/**
 * Load Custom Off Canvas Walker Function
 */
// require get_template_directory() . '/inc/off-canvas-walker.php';

/**
 * Load Custom One Pager Walker Function
 */
// require get_template_directory() . '/inc/one-pager-walker.php';

/**
 * Load some essential helper functions
 */
// require get_template_directory() . '/inc/helpers.php';

/**
 * Load custom gallery shortcode output
 */
// require get_template_directory() . '/inc/custom-gallery.php';
