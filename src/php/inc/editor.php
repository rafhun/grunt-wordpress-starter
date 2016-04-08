<?php
// editor styles
function rafhun_editor_styles() {
  add_editor_style( array( 'icons/icons.data.svg.css', 'editor-styles.css' ) );
}

add_action( 'admin_init', 'rafhun_editor_styles' );

// basic toolbar (mce_buttons) configuration
//
// with the current_user_can condition we check for the admin level of the user. For all users other then administrators some toolbar buttons get removed since they lead to abuse of power of the editor.

function rafhun_editor_mce_buttons( $buttons ) {
  // remove formatting buttons the user should not be able to use
  $remove = array(
    'italic',
    'strikethrough',
    'hr',
    'alignleft',
    'aligncenter',
    'alignright'
  );

  return array_diff( $buttons, $remove );
}

if ( !current_user_can( 'list_users' ) ) :
  add_filter( 'mce_buttons', 'rafhun_editor_mce_buttons' );
endif;

// advanced toolbar (mce_buttons_2) configuration
//
// This first part adds the styleselect dropdown to the tinymce editor
function rafhun_editor_mce_buttons_2( $buttons ) {
  // add the styleselect dropdown
  array_unshift( $buttons, 'styleselect' );

  // remove buttons we do not want to appear
  $remove = array(
    'underline',
    'alignjustify',
    'forecolor',
    'outdent',
    'indent'
  );

  if ( current_user_can( 'list_users' ) ) :
    return $buttons;
  else:
    return array_diff( $buttons, $remove );
  endif;
}

add_filter( 'mce_buttons_2', 'rafhun_editor_mce_buttons_2' );

// now we register the styles to add to the styleselect dropdown
// Codex entry: https://codex.wordpress.org/TinyMCE_Custom_Styles
//
function rafhun_editor_mce_before_init_insert_formats( $init_array ) {
  $style_formats = array(
    // this creates a ul from the selected elements, or just adds the class if the ul is already found in the selection
    array(
      'title' => __( 'Default List', 'rafhun' ),
      'block' => 'ul',
      'selector' => 'ul',
      'classes' => 'dash-list'
    ),
    // this is how inline styles are setup. Selected text will be wrapped in the given tag
    array(
      'title' => __( 'Primary Button', 'rafhun' ),
      'inline' => 'a',
      'selector' => 'a',
      'classes' => 'btn btn-primary'
    ),
    array(
      'title' => __( 'Lead Paragraph', 'rafhun' ),
      'block' => 'p',
      'selector' => 'p',
      'classes' => 'lead'
    ),
    array(
      'title' => __( 'Inline Style Example', 'rafhun' ),
      'inline' => 'span',
      'classes' => 'inline-style-class'
    )
  );

  $init_array['style_formats'] = json_encode( $style_formats );

  return $init_array;
}

add_filter( 'tiny_mce_before_init', 'rafhun_editor_mce_before_init_insert_formats' );
