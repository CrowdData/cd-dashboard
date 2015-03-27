<?php

	include("templates/template.class.php");
	
	$menu = new Template("templates/template-menu.tpl");
	
	
	$layout = new Template("templates/template-report.tpl");
	$layout->set("templateTitle", "feedback");
	$layout->set("datasetID","feedback");
	$layout->set("templateMessageTitle","Feedback");
	$layout->set("templateMessage","Please use the form below to provide us with your thoughts, opinions, or other feedback regarding the dashboard");
	$layout->set("menu", $menu->output());
	  $analytics=new Template("templates/template-analytics.tpl");
    $layout->set("analytics",$analytics->output());
	
	echo $layout->output();
	
?>