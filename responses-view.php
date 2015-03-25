<?php
	
	include("templates/template.class.php");
	

	$menu = new Template("templates/template-menu.tpl");
	
	$layout = new Template("templates/template-response-view.tpl");
	$layout->set("question", htmlspecialchars($_GET["question"]));
	$layout->set("templateID","responses");
	$layout->set ("datasetID","questions");
	$layout->set("author",htmlspecialchars($_GET["author"]));
	$layout->set("questionID",htmlspecialchars($_GET["id"]));
	
	$layout->set("menu", $menu->output());
	
	echo $layout->output();
?>