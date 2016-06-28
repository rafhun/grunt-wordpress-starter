<?php
/**
 * This filter will adjust the output of the default gallery shortcut offered by WordPress.
 *
 * @package grunt-wordpress-starter
 * @since grunt-wordpress-starter 1.7.0
 */

add_filter( 'post_gallery', 'werbelinie_post_gallery', 10, 2 );

if ( ! function_exists( 'werbelinie_post_gallery' ) ) :
  function werbelinie_post_gallery( $output, $attr ) {
    global $post;
    $gallery_id = uniqid();

    if ( isset( $attr['orderby'] ) ) {
      $attr['orderby'] = sanitize_sql_orderby( $attr['orderby'] );

      if ( !$attr['orderby']) { unset( $attr['orderby'] ); }
    }

    $gallery_atts = shortcode_atts( array(
      'order' => 'ASC',
      'orderby' => 'menu_order ID',
      'id' => $post->ID,
      'itemtag' => 'dl',
      'icontag' => 'dt',
      'captiontag' => 'dd',
      'columns' => 3,
      'size' => 'thumbnail',
      'include' => '',
      'exclude' => ''
    ), $attr );

    $id = intval( $gallery_atts['id'] );
    $columns = intval( $gallery_atts['columns'] );

    if ( 'RAND' === $gallery_atts['order'] ) {
      $gallery_atts['orderby'] = 'none';
    }

    // handle cases where too many columns are wanted
    if ( $columns > 3 ) { $columns = 3; }

    if ( ! empty( $gallery_atts['include'] ) ) {
      $include = preg_replace( '/[^0-9,]+/', '', $gallery_atts['include'] );

      $_attachments = get_posts( array(
        'include' => $include,
        'post_status' => 'inherit',
        'post_type' => 'attachment',
        'post_mime_type' => 'image',
        'order' => $gallery_atts['order'],
        'orderby' => $gallery_atts['orderby']
      ) );

      $attachments = array();

      foreach( $_attachments as $key => $val ) {
        $attachments[$val->ID] = $_attachments[$key];
      }
    }

    if ( empty( $attachments ) ) { return ''; }

    switch ( $columns ) {
      case 1:
      $image_size = 'large';
      break;

      case 2:
      $image_size = 'medium-large';
      break;

      case 3:
      $image_size = 'medium';
      break;

      default:
      $image_size = 'medium-large';
      break;
    }

    // here comes the actual output
    $output = '<div class="img-block img-block-' . $columns . '">';

    foreach ( $attachments as $id => $attachment ) {
      $full_size_image_href = wp_get_attachment_image_src( $id, 'full' );

      $output .= '<figure class="lb-thumb">';
        $output .= '<a data-lightbox="gallery-' . $gallery_id . '" href="' . esc_url( $full_size_image_href[0] ) . '">';
          $output .= wp_get_attachment_image( $id, $image_size );
        $output .= '</a>';
      $output .= '</figure>';
    }

    $output .= '</div>';

    return $output;
  }
endif;
