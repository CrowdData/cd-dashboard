<?php

	include("templates/template.class.php");
	
	$menu = new Template("templates/template-menu.tpl");
	$layout = new Template("templates/report.tpl");
    $analytics=new Template("templates/template-analytics.tpl");

    $layout->set("datasetID","feedback");
    $layout->set("templateID","http://crowddata.abdn.ac.uk/ontologies/cd/0.1/Feedback");
    $layout->set("headerContent","Provide Feedback about dashboard");
    $layout->set("pageTitle", "Provide Feedback");
	$layout->set("templateMessage","Please use the form below to provide us with your thoughts, opinions, or other feedback regarding the dashboard.");
	
    $layout->set("button","Submit feedback");
	
	$layout->set("menu", $menu->output());
    $layout->set("analytics",$analytics->output());
	
	echo $layout->output();
	
?>