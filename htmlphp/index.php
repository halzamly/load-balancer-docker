<!doctype html>
<html lang="en">
  <head>
    <title>Hello ServiceMgmt!</title>
    <!-- Required meta tags -->
    <meta charset="utf-8">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="css/bootstrap.min.css">

  </head>
  <body>
    <h1>Service Management in Networks <br> <font size="+3"> (Practical Exercise 7 - Load balancer)</font></h1>
    <p1>I test my index page on Docker-based Apache web server supporting PHP, In this exercise we built a load balancer scenario with an nginx based load balancer and three colored websites website1 (blue), website2 (red) and website3 (green), where every call of website generates a colored record in the table activitylog.  <br> <br> </p1> 

      <?php 
      include ("parameters.php");
      include ("connectDB.php");
      include ("insertRecord.php");
      include ("printTable.php");
      include ("reduceTable.php");
      ?>  

    <p2> <br><br> Best Regrads,  <br> Hossam Alzamly </p2> 

  </body>
</html>
