<?php

	include("templates/template.class.php");
	

	$menu = new Template("templates/template-menu.tpl");
	
    
	$layout = new Template("templates/view.tpl");
	
	$layout->set("tableMessage","The table below shows events happening on campus. These have been provided by other users; are you aware of something happening that’s not listed? If so, <a href=events-report.php>tell us and others about it</a>.");
	$layout->set("datasetID","events");
	$layout->set("menu", $menu->output());
  
	  $analytics=new Template("templates/template-analytics.tpl");
    $layout->set("analytics",$analytics->output());

    //new
  $layout->set("cssfilename","dashboard-events");
$layout->set("pageTitle","Events");
  $layout->set("jsfilename","events");    
    $layout->set("header","Events On Campus");
  $layout->set("button","Provide new event");
$layout->set("buttonredirect","events-report.php");
	echo $layout->output();
?>
