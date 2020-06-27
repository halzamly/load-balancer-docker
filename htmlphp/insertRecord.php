<?php

$HostName = " ";
$Color = $_ENV["COLOR"];
$ip = getRealIpAddr();

if ($_ENV["NAME"]){
$HostName = $_ENV["NAME"];
}
else{
$HostName = gethostname();
}

$stmt = $con->prepare("INSERT INTO activitylog(NumberAccess,HostName,Color,Timestamp,RemoteIP) VALUES(?,?,?,?,?)");
$stmt->execute(array(null, $HostName, $Color, null, $ip));

?>
