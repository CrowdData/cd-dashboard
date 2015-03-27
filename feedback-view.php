<?php

	include("templates/template.class.php");
	

	$menu = new Template("templates/template-menu.tpl");
	
	
	$layout = new Template("templates/template-view.tpl");
	$layout->set("templateTitle", "feedback");
	$layout->set("templateTableTitle", "feedback");
	$layout->set("datasetID","feedback");
	$layout->set("tableMessage","This table displays the feedback on the dashboard provided by users");
	$layout->set("provideButton","feedback");
	$layout->set("menu", $menu->output());
	  $analytics=new Template("templates/template-analytics.tpl");
    $layout->set("analytics",$analytics->output());
	echo $layout->output();
	
?>