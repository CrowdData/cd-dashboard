<?php

	include("templates/template.class.php");
	

	$menu = new Template("templates/template-menu.tpl");
	$layout = new Template("templates/view.tpl");
	$analytics=new Template("templates/template-analytics.tpl");

    
   $layout->set("pageTitle", "Feedback");
   $layout->set("cssfilename","dashboard-feedback");
   $layout->set("jsfilename","feedback");
   $layout->set("menu", $menu->output());
    $layout->set("header","Feedback about IITB Life");

    $layout->set("analytics",$analytics->output());
    $layout->set("tableMessage","The table below shows feedback provided by other users about IITB Life. What do you think about it? Let us know using <a href=feedback-report.php>the provide feedback form</a>.");

    $layout->set("buttonredirect", "feedback-report.php");
	$layout->set("button","Provide us with feedback");
	
	echo $layout->output();
	
?>
