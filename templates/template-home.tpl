
<!DOCTYPE html>
<html>
<head>
	
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />

	<title>IITB Life</title>

	
    
	
	
        <script type="text/javascript" src="http://maps.google.com/maps/api/js?sensor=false"></script> 
    <script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script> 
    <script src="js/bootstrap.min.js"></script>
    <script type="text/javascript" src="js/Script2.js"></script>
    <script type="text/javascript" src="js/utilities.js"></script>
     <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    

    <!-- Bootstrap -->
    <link href="css/bootstrap.min.css" rel="stylesheet">
    <link href="css/dashboard-general.css" rel="stylesheet">
    <link href="css/dashboard-home.css" rel="stylesheet">
    <link href="css/dashboard-tiles-home.css" rel="stylesheet">
   
	<!--[if IE]><script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script><![endif]-->
	[@analytics]
</head>

<body >
  
     [@menu]
      <div class="container-fluid data-display-header">
          <div class="container">        
               <p>Below you'll find an overview of what's happening on campus; tap on any of the boxes to find out more or to let us know about what's going on.</p>
              <hr/>
          </div>
      </div>

     <div class="container">
        <div class="row">
      <div class="col-sm-4">
        <div class="tile tumtum-tile tumtum-location-tile">
          <div class="">
            TumTums <a href="map.php">currently being tracked:</a>
          </div>

          <div class="tile-number right-text" id="tumtum-tracker-number">
          </div>

          <div class="right-text">
            across 26 bus stops
          </div>

          <div class="clearfix"></div>
        </div>
      </div>

      <div class="col-sm-3">
        <div class="tile disruption-tile">
          <div class="tile-number centred-text" id="disruptions-number">
            
          </div>

          <div class="centred-text">
            <a href="disruption-view.php">disruptions reported</a> in the last week
          </div>
        </div>
      </div>

      <div class="col-sm-5">
        <div class="tile tumtum-tile">
          <div  id="tumtum-demand-number">
           
          </div>

          <div class="">
            people seen <a href="demand-view.php">waiting for TumTums</a>. 
          </div>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-sm-3">
        <div class="tile question-tile">
          <div>
            <a href="questions-view.php">Questions asked</a> by IIT-ians:
          </div>

          <div class="tile-number centred-text" id="questions-number">
            
          </div>
        </div>
      </div>

      <div class="col-sm-6">
        <div class="tile report-tile">
          <div class="report-tile-title">
            Assist fellow IIT-ians
          </div>

          <div class="report-tile-button">
            <a href="events-report.php">Provide details of an upcoming event</a>
          </div>

          <div class="report-tile-button">
            <a href="disruption-report.php">Report a disruption</a>
          </div>

          <div class="report-tile-button">
            <a href="demand-report.php">Inform of people waiting for Tumtums</a>
          </div>

          <div class="report-tile-button">
            <a href="questions-report.php">Ask a question</a>
          </div>
        </div>
      </div>

      <div class="col-sm-3">
        <div class="tile event-tile">
          <div class="tile-number" id="events-number">
          </div>

          <div>
            <a href="events-view.php">events happening</a> at IIT-B
          </div>
        </div>
      </div>
    </div><!--end row-->
    <div class="row">
      <div class="col-sm-3">
        <div class="tile feedback-tile">
          <div class="tile-number centred-text" id="feedback-number">
          
          <div>
            <a href="feedback-view.php">feedback messages provided</a> about IITB Life
          </div>

            
          </div>
        </div>
      </div>
         </div>
    <script>
         $( document ).ready(function() {
           getEvents();
           getQA();
           tumtumTrack();
           getData();
           getDisrupt();
           getFeedback();
        });  
    </script>
</body>
    
</html>
