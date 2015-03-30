<?php

	include("templates/template.class.php");
	
	$menu = new Template("templates/template-menu.tpl");
	$layout = new Template("templates/report.tpl");
    $analytics=new Template("templates/template-analytics.tpl");

    $layout->set("datasetID","disruption");
    $layout->set("templateID","http://crowddata.abdn.ac.uk/ontologies/cd/0.1/Disruption");
    $layout->set("headerContent","Provide details of a disruption.");
    $layout->set("pageTitle", "Disruption report");
	$layout->set("templateMessage","Please use the form below to provide details of a disruption (unexpected event).");
	
    $layout->set("button","Report disruption");
	
	$layout->set("menu", $menu->output());
    $layout->set("analytics",$analytics->output());
	
	echo $layout->output();
	
?>