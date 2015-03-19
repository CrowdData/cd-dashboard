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
	$layout->set("templateTitle", "demand");
	$layout->set("tableMessage","This table displays the latest information about the demand for TumTums provided by users");
	$layout->set("templateTableTitle","TumTum Demand");
	$layout->set("datasetID","demand");
	$layout->set("provideButton","current TumTum demand");
	$layout->set("menu", $menu->output());
	
	/**
	 * Outputs the page with the user's profile.
	 */
	echo $layout->output();
	
?>