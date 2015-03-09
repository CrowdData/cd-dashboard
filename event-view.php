<?php

	include("templates/template.class.php");
	

	$menu = new Template("templates/template-menu.tpl");
	
	
	$layout = new Template("templates/template-view.tpl");
	$layout->set("templateTitle", "event");
	$layout->set("datasetID","event");
	$layout->set("menu", $menu->output());
	
	echo $layout->output();
	
?>