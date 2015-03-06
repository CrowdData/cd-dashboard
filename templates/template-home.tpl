<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>IITB View</title>

    <!-- Bootstrap -->
    <link href="css/bootstrap.min.css" rel="stylesheet">
    <link href="css/dashboard-general.css" rel="stylesheet">
    <link href="css/dashboard-home.css" rel="stylesheet">

      
    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
  </head>
  <body>
      <!-- should be included as PHP fixed menu, will be updated later -->
     [@menu]
      
      <div class="container-fluid data-display-header">
          <div class="container">        
              <h1 class="">IIT Bombay View</h1>
              <p>Providing a snapshot of life on the IITB campus</p>
          </div>
      </div>

     <div class="container display-content ">     
         <div class="row">
            <div class="col-sm-3 box feedback-box">
               <h2>Feedback<br/><br/></h2>
                <p><a href="feedback-view.php">View</a></p>
                <p><a href="feedback-report.php">Report</a></p>
             </div>
             <div class="col-sm-3 col-sm-offset-1 box tumtum-demand-box">
                <p><h2>TumTum Demand</h2></p>
                 <p><a href="demand-view.php">View</a></p>
                <p><a href="demand-report.php">Report</a></p>
             </div>
             <div class="col-sm-3 col-sm-3 col-sm-offset-1 box disruption-box">
                <h2>Campus Disruptions</h2>
        <p><a href="disruption-view.php">View</a></p>
                <p><a href="disruption-report.php">Report</a></p>
             </div>
         </div>
         
         <div class="row">
            <div class="col-sm-3 box events-box">
                <h2>Events<br/><br/></h2>
                 <p><a href="event-view.php">View</a></p>
                <p><a href="event-report.php">Report</a></p>
             </div>
         
         </div>
         
      </div>
            
      
    <!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>
    <!-- Include all compiled plugins (below), or include individual files as needed -->
    <script src="js/bootstrap.min.js"></script>
  </body>
</html>