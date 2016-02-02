<?php
// editor styles
function rafhun_editor_styles() {
  add_editor_style( array( 'icons/icons.data.svg.css', 'editor-styles.css' ) );
}

add_action( 'admin_init', 'rafhun_editor_styles' );

// style selector
//
// This first part adds the styleselect dropdown to the tinymce editor
function rafhun_editor_mce_buttons_2( $buttons ) {
  array_unshift( $buttons, 'styleselect' );
  return $buttons;
}

add_filter( 'mce_buttons_2', 'rafhun_editor_mce_buttons_2' );

// now we register the styles to add to the styleselect dropdown
// Codex entry: https://codex.wordpress.org/TinyMCE_Custom_Styles
//
function rafhun_editor_mce_before_init_insert_formats( $init_array ) {
  $style_formats = array(
    // this creates a ul from the selected elements, or just adds the class if the ul is already found in the selection
    array(
      'title' => 'Standard Liste',
      'block' => 'ul',
      'selector' => 'ul',
      'classes' => 'dash-list'
    ),
    // this is how inline styles are setup. Selected text will be wrapped in the given tag
    array(
      'title' => 'Primärer Button',
      'inline' => 'a',
      'selector' => 'a',
      'classes' => 'btn btn-primary'
    ),
    array(
      'title' => 'Lead Absatz',
      'block' => 'p',
      'selector' => 'p',
      'classes' => 'lead'
    ),
    array(
      'title' => 'Beispiel Inline Style',
      'inline' => 'span',
      'classes' => 'inline-style-class'
    )
  );

  $init_array['style_formats'] = json_encode( $style_formats );

  return $init_array;
}

add_filter( 'tiny_mce_before_init', 'rafhun_editor_mce_before_init_insert_formats' );
