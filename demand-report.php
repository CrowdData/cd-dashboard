<?php

	include("templates/template.class.php");
	
	$menu = new Template("templates/template-menu.tpl");
	
	
	$layout = new Template("templates/template-report.tpl");
	$layout->set("templateTitle", "demand");
	$layout->set("templateMessageTitle","details of TumTum demand");
	$layout->set("templateMessage","Please use the form below to provide details of the demand for TumTums at a stop.");
	$layout->set("datasetID","demand");
	$layout->set("menu", $menu->output());
	  $analytics=new Template("templates/template-analytics.tpl");
    $layout->set("analytics",$analytics->output());
	
	echo $layout->output();
	
?>