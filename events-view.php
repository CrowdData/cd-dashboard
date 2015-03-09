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
	$layout->set("templateTitle", "events");
	$layout->set("tableMessage","This table provides details about various institute level and department level events");
	$layout->set("templateTableTitle","Campus Events");
	$layout->set("datasetID","events");
	$layout->set("provideButton","details of event");
	$layout->set("menu", $menu->output());
	
	/**
	 * Outputs the page with the user's profile.
	 */
	echo $layout->output();
?>