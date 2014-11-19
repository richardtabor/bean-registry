<?php
/**
 * The file controls the shortcode that is added to the Visual Editor.
 *
 *  
 * @package Bean Plugins
 * @subpackage Registry
 * @author ThemeBeans
 * @since Registry 1.0
 */
 
 
 
 
/*===================================================================*/
/*  TEXT WIDGET SHORTCODE FILTERS
/*===================================================================*/
add_filter('widget_text', 'shortcode_unautop', 10);
add_filter('widget_text', 'do_shortcode', 10);




/*===================================================================*/
/*  PRICING TABLE SHORTCODE
/*===================================================================*/
function bean_registry( $atts, $content = null ) {
	global $shortcode_registry;
	extract(shortcode_atts(array(
		'url' => '',
		'registry' => ''
    ), $atts));

	$bean_registry_sc = '<a href="'.$url.'" class="bean-registry '.$registry.'"><img src="'.plugin_dir_url( __FILE__ ).'images/'.$registry.'.png"></></a>';

	return $bean_registry_sc;

}
add_shortcode('bean_registry', 'bean_registry');