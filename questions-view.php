<?php

	include("templates/template.class.php");
	
	/**
	 * Creates a new template for the user's profile.
	 * Fills it with mockup data just for testing.
	 */
	$menu = new Template("templates/template-menu.tpl");
	
	$layout = new Template("templates/template-questions.tpl");
	$layout->set("templateTitle", "questions");
	$layout->set("menu", $menu->output());
	
	  $analytics=new Template("templates/template-analytics.tpl");
    $layout->set("analytics",$analytics->output());
	echo $layout->output();
?>