<?php

	include("templates/template.class.php");
	

	$menu = new Template("templates/template-menu.tpl");
	$layout = new Template("templates/view.tpl");
	$analytics=new Template("templates/template-analytics.tpl");
    
   $layout->set("pageTitle", "Incidents View");
   $layout->set("cssfilename","dashboard-disruption");
   $layout->set("jsfilename","disruption");
   $layout->set("menu", $menu->output());
    $layout->set("header","Incidents on IITB");
    
    $layout->set("analytics",$analytics->output());
    $layout->set("tableMessage","This table displays details of disruptions (unexpected events) on campus provided by users");

    $layout->set("buttonredirect", "disruption-report.php");
	$layout->set("button","Report new incident");
	
	echo $layout->output();
	
?>