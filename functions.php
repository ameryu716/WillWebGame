<?php
/**
 * Child Theme functions and definitions.
 * This theme is a child theme for Vip Business.
 *
 * @package Vip_Business_Dark
 * @author  FireflyThemes https://fireflythemes.com
 * @license http://www.gnu.org/licenses/gpl-3.0.html GNU Public License
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * When using a child theme you can override certain functions (those wrapped
 * in a function_exists() call) by defining them first in your child theme's
 * functions.php file. The child theme's functions.php file is included before
 * the parent theme's file, so the child theme functions would be used.
 */

/**
 * Theme functions and definitions.
 */
function vip_business_dark_enqueue_styles() {
	// Parent Theme stylesheet.
	wp_enqueue_style( 'vip-business-style', get_template_directory_uri() . '/style.css', null, vip_business_get_file_mod_date( get_template_directory() . '/style.css' ) );

	wp_enqueue_style( 'vip-business-dark-style',
        get_stylesheet_directory_uri() . '/style.css',
        array( 'vip-business-style' ),
        vip_business_get_file_mod_date( get_stylesheet_directory() . '/style.css' )
    );

    //adder
    wp_enqueue_style('uten-custom-add-style','/darkadd.css');
    wp_enqueue_script('uten-custom-add-script','/darkadd.js');
}
add_action(  'wp_enqueue_scripts', 'vip_business_dark_enqueue_styles' );

/**
 * Loads the child theme textdomain.
 */
function vip_business_dark_setup() {
    load_child_theme_textdomain( 'vip-business-dark', get_stylesheet_directory() . '/languages' );
}
add_action( 'after_setup_theme', 'vip_business_dark_setup', 11 );

//adder
function my_delete_local_jquery(){
    wp_deregister_script('jquery');
}
add_action( 'wp_enqueue_scripts', 'my_delete_local_jquery' );

function themesjs_dequeue(){
    wp_dequeue_script('vip-business-keyboard-image-navigation');
    wp_dequeue_script('vip-business-skip-link-focus-fix');
}
add_action( 'wp_enqueue_scripts', 'themesjs_dequeue',100 );
//vip-business-keyboard-image-navigation-js

register_nav_menu( 'c-sidemenu','Custom Side Menu');

function RmenuEcho(){
    $defaults = array(
        'menu_class'      => '',
        'menu_id'         => '',
        'container'       => 'div',
        'container_class' => '',
        'container_id'    => 'custom-r-menu',
        'fallback_cb'     => 'wp_page_menu',
        'before'          => '',
        'after'           => '',
        'link_before'     => '',
        'link_after'      => '',
        'echo'            => true,
        'depth'           => 0,
        'walker'          => '',
        'theme_location'  => 'c-sidemenu',
        'items_wrap'      => '<div id="swipe"><button><i class="fas fa-angle-left"></i></button></div><nav><h2>Menu</h2><ul id="%1$s" class="%2$s">%3$s</ul></nav>',
    );
    wp_nav_menu( $defaults );
}

add_action('wp_footer','RmenuEcho',200);

function RtoggleBtEcho(){
    echo '<button id="nav-c-switch"><i class="fas fa-angle-left"></i><span>Menu</span></button>';
}

add_action('wp_footer','RtoggleBtEcho',250);

?>