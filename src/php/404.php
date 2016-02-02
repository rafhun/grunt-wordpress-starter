<?php
/**
 * The 404 Error Page Template
 *
 * This template will be used if the query matches no results, hence a wrong link was entered.
 *
 * @package wpbp
 * @since 0.5.0
 */

get_header(); ?>

<!-- open all relevant containers and stuff then make sure to make the title translatable as in the following example -->
<?php _e( 'Oops! That page can&rsquo;t be found.', 'rafhun' ); ?>

<!-- now change to the content section and there explain a little more and offer a search form -->
<?php _e( 'It looks like nothing was found at this location. Maybe try a search?', 'rafhun' ); ?>
<?php get_search_form(); ?>

<!-- close everything up -->

<?php get_footer(); ?>
