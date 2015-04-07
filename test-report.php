<?php

	include("templates/template.class.php");
	
	$menu = new Template("templates/template-menu.tpl");
	$layout = new Template("templates/report.tpl");
    $analytics=new Template("templates/template-analytics.tpl");

    $layout->set("datasetID","testing");
    $layout->set("templateID","http://crowddata.abdn.ac.uk/def/events/IITBEvent");
    $layout->set("headerContent","Provide Report");
    $layout->set("pageTitle", "Provide Report");
	$layout->set("templateMessage","Please use the form below to provide us with your thoughts, opinions, or other feedback regarding the dashboard.");
	
    $layout->set("button","Submit report");
	
	$layout->set("menu", $menu->output());

    $layout->set("analytics",$analytics->output());
	
	echo $layout->output();
	
?>