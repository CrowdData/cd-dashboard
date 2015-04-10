<?php

	include("templates/template.class.php");
	
	$menu = new Template("templates/template-menu.tpl");
	$layout = new Template("templates/report.tpl");
    $analytics=new Template("templates/template-analytics.tpl");

    $layout->set("datasetID","feedbackv2");
    $layout->set("templateID","http://crowddata.abdn.ac.uk/ontologies/cd/0.1/Feedback");
    $layout->set("headerContent","Provide Feedback About IITB Life");
    $layout->set("pageTitle", "Provide Feedback");
	$layout->set("templateMessage","Your feedback is crucial to ensuring IITB Life provides a useful service; please use the form below to let us know what you think about it.");
	
    $layout->set("button","Submit feedback");
	$layout->set("cssfilename","dashboard-feedback");
	$layout->set("menu", $menu->output());
    $layout->set("analytics",$analytics->output());
	
	echo $layout->output();
	
?>
