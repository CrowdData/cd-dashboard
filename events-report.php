<?php

	include("templates/template.class.php");
	
	$menu = new Template("templates/template-menu.tpl");
	
	
	$layout = new Template("templates/template-report.tpl");
	$layout->set("templateTitle", "events");
	$layout->set("templateMessageTitle","details of an event");
	$layout->set("templateMessage","Please use the form below to provide details of an event .");
	$layout->set("datasetID","events");
	$layout->set("menu", $menu->output());
	  $analytics=new Template("templates/template-analytics.tpl");
    $layout->set("analytics",$analytics->output());
	
	echo $layout->output();
	
?>
