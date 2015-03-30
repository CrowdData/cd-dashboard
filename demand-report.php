<?php

	include("templates/template.class.php");
	
	$menu = new Template("templates/template-menu.tpl");
	$layout = new Template("templates/report.tpl");
    $analytics=new Template("templates/template-analytics.tpl");

    $layout->set("datasetID","demand");
    $layout->set("templateID","http://crowddata.abdn.ac.uk/ontologies/cd/0.1/Demand");
    $layout->set("headerContent","Provide details of TumTum demand");
    $layout->set("pageTitle", "Demand report");
	$layout->set("templateMessage","Please use the form below to provide details of the demand for TumTums at a stop.");
	
    $layout->set("button","Report demand");
	
	$layout->set("menu", $menu->output());
    $layout->set("analytics",$analytics->output());
	
	echo $layout->output();
	
?>