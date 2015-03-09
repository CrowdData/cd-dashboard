<?php

	include("templates/template.class.php");
	
	/**
	 * Creates a new template for the user's profile.
	 * Fills it with mockup data just for testing.
	 */
	$menu = new Template("templates/template-menu.tpl");
	
	/**
	 * Loads our layout template, settings its title and content.
	 */
	$layout = new Template("templates/template-view.tpl");
	$layout->set("templateTitle", "disruption");
	$layout->set("datasetID","disruption");
	$layout->set("tableMessage","This table displays details of disruptions (unexpected events) on campus provided by users");
	$layout->set("templateTableTitle","Disruptions on Campus");
	$layout->set("provideButton","details of a disruption");
	$layout->set("menu", $menu->output());
	
	/**
	 * Outputs the page with the user's profile.
	 */
	echo $layout->output();
	
?>