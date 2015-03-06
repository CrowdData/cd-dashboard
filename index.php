<?php

	include("templates/template.class.php");
	
	$menu = new Template("templates/template-menu.tpl");
	
	
	$layout = new Template("templates/template-home.tpl");
	$layout->set("menu", $menu->output());	
	echo $layout->output();
	
?>