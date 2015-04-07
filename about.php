<?php

	include("templates/template.class.php");
	

	$menu = new Template("templates/template-menu.tpl");
	

	$layout = new Template("templates/template-about.tpl");
	$layout->set("menu", $menu->output());
    $analytics=new Template("templates/template-analytics.tpl");
    $layout->set("analytics",$analytics->output());

	echo $layout->output();
	
?>