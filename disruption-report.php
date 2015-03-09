<?php

	include("templates/template.class.php");
	
	$menu = new Template("templates/template-menu.tpl");
	
	
	$layout = new Template("templates/template-report.tpl");
	$layout->set("templateTitle", "disruption");
	$layout->set("datasetID","disruption");
	$layout->set("menu", $menu->output());
	
	
	echo $layout->output();
	
?>