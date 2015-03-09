<?php

	include("templates/template.class.php");
	
	$menu = new Template("templates/template-menu.tpl");
	
	
	$layout = new Template("templates/template-report.tpl");
	$layout->set("templateTitle", "event");
	$layout->set("datasetID","event");
	$layout->set("menu", $menu->output());
	
	
	echo $layout->output();
	
?>