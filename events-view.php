<?php

	include("templates/template.class.php");
	

	$menu = new Template("templates/template-menu.tpl");
	
    
	$layout = new Template("templates/view.tpl");
	
	$layout->set("tableMessage","This table provides details about various institute level and department level events");
	$layout->set("datasetID","events");
	$layout->set("menu", $menu->output());
  
	  $analytics=new Template("templates/template-analytics.tpl");
    $layout->set("analytics",$analytics->output());

    //new
  $layout->set("cssfilename","dashboard-events");
  $layout->set("jsfilename","events");    
    $layout->set("header","IITB Events");
  $layout->set("button","Provide new event");
$layout->set("buttonredirect","events-report.php");
	echo $layout->output();
?>