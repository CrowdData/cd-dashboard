<?php

	include("templates/template.class.php");
	
	$menu = new Template("templates/template-menu.tpl");
	$layout = new Template("templates/report.tpl");
    $analytics=new Template("templates/template-analytics.tpl");

    $layout->set("datasetID","questionsv2");
    $layout->set("templateID","http://crowddata.abdn.ac.uk/ontologies/cd/0.1/Question");
    $layout->set("headerContent","Ask a question to IITB community");
    $layout->set("pageTitle", "Ask a question");
	$layout->set("templateMessage","Is there something you want to know about IITB? If so, use the form below to ask other users about it.");
    $layout->set("cssfilename","dashboard-questions");
	
    $layout->set("button","Submit question");
	
	$layout->set("menu", $menu->output());
    $layout->set("analytics",$analytics->output());
	
	echo $layout->output();
	
?>
