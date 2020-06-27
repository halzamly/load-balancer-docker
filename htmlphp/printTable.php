<?php

echo "<table border='1' CELLPADDING='3' CELLSPACING='3'>
<tr bgcolor='#FFFF00'>
<th>Nr. Access</th>
<th>Time and Date</th>
<th>Host Name</th>
<th>Color</th>
<th>Remote IP</th>
</tr>";

foreach($con->query('SELECT * from activitylog ORDER BY NumberAccess DESC LIMIT 199') as $row)
{
echo "<tr bgcolor=". $row['Color'] .">";
echo "<td>" . $row['NumberAccess'] . "</td>";
echo "<td>" . $row['Timestamp'] . "</td>";
echo "<td>" . $row['HostName'] . "</td>";
echo "<td>" . $row['Color'] . "</td>";
echo "<td>" . $row['RemoteIP'] . "</td>";
echo "</tr>";

}
echo "</table>";

# $stmt = null; // close connection
# $con = null;

?>
