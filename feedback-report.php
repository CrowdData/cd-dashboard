<?php

	include("templates/template.class.php");
	
	$menu = new Template("templates/template-menu.tpl");
	
	
	$layout = new Template("templates/template-report.tpl");
	$layout->set("templateTitle", "feedback");
	$layout->set("datasetID","feedback");
	$layout->set("menu", $menu->output());
	
	
	echo $layout->output();
	
?>