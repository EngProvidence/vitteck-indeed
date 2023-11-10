<?php
// adds dynamically title tag
function emperoah_menus() {
 
    $locations = array (
        'primary'=> " Desktop top mennu",
        'footer' => "Footer Menu Items"
    );

    register_nav_menus(  $locations );
  
}
add_action('init', "emperoah_menus");

function emperoah_theme_support(){

add_theme_support('title-tag');
add_theme_support('custom-logo');
add_theme_support(' post-thumnails');
}
add_action('after_setup_theme', 'Emperoah_theme_support');
function Emperoah_register_styles(){
    wp_enqueue_style('followemperoah_style', get_template_directory_uri()."/style.css",array (),'1.0','all');
    wp_enqueue_style('followemperoah_prefonts', 'https://fonts.googleapis.com',array (),'1.0','all');
    wp_enqueue_style('followemperoah_fonts', 'https://fonts.googleapis.com/css2?family=Noto+Sans:wght@300;400;500;600;700&display=swap',array (),'1.0','all');
    wp_enqueue_style('followemperoah_fontawesome', 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css',array (),'1.0','all');


}
add_action('wp_enqueue_scripts', 'Emperoah_register_styles');



function Emperoah_register_scripts(){

    wp_enqueue_script('followemperoah_script', get_template_directory_uri()."/vitteck-indeed/1Indeed/index.js",array (),'1.0','all',true);

}
add_action('wp_enqueue_scripts', 'Emperoah_register_scripts');

?>