<?php

	include("templates/template.class.php");
	

	$menu = new Template("templates/template-menu.tpl");
	
	
	$layout = new Template("templates/template-view.tpl");
	$layout->set("templateTitle", "feedback");
	$layout->set("templateTableTitle", "feedback");
	$layout->set("datasetID","feedback");
	$layout->set("tableMessage","This table displays the feedback on the dashboard provided by users");
	$layout->set("provideButton","Feedback");
	$layout->set("menu", $menu->output());
	
	echo $layout->output();
	
?>