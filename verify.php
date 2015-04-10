<?php
$cookie_name = "userid";
$cookie_value = $_GET['token'];
$cookie_mail ="usermail";
$cookie_mail_value=$_GET['email'];
setcookie($cookie_name, $cookie_value, time() + (86400 * 365), "/"); // 86400 = 1 day
setcookie($cookie_mail, $cookie_mail_value, time() + (86400 * 365), "/"); // 86400 = 1 day
header("Location: index.php?".$cookie_value);
die();
?>