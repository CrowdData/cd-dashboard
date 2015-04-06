<?php

	include("templates/template.class.php");
	

	$menu = new Template("templates/template-menu.tpl");
	$layout = new Template("templates/view.tpl");
	$analytics=new Template("templates/template-analytics.tpl");

    
   $layout->set("pageTitle", "Demand View");
   $layout->set("cssfilename","dashboard-demand");
   $layout->set("jsfilename","demand");
   $layout->set("menu", $menu->output());
    $layout->set("header","TumTum Demand");

    $layout->set("analytics",$analytics->output());
    $layout->set("tableMessage","This table displays latest demand on the bus stops.");

    $layout->set("buttonredirect", "demand-report.php");
	$layout->set("button","Report currect bus stop demand");
	
	echo $layout->output();
	
?>
