<?php

	include("templates/template.class.php");
	

	$menu = new Template("templates/template-menu.tpl");
	$layout = new Template("templates/view.tpl");
	$analytics=new Template("templates/template-analytics.tpl");

    
   $layout->set("pageTitle", "TumTum Demand");
   $layout->set("cssfilename","dashboard-demand");
   $layout->set("jsfilename","demand");
   $layout->set("menu", $menu->output());
    $layout->set("header","TumTum Demand");

    $layout->set("analytics",$analytics->output());
    $layout->set("tableMessage","The table below shows the demand for TumTums, as reported by other users.  Think this is missing some data? Please <a href=demand-report.php> let us know about it</a>.");

    $layout->set("buttonredirect", "demand-report.php");
	$layout->set("button","Report currect bus stop demand");
	
	echo $layout->output();
	
?>
