<?php
/**
 * The template for displaying search results pages
 *
 * @package grunt-wordpress-starter
 * @since 0.5.0
 */

get_header(); ?>

<!-- open relevant containers -->

<?php if ( have_posts() ) : ?>
  <!-- set a header that shows the search query -->
  <?php printf( __( 'Search Results for: %s', 'themeName' ), '<span>' . esc_html( get_search_query() ) . '</span>' ); ?>

  <?php
  // now start the loop
  while ( have_posts() ) : the_post();

    // put your template in here or move it to an external file and include it with the following line
    get_template_part( 'template-parts/content', 'search' );

  endwhile;

  // post pagination

// how to handle a search query without results
else:
  // include your template directly in here or move it to a more generalized file and include it like shown below
  get_template_part( 'template-parts/content', 'none' );
endif; ?>

<!-- close the relevant containers -->

<?php get_footer(); ?>
