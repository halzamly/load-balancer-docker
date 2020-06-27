
<?php

# protected $con;

# $NumberAccess = 0; // decimal number
# $HostName;
# $Color;
# $Timestamp;
# $RemoteIP;

# $Timestamp = date("Y-m-d H:i:s");
# CURRENT_TIME()
# CURRENT_TIMESTAMP
# NOW()

function getRealIpAddr()
{
    if (!empty($_SERVER['HTTP_CLIENT_IP']))   //check ip from share internet
    {
      $ip=$_SERVER['HTTP_CLIENT_IP'];
    }
    elseif (!empty($_SERVER['HTTP_X_FORWARDED_FOR']))   //to check ip is pass from proxy
    {
      $ip=$_SERVER['HTTP_X_FORWARDED_FOR'];
    }
    else
    {
      $ip=$_SERVER['REMOTE_ADDR'];
    }
    return $ip;
}


?>

