<?php
/**
 * Custom Walker function to create one pager navigation (add # page slug to second level elements)
 * If you want to link to the childpage of the second level directly add the class direct to that menu item and it will be skipped.
 *
 * Needs: werbelinie_permalink_to_onepager() (located in helpers.php)
 *
 * @package grunt-wordpress-starter
 * @since grunt-wordpress-starter 1.7.0
 */

class Werbelinie_One_Pager_Nav_Walker extends Walker_Nav_Menu {
  function start_el( &$output, $item, $depth = 0, $args = array(), $id = 0 ) {
    global $wp_query;
    $indent = ( $depth > 0 ? str_repeat( "\t", $depth ) : '' );

    $classes = empty( $item->classes ) ? array() : (array) $item->classes;
    $class_names = esc_attr( implode( ' ', apply_filters( 'nav_menu_css_class', array_filter( $classes ), $item ) ) );

    $output .= $indent . '<li id="menu-item-' . $item->ID . '" class="' . $class_names . '">';

    // link attributes
    $attributes = ! empty( $item->attr_title ) ? ' title="' . esc_attr( $item->attr_title ) .'"' : '';
    $attributes .= ! empty( $item->target ) ? ' target="' . esc_attr( $item->target ) . '"' : '';
    $attributes .= ! empty( $item->xfn ) ? ' rel="' . esc_attr( $item->xfn ) . '"' : '';
    if ( $depth === 1 && strpos( $class_names, 'direct' ) === false ) {
      $slug_url = werbelinie_permalink_to_onepager( $item->url );

      $attributes .= ! empty( $slug_url ) ? ' href="' . esc_attr( $slug_url ) . '"' : '';
    } else {
      $attributes .= ! empty( $item->url ) ? ' href="' . esc_attr( $item->url ) . '"' : '';
    }

    $item_output = sprintf( '%1$s<a%2$s>%3$s%4$s%5$s</a>%6$s',
      $args->before,
      $attributes,
      $args->link_before,
      apply_filters( 'the_title', $item->title, $item->ID ),
      $args->link_after,
      $args->after
    );

    // build html
    $output .= apply_filters( 'walker_nav_menu_start_el', $item_output, $item, $depth, $args );
  }
}
