<?php
/**
 * The page template file
 *
 * This template file will be used by default for all pages that do not have a more specific template assigned to them.
 *
 * @package wpbp
 * @subpackage rafhun
 * @since wpbp 0.5.0
 */

get_header(); ?>

<!-- open page specific containers here -->
<?php if ( have_posts() ) : ?>

  <?php while ( have_posts() ) : the_post(); ?>
    <!-- display the page according to your template or include the page content template like below -->
    <?php get_template_part( 'template-parts/content', 'page' ); ?>

  <?php endwhile; ?>
  
<?php endif; ?>

<!-- close page specific containers here -->

<?php get_footer(); ?>
