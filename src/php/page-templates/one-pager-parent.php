<?php
/**
 * Template Name: One Pager Parent
 * This template can be used to turn a page into a parent page for a one pager. All child pages of this parent page will be looped through and will be displayed as a section of the parent page.
 * A useful addon to this is the one pager navigation walker which automatically can turn permalinks into one pager links.
 */
__( 'One Pager Parent', 'werbelinie' );

get_header();

if ( have_posts() ) :
  while ( have_posts() ) : the_post();
    // add whatever template part is appropriate to style the contents of the one pager parent page
    get_template_part( 'template-parts/content', 'page' );

    $args = array(
      'post_type' => 'page',
      'posts_per_page' => -1,
      'post_parent' => get_the_ID(),
      'order' => 'ASC',
      'orderby' => 'menu_order',
    );

    $children = new WP_Query( $args );

    if ( $children->have_posts() ) :
      while ( $children->have_posts() ) : $children->the_post();
        // add the appropriate templates to mark up the child pages
        get_template_part( 'template-parts/content', 'page' );
      endwhile;
    endif;
    wp_reset_postdata();
  endwhile;
endif;

get_footer();
?>
