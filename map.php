<?php

	include("templates/template.class.php");
	

	$menu = new Template("templates/template-menu.tpl");
	

	$layout = new Template("templates/template-map.tpl");
    $layout->set("cssfilename","dashboard-questions");
	$layout->set("menu", $menu->output());
  $analytics=new Template("templates/template-analytics.tpl");
    $layout->set("analytics",$analytics->output());
    $layout->set("tableMessage","Use the layers selection box at the top right of the map to display different things on the map. Currently these include real-time TumTum locations, provided by the <a href=http://transittripplanner.co.in/VisitorInformationSystem/tumtum.html>TumTum Tracker system</a> and TumTum stop locations.  Tap on the pins on the map for more details, such as recently reported TumTum demand and incidents at each stop. ");
	echo $layout->output();
	
?>
