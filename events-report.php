<?php

	include("templates/template.class.php");
	
	$menu = new Template("templates/template-menu.tpl");
	$layout = new Template("templates/report.tpl");
    $analytics=new Template("templates/template-analytics.tpl");

    $layout->set("datasetID","events");
    $layout->set("templateID","http://crowddata.abdn.ac.uk/def/events/IITBEvent");
    $layout->set("headerContent","Provide details of Event");
    $layout->set("pageTitle", "Event provider");
	$layout->set("templateMessage","Please use the form below to provide details of an event .");
    $layout->set("button","Provide event");
    $layout->set("cssfilename","dashboard-event");
	
	$layout->set("menu", $menu->output());
    $layout->set("analytics",$analytics->output());
	
	echo $layout->output();
	
?>
