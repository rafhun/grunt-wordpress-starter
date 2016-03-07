<?php
/**
 * The template part for displaying results in search pages
 *
 * @package grunt-wordpress-starter
 * @since 0.5.0
 */
?>

<!-- style your search results here, best within article tags. Usage of template tags like the_title is possible -->

<?php
// make sure to link up titles correctly:
the_title( sprintf( '<h2><a href="%s" rel="bookmark">', esc_url( get_permalink() ) ), '</a></h2>' ); ?>
?>
