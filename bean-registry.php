<?php
/**
 * Plugin Name: Bean Registry
 * Plugin URI: http://themebeans.com/plugins/bean-registry
 * Description: Enables shortcode registry links to be added in your WordPress theme.
 * Version: 1.1.1
 * Author: ThemeBeans
 * Author URI: http://themebeans.com
 *
 *
 * @package Bean Plugins
 * @subpackage Registry
 * @author ThemeBeans
 * @since Registry 1.0
 */




/*===================================================================*/
/*	MAKE SURE WE DO NOT EXPOSE ANY INFO IF CALLED DIRECTLY
/*===================================================================*/
if ( !function_exists( 'add_action' ) )
{
	echo 'Hi there!  I\'m just a plugin, not much I can do when called directly.';
	exit;
}

/*===================================================================*/
/*
/* BEGIN BEAN PRICING TABLES PLUGIN
/*
/*===================================================================*/
/*===================================================================*/
/*	PLUGIN CLASS
/*===================================================================*/
if ( ! class_exists( 'Bean_BeanRegistry' ) ) :
	class Bean_BeanRegistry {

	    private $BEAN_TINYMCE_URI;
	    private $BEAN_TINYMCE_DIR;




		/*===================================================================*/
		/*	CONSTRUCT
		/*===================================================================*/
	    function __construct()
	    {
	    	require_once( DIRNAME(__FILE__) . '/bean-theme-registry.php' );

	        $this->BEAN_TINYMCE_URI = plugin_dir_url(__FILE__) .'tinymce';
	        $this->BEAN_TINYMCE_DIR = DIRNAME(__FILE__) .'/tinymce';

	        add_action('init', array(&$this, 'action_admin_init'));
	        add_action('admin_enqueue_scripts', array(&$this, 'action_admin_scripts_init'));
	        add_filter('the_posts', array(&$this, 'add_frontend_scripts_if_shortcode_being_used'));
		}




		/*===================================================================*/
		/*	ENQUEUE FRONTEND
		/*===================================================================*/
		function add_frontend_scripts_if_shortcode_being_used($posts)
		{
            if (empty($posts)) return $posts;

            $shortcode_found = false;
            foreach ($posts as $post) {
                if (stripos($post->post_content, '[bean_registry') !== false) {
                    $shortcode_found = true;
                    break;
                }
            }

            if ($shortcode_found) {
               $default_css_url = plugin_dir_url(__FILE__) . 'css/bean-registry.css';
               wp_enqueue_style( 'bean-registry', $default_css_url, false, '1.0', 'all' );
            }

            return $posts;
		}




		/*===================================================================*/
		/*	ENQUEUE ADMIN
		/*===================================================================*/
		function action_admin_scripts_init()
		{
			wp_enqueue_style( 'bean-registry-popup', $this->BEAN_TINYMCE_URI . '/css/popup.css', false, '1.0', 'all' );
			wp_localize_script( 'jquery', 'BeanRegistry', array('plugin_folder' => plugin_dir_url(__FILE__)) );
		}




		/*===================================================================*/
		/*	REGISTERS TINYMCE RICH EDITOR BUTTONS
		/*===================================================================*/
		function action_admin_init()
		{
			if ( ! current_user_can('edit_posts') && ! current_user_can('edit_pages') )
				return;

			if ( get_user_option('rich_editing') == 'true' && is_admin() )
			{
				add_filter( 'mce_external_plugins', array(&$this, 'add_rich_plugins') );
				add_filter( 'mce_buttons', array(&$this, 'register_rich_buttons') );
			}
		}




		/*===================================================================*/
		/*	DEFINE TINYMCE RICH EDITOR JS PLUGIN
		/*===================================================================*/
		function add_rich_plugins( $plugin_array )
		{
         		$plugin_array['BeanRegistry'] = $this->BEAN_TINYMCE_URI . '/plugin.js';

			return $plugin_array;
		}




		/*===================================================================*/
		/*	ADDS TINYMCE BUTTON
		/*===================================================================*/
		function register_rich_buttons( $buttons )
		{
			array_push( $buttons, "|", 'bean_registry_button' );
			return $buttons;
		}
	}

	new Bean_BeanRegistry;

endif; //END class Bean_BeanRegistry