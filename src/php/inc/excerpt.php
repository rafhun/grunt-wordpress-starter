<?php
// this file defines some functions and filters to adjust the excerpt to your needs.

/**
 * Control the WordPress excerpt length
 */
if ( ! function_exists( 'werbelinie_excerpt_length' ) ) :
  function werbelinie_excerpt_length( $length ) {
    return 25;
  }
endif;

add_filter( 'excerpt_length', 'werbelinie_excerpt_length' );

/**
 * Control the read more text for excerpt links
 */
if ( ! function_exists( 'werbelinie_excerpt_more' ) ) :
  function werbelinie_excerpt_more( $more ) {
    // uncomment if you need the global $post object, then use like i. e. get_permalink( $post->ID );
    // global $post;
    return '&hellip;';
  }
endif;

add_filter( 'excerpt_more', 'werbelinie_excerpt_more' );
