
<?php
try {
    $con = new PDO('mysql:host=172.26.0.3;port=3306;dbname=bigdata', 'root', 'netlab');
    print "Connected to the database successfully <br/> <br/>"; 
} catch (PDOException $e) {
    print "Error!: " . $e->getMessage() . "<br/>";
    die();
}
?>

