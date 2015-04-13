<?php

	include("templates/template.class.php");
	
	$menu = new Template("templates/template-menu.tpl");
	$layout = new Template("templates/report.tpl");
    $analytics=new Template("templates/template-analytics.tpl");

    $layout->set("datasetID","demandv2");
    $layout->set("templateID","http://crowddata.abdn.ac.uk/ontologies/cd/0.1/Demand");

    $layout->set("cssfilename", "dashboard-demand");
    $layout->set("headerContent","Provide details of TumTum demand");
    $layout->set("pageTitle", "Demand report");
	$layout->set("templateMessage","Please use this form to let others know about the number of people you've seen waiting for a TumTum.");
	
    $layout->set("button","Report demand");
	
	$layout->set("menu", $menu->output());
    $layout->set("analytics",$analytics->output());
	
	echo $layout->output();
	
?>
