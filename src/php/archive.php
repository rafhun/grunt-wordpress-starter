<?php
/**
 * The template for displaying archive pages
 *
 * Used to display archive-type pages if nothing more specific matches a query.
 * For example, puts together date-based pages if no date.php file exists.
 *
 * If you'd like to further customize these archive views, you may create a new template file for each one. For example, tag.php, category.php, author.php, etc.
 *
 * @package grunt-wordpress-starter
 * @since 0.5.0
 */

get_header(); ?>

<!-- open relevant containers -->
<?php if ( have_posts() ) : ?>
  <!-- add fitting title and description -->
  <?php
  the_archive_title( '<h1>', '</h1>' );
  the_archive_description( '<div>', '</div>' );
  ?>

  <?php
  // start the loop
  while ( have_posts() ) : the_posts();

    // inlcude post format specific template for the content, or just put your template in here
    get_template_part( 'template-parts/content', get_post_format() );

  // end the loop
  endwhile;

  // post pagination if necessary

// we show the no posts found template when there is no content
else:
  get_template_part( 'template-parts/content', 'none' );
endif;
?>

<!-- close relevant containers -->
<?php get_footer(); ?>
