<?php
/**
  * This file adds some commonly used elements, when using the WPML plugin to make a page multilingual. This includes a custom language switcher.
**/

// check whether wpml is active, if so we add our functions
if ( is_plugin_active( 'sitepress-multilingual-cms/sitepress.php' ) ) :
  if ( ! function_exists( 'werbelinie_wpml_add_language_switcher_items' ) ) :
  function werbelinie_wpml_add_language_switcher_items( $items, $args ) {
    // initialize variables
    $switcher = null;
    $switcher_classes = null;

    // if the navigation called is the metanavigation
    if ( $args->theme_location == 'metanavigation' ) :
      $languages_args = array(
        'skip_missing' => 1, // 1 skips language if translation is missing, 0 links to home for missing translations
        'orderby' => 'custom', // or id, code, name (custom is defined in the WP Admin under WPML -> Languages -> Language Switcher Options)
        'order' => 'asc',
      );

      // get all active languages, more information -> https://wpml.org/wpml-hook/wpml_active_languages/
      $languages = apply_filters( 'wpml_active_languages', NULL, $languages_args );

      // check that at least 2 languages are active (otherwise a language switcher makes no sense)
      if ( count( $languages ) > 1 ) :
        // if there are languages we set the default switcher classes
        $switcher_classes = 'menu-item menu-item-language-switcher';
        foreach( $languages as $language ) :
          if ( $language['active'] ) {
            $switcher_classes .= ' current-language-switcher-item';
          }

          $switcher .= '<li class="' . esc_attr( $switcher_classes ) . '">';

          // if the language is not active we create a link
          if ( ! $language['active'] ) {
            $switcher .= '<a href="' . esc_url( $language['url'] ) . '">';
            $switcher .= '<span class="screen-reader-text">' . sprintf( __( 'Change language to %s', 'werbelinie' ), $language['translated_name'] ) . '</span>';
          } else {
            // we just show the screen reader text indicating that this is the current language
            $switcher .= '<span class="screen-reader-text">' . sprintf( __( 'Current Language: %s', 'werbelinie' ), $language['translated_name'] ) . '</span>';
          }

          // display the actual language use either $language['language_code'] for a short indication like de, en, fr or $language['native_name'] for written out languages like Deutsch, English, Français. Alternatively you can also use $language['translated_name'] to have the languages translated to the current language, like English, French, German

          // use strtolower or strtoupper to get the capitalization you prefer
          $switcher .= $language['language_code'];

          // if it is an inactive language we need to close the anchor
          if ( ! $language['active'] ) {
            $switcher .= '</a>';
          }

          $switcher .= '</li>';
        endforeach;

        // we can either prepend or append the language switcher menu items to the chosen menu
        // prepend
        $items = $switcher . $items;
        //append
        // $items .= $switcher;
      endif;
    endif;

    return $items;
  }
  endif; // language switcher function

  // adds a language switcher to the navigation specified in the above function
  add_filter( 'wp_nav_menu_items', 'werbelinie_wpml_add_language_switcher_items', 10, 2 );

  /**
    * werbelinie_wpml_language_switcher
    *
    * This function returns a custom language switcher markup. It is based on a previously defined markup. Adjust this to your current needs when necessary.
  **/
  if ( ! function_exists( 'werbelinie_wpml_language_switcher' ) ) :
    function werbelinie_wpml_language_switcher() {
      $nav = null;
      $languages_args = array(
        'skip_missing' => 1, // 1 skips language if translation is missing, 0 links to home for missing translations
        'orderby' => 'custom', // or id, code, name (custom is defined in the WP Admin under WPML -> Languages -> Language Switcher Options)
        'order' => 'asc',
      );

      // get all active languages, more information -> https://wpml.org/wpml-hook/wpml_active_languages/
      $languages = apply_filters( 'wpml_active_languages', NULL, $languages_args );

      // check that at least 2 languages are active (otherwise a language switcher makes no sense)
      if ( count( $languages ) > 1 ) :
        $nav = '
          <nav class="language-navigation">
            <h2 class="screen-reader-text">' . __( 'Language Navigation' ) . '</h2>
            <ul class="language-navigation__list">
        ';

        foreach ( $languages as $language ) :
          $li_classes = 'language-navigation__item';

          // add an indicator class if list item contains the currently active language
          if ( $language['active'] ) {
            $li_classes .= ' language-navigation__item--current';
          }

          $nav .= '<li class="' . esc_attr( $li_classes ) . '">';

          // if this is not the active language we create an anchor link
          if ( ! $language['active'] ) {
            $nav .= '<a href="' . esc_url( $language['url'] ) . '">';
            $nav .= '<span class="screen-reader-text">' . sprintf( __( 'Change language to %s', 'werbelinie' ), $language['translated_name'] ) . '</span>';
          } else {
            // we just indicate the current language for screenreaders
            $nav .= '<span class="screen-reader-text">' . sprintf( __( 'Current language: $s', 'werbelinie' ), $language['translated_name'] ) . '</span>';
          }

          // display the actual language use either $language['language_code'] for a short indication like de, en, fr or $language['native_name'] for written out languages like Deutsch, English, Français. Alternatively you can also use $language['translated_name'] to have the languages translated to the current language, like English, French, German

          // use strtolower or strtoupper to get the capitalization you prefer
          $nav .= $language['language_code'];

          // close the anchor link for inactive languages
          if ( ! $language['active'] ) {
            $nav .= '</a>';
          }

          $nav .= '</li>';
        endforeach;

        $nav .= '</ul></nav>';
      endif;

      return $nav;
    }
  endif; // wpml language switcher function_exists

  // echoes the wpml language switcher directly
  if ( ! function_exists( 'werbelinie_the_wpml_language_switcher' ) ) :
    function werbelinie_the_wpml_language_switcher() {
      echo werbelinie_wpml_language_switcher();
    }
  endif;
endif; // is plugin active
