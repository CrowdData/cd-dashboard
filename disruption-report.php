<?php

	include("templates/template.class.php");
	
	$menu = new Template("templates/template-menu.tpl");
	$layout = new Template("templates/report.tpl");
    $analytics=new Template("templates/template-analytics.tpl");

    $layout->set("datasetID","disruption");
    $layout->set("templateID","http://crowddata.abdn.ac.uk/def/incidents/Report");
    $layout->set("headerContent","Provide details of an incident.");
    $layout->set("pageTitle", "Incident report");
	$layout->set("templateMessage","Please use the form below to provide details of an incident (unexpected event).");
	$layout->set("cssfilename", "dashboard-disruption");
    $layout->set("button","Report incident");
	
	$layout->set("menu", $menu->output());
    $layout->set("analytics",$analytics->output());
	
	echo $layout->output();
	
?>