<?php
/**
 * The template for displaying all single posts and attachments
 *
 * @package grunt-wordpress-starter
 * @since 0.5.0
 */

get_header(); ?>

<!-- open relevant containers -->

<?php
// start the loop
while ( have_posts() ) : the_post();

  // include the template here or from an external file
  get_template_part( 'template-parts/content', 'single' );

  // differentiate between attachment and post view
  if ( is_singular( 'attachment' ) ) :
    // post navigation to the parent post
  elseif ( is_singular( 'post' ) ) :
    // post navigation, prev/next post
  endif;

  // end loop
endwhile;
?>

<!-- close relevant containers -->
<?php get_footer(); ?>
