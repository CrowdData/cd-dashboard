<?php
	
	include("templates/template.class.php");
	

	$menu = new Template("templates/template-menu.tpl");
	
	$layout = new Template("templates/template-response-view.tpl");
	$layout->set("question", htmlspecialchars($_GET["question"]));
	$layout->set("templateID","http://crowddata.abdn.ac.uk/ontologies/cd/0.1/Response");
	$layout->set ("datasetID","questions");
	$layout->set("author",htmlspecialchars($_GET["author"]));
	$layout->set("questionID",htmlspecialchars($_GET["id"]));
	$layout->set("cssfilename","dashboard-responses");
	$layout->set("menu", $menu->output());
    $layout->set("button","Submit answert to this question");
	  $analytics=new Template("templates/template-analytics.tpl");
    $layout->set("analytics",$analytics->output());
	echo $layout->output();
?>