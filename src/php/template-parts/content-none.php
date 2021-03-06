<?php
/**
 * The template part for displaying a message that posts cannot be found
 *
 * @package grunt-wordpress-starter
 * @since 0.5.0
 */
?>

<?php
// set a title to indicate that nothing was found in a header
_e( 'Nothing Found', 'themeName' );
?>

<?php
// differentiate between a few different cases
// a) Home and User is allowed to publish posts
// b) Unsuccessful search
// c) Default case

if ( is_home() && current_user_can( 'publish_posts' ) ) : ?>

  <p><?php printf( __( 'Ready to publish your first post? <a href="%1$s">Get started here</a>.', 'themeName' ), esc_url( admin_url( 'post-new.php' ) ) ); ?></p>
<?php elseif ( is_search() ) : ?>
  <p><?php _e( 'Sorry, but nothing matched your search terms. Please try again with some different keywords.', 'themeName' ); ?></p>
  <?php get_search_form(); ?>

<?php else : ?>

  <p><?php _e( 'It seems we can&rsquo;t find what you&rsquo;re looking for. Perhaps searching can help.', 'themeName' ); ?></p>
  <?php get_search_form(); ?>

<?php endif; ?>
