<?php

$stmt2 = $con->prepare("SELECT count('NumberAccess') FROM activitylog");
$stmt2->execute();
$rows = $stmt2->fetch(PDO::FETCH_NUM);
$rows_count = $rows[0];

// Delete all rows that exceeds 200, by that we keep the database has only the last 200 records.
if($rows_count > 199){
$extra_rows = $rows_count - 199;
$stmt3 = $con->prepare("DELETE FROM activitylog ORDER BY NumberAccess ASC LIMIT :extra_rows");
$stmt3->bindValue(':extra_rows', $extra_rows, PDO::PARAM_INT);
$stmt3->execute();
}

/*
#$stmt3 = $con->query('DELETE FROM activitylog ORDER BY NumberAccess DESC LIMIT 5 OFFSET 1');
#$stmt3 = $con->query('DELETE FROM activitylog ORDER BY NumberAccess ASC LIMIT :extra_rows');
#$stmt3 = $con->query('DELETE FROM activitylog WHERE NumberAccess NOT IN ( SELECT TOP 2 NumberAccess FROM activitylog ORDER BY ASC )');
#$stmt3 = $con->query('DELETE FROM activitylog WHERE NumberAccess NOT IN (SELECT NumberAccess FROM activitylog ORDER BY NumberAccess DESC LIMIT 5 )');
#$stmt3 = $con->query('DELETE FROM activitylog ORDER BY NumberAccess ASC LIMIT :extra_rows');
#$stmt3 = $con->query('DELETE FROM activitylog ORDER BY NumberAccess ASC LIMIT ((select count(*) from activitylog ) - 5)');
#$stmt3 = $con->query('DELETE FROM activitylog ORDER BY NumberAccess ASC LIMIT 5');
#$stmt3 = $con->query('DELETE FROM activitylog WHERE NumberAccess NOT IN (SELECT NumberAccess FROM activitylog ORDER BY NumberAccess DESC LIMIT 5 )');
#$stmt3 = $con->query('DELETE FROM activitylog WHERE NumberAccess NOT IN (SELECT NumberAccess FROM activitylog ORDER BY NumberAccess ASC LIMIT 200 )');
#$stmt3 = $con->query('DELETE FROM activitylog WHERE NumberAccess NOT IN (SELECT TOP 200 NumberAccess FROM activitylog)');
$stmt3 = $con->query('DELETE FROM activitylog WHERE NumberAccess NOT IN (SELECT TOP 5 NumberAccess FROM activitylog ORDER BY NumberAccess ASC LIMIT 5)');
$stmt3 = $con->query('DELETE FROM activitylog WHERE NumberAccess NOT IN (SELECT TOP 30 NumberAccess FROM activitylog ORDER BY NumberAccess DESC)');
#$stmt3 = $con->prepare("DELETE FROM activitylog WHERE NumberAccess NOT IN (SELECT NumberAccess FROM activitylog ORDER BY NumberAccess DESC LIMIT 5 )");
#$stmt3->execute();
}
*/
?>
