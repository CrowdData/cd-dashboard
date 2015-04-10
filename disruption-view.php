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
    $layout->set("tableMessage","The table below shows incidents, i.e. adverse things happening on campus, such as road closures, internet outages, and panther sightings.  These have been provided by other users; are you aware of something happening that’s not listed? If so, <a href=disruption-report.php>tell us and others about it</a>.");

    $layout->set("buttonredirect", "disruption-report.php");
	$layout->set("button","Report new incident");
	
	echo $layout->output();
	
?>
