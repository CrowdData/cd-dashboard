<?php

	include("templates/template.class.php");
	
	$menu = new Template("templates/template-menu.tpl");
	
	
	$layout = new Template("templates/template-report.tpl");
	$layout->set("templateTitle", "disruption");
	$layout->set("datasetID","disruption");
	$layout->set("templateMessageTitle","details of a disruption");
	$layout->set("templateMessage","Please use the form below to provide details of a disruption (unexpected event).");
	
	
	$layout->set("menu", $menu->output());
	
	
	echo $layout->output();
	
?>