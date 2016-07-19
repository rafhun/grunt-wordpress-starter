<?php
/**
 * This file defines some helper functions that might be used in the project. If you need access to one of these helpers make sure to inlcude it at the appropriate place of your functions.php file.
 *
 * @package grunt-wordpress-starter
 * @since grunt-wordpress-starter 1.7.0
 */

/**
 * function werbelinie_phone_preformat( $phone_number ) {}
 * This makes a phone number ready for conversion by the phone cleanup function below by normalizing it. No matter how the number has been entered it should always return a number without any spaces or parenthesis
 *
 * Input: +41 (0)31 310 94 19
 * First step (trim all whitespace and remove spaces): +41(0)313109419
 * Second step (remove the sometimes used (0)): +41313109419
 */
if ( ! function_exists( 'werbelinie_phone_preformat' ) ) :
  function werbelinie_phone_preformat( $phone_number ) {
    // strip out all spaces
    $number = trim( str_replace( ' ', '', $phone_number ) );

    // strip out the possible (0) some people add after the international prefix like: +41 (0)31 310 94 19
    $number = str_replace( '(0)', '', $number );

    return $number;
  }
endif;

add_filter( 'werbelinie_clean_phone', 'werbelinie_phone_preformat' );

/**
 * function werbelinie_phone_cleanup( $phone_number ) {}
 *
 * Cleans up a phone number for a nice and readable display in the frontend. It basically splits up the number enterd into readable chunks and removes unnecessary information.
 * From: +41313109419
 * To: +41 31 310 94 19
 * (with non breaking spaces of course)
 *
 * The function could possibly be extended to support the phone number markup of multiple languages or countries (differentiate by country code or by length of number)
 */
if ( ! function_exists( 'werbelinie_phone_cleanup' ) && function_exists( 'werbelinie_phone_preformat' ) ) :
  function werbelinie_phone_cleanup( $phone_number ) {
    $number = werbelinie_phone_preformat( $phone_number );

   if ( preg_match( '/^(\+\d{2})(\d{2})(\d{3})(\d{2})(\d{2})$/', $number,  $matches ) ) {
     $result = $matches[1] . '&nbsp;' .$matches[2] . '&nbsp;' . $matches[3] . '&nbsp;' . $matches[4] . '&nbsp;' . $matches[5];
     return $result;
   } elseif ( preg_match( '/^(\d{3})(\d{3})(\d{2})(\d{2})$/', $number, $matches ) ) {
     // the number was provided without an international calling code
     // turns 0313109419 into 031 310 94 19
     $result = $matches[1] . '&nbsp;' .$matches[2] . '&nbsp;' . $matches[3] . '&nbsp;' . $matches[4];
   } else {
     // return the original phone number if we couldn't clean it up
     return $phone_number;
   }
  }
endif;

add_filter( 'werbelinie_pretty_phone', 'werbelinie_phone_cleanup' );


/**
 * function rafhun_archive_title( $title ) {}
 *
 * creates better archive titles add the relevant if conditions to edit titles for each type of archive.
 * Examples: https://developer.wordpress.org/reference/functions/get_the_archive_title/
 * Possibilities: category, tag, author, year, month, day, tax, post_type_archive
 */
if ( ! function_exists( 'werbelinie_archive_title' ) ) {
  function rafhun_archive_title( $title ) {
    if ( is_post_type_archive() ) {
      $title = post_type_archive_title( '', false );
    }

    return( $title );
  }

  add_filter( 'get_the_archive_title', 'rafhun_archive_title' );
}

/**
 * function werbelinie_permalink_to_onepager( $link ) {}
 *
 * This function detects the last / within a page url that is still followed by a post name and replaces it with a /#.
 * This is useful if you have a one-pager layout and want to adjust links automatically.
 *
 * In: werbelinie.ch/agentur/team/ (generated link by wordpress i. e. in menus or via the_permalink() function)
 * Out: werbelinie.ch/agentur/#team
 */
 function werbelinie_permalink_to_onepager( $link ) {
   // keep reference to link that was entered in case something goes wrong during the conversion
   $old_link = $link;

   if ( substr( $link, -1 ) === '/' ) {
     $link = substr( $link, 0, -1 );
   }

   $position = strrpos( $link, '/' );

   if ( $position ) {
     $link = substr_replace( $link, '/#', $position, 1 );
   } else {
     $link = $old_link;
   }

   return $link;
 }
