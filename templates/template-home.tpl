
<!DOCTYPE html>
<html>
<head>
	
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />

	<title></title>

	
    
	
	<script src="http://code.jquery.com/jquery-latest.js"></script>
        <script type="text/javascript" src="http://maps.google.com/maps/api/js?sensor=false"></script> 
    <script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js"></script> 
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
	
</head>

<body >
  
        <!-- should be included as PHP fixed menu, will be updated later -->
      <nav class="navbar navbar-inverse navbar-fixed-top">
      <div class="container">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="index.php">IITB View</a>
        </div>
        <div id="navbar" class="collapse navbar-collapse">
          <ul class="nav navbar-nav">
	 <li ><a href="map.php">Campus Map</a></li>      
	   <li>           <a href="#" class="dropdown-toggle" data-toggle="dropdown">
     Demand
      <b class="caret"></b>
    </a>
    <ul class="dropdown-menu">
     	 <li ><a href="demand-view.php">TumTum Demand View</a></li>
	  <li ><a href="demand-report.php">Report TumTum Demand</a></li>
    </ul>
  </li>	   
  
         
	       
	    <li>          <a href="#" class="dropdown-toggle" data-toggle="dropdown">
      Campus Disruptions
      <b class="caret"></b>
    </a>
    <ul class="dropdown-menu">
     	 <li ><a href="disruption-view.php">Campus Disruptions View</a></li>
	  <li ><a href="disruption-report.php">Report New Disruption</a></li>
    </ul>
  </li>	   
  
       	  <li>       <a href="#" class="dropdown-toggle" data-toggle="dropdown">
     Events
      <b class="caret"></b>
    </a>
    <ul class="dropdown-menu">
     	 <li ><a href="events-view.php">Events View</a></li>
	  <li ><a href="events-report.php">Report New Event</a></li>
    </ul>
  </li>	   
	       	      <li>   <a href="#" class="dropdown-toggle" data-toggle="dropdown">
      Feedback
      <b class="caret"></b>
    </a>
    <ul class="dropdown-menu">
     	 <li ><a href="feedback-view.php">Feedback View</a></li>
	  <li ><a href="feedback-report.php">Submit Feedback</a></li>
    </ul>
  </li>	<li>   <a href="#" class="dropdown-toggle" data-toggle="dropdown">
      Community QA
      <b class="caret"></b>
    </a>
    <ul class="dropdown-menu">
     	 <li ><a href="questions-view.php">Show Questions</a></li>
	  <li ><a href="questions-report.php">Ask Question</a></li>
    </ul>
  </li>	     
		
			<li ><a href="contact.php">Contact Us</a></li>
			<li ><a href="about.php">About</a></li> 
  
          </ul>
	
        </div><!--/.nav-collapse -->
      </div>
    </nav>
      
      <div class="container-fluid data-display-header">
          <div class="container">        
              <h1 >IIT Bombay View</h1>
              <p>Providing a snapshot of life on the IITB campus</p>
              <p>The IIT Bombay view provides information about various aspects of the campus.
              Click on any of the "View" links below to see the latest information for the different categories, or click "Report" to provide some.</p>
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
          <div class="tile-number" style ="font-size: 50px"id="tumtum-demand-number">
           
          </div>

          <div class="">
            People seen <a href="demand-view.php">waiting for TumTums</a>. 
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
            <a href="events-view.php">Events today</a> at IIT-B
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
        });  
    </script>
</body>
    
</html>
