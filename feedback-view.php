<?php

	include("templates/template.class.php");
	

	$menu = new Template("templates/template-menu.tpl");
	
	
	$layout = new Template("templates/template-view.tpl");
	$layout->set("templateTitle", "feedback");
	$layout->set("datasetID","feedback");
	$layout->set("menu", $menu->output());
	
	echo $layout->output();
	
?>