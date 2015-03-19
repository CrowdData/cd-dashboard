<?php

	include("templates/template.class.php");
	
	$menu = new Template("templates/template-menu.tpl");
	
	
	$layout = new Template("templates/template-report.tpl");
	$layout->set("templateTitle", "questions");
	$layout->set("datasetID","questions");
	$layout->set("templateMessageTitle","new question");
	$layout->set("templateMessage","Please use the form below to ask a question");
	$layout->set("menu", $menu->output());
	
	
	echo $layout->output();
	
?>