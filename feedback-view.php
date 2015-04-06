<?php

	include("templates/template.class.php");
	

	$menu = new Template("templates/template-menu.tpl");
	$layout = new Template("templates/view.tpl");
	$analytics=new Template("templates/template-analytics.tpl");

    
   $layout->set("pageTitle", "Feedback");
   $layout->set("cssfilename","dashboard-feedback");
   $layout->set("jsfilename","feedback");
   $layout->set("menu", $menu->output());
    $layout->set("header","Citizen Feedback");

    $layout->set("analytics",$analytics->output());
    $layout->set("tableMessage","This table displays the feedback on the dashboard provided by users");

    $layout->set("buttonRedirect", "feedback-report.php");
	$layout->set("button","Provide us with feedback");
	
	echo $layout->output();
	
?>
