<?php
/**
 * rafhun functions and definitions
 *
 * @package rafhun
 */

/**
 * Set the content width based on the theme's design and stylesheet.
 */
if ( ! isset( $content_width ) ) {
  $content_width = 640; /* pixels */
}

if ( ! function_exists( 'rafhun_setup' ) ) :
/**
 * Sets up theme defaults and registers support for various WordPress features.
 *
 * Note that this function is hooked into the after_setup_theme hook, which
 * runs before the init hook. The init hook is too late for some features, such
 * as indicating support for post thumbnails.
 */
function rafhun_setup() {

  /*
   * Make theme available for translation.
   * Translations can be filed in the /languages/ directory.
   * If you're building a theme based on rafhun, use a find and replace
   * to change 'rafhun' to the name of your theme in all the template files
   */
  load_theme_textdomain( 'rafhun', get_template_directory() . '/languages' );

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
  add_image_size( 'page-header', 2000, 1200, true );
  add_image_size( 'flexslider', 952, 625, true);
  add_image_size( 'header-desktop', 2560, 604 );
  add_image_size( 'header-mobile', 1240, 1240, true);

  // This theme uses wp_nav_menu() in two locations.
  register_nav_menus( array(
    'primary-menu' => __( 'main nav', 'rafhun' ),
    'off-canvas-menu' => __( 'Off Canvas Menu', 'rafhun'),
    'metanavigation' => __( 'Metanavigation', 'rafhun' )
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
}
endif; // rafhun_setup
add_action( 'after_setup_theme', 'rafhun_setup' );

/**
 * Register widget area.
 *
 * @link http://codex.wordpress.org/Function_Reference/register_sidebar
 */
/*
function rafhun_widgets_init() {
  register_sidebar( array(
    'name'          => __( 'Sidebar', 'rafhun' ),
    'id'            => 'sidebar-1',
    'description'   => '',
    'before_widget' => '<aside id="%1$s" class="widget %2$s">',
    'after_widget'  => '</aside>',
    'before_title'  => '<h1 class="widget-title">',
    'after_title'   => '</h1>',
  ) );
}
add_action( 'widgets_init', 'rafhun_widgets_init' );
*/

/**
 * Enqueue scripts and styles.
 */
function rafhun_scripts() {
  wp_enqueue_style( 'rafhun-style', get_template_directory_uri() . '/style.min.css', array(), null );

  wp_enqueue_script( 'rafhun-script', get_template_directory_uri() . '/js/script.min.js', array(), null, true);

  // needed for ajax loading
  /*wp_localize_script( 'rafhun-script', 'ajaxpagination', array(
    'ajaxurl' => admin_url( 'admin-ajax.php' )
  ));
*/
/*
  if ( is_singular() && comments_open() && get_option( 'thread_comments' ) ) {
    wp_enqueue_script( 'comment-reply' );
  }*/
}

add_action( 'wp_enqueue_scripts', 'rafhun_scripts' );

// fix chrome v45 admin nav issue
/*
function chromefix_inline_css() {
  wp_add_inline_style( 'wp-admin', '#adminmenu { transform: translateZ(0); }' );
}
add_action('admin_enqueue_scripts', 'chromefix_inline_css');
*/


// Following are includes / requires containing configuration that is outsourced to files

/**
 * Load Custom Editor Functionality (custom stylesheets and style select)
 */
require get_template_directory() . '/inc/editor.php';

/**
 * Load Custom Off Canvas Walker Function
 */
// require get_template_directory() . '/inc/off-canvas-walker.php';
