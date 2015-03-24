<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>IITB Life</title>

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
	<script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-61133382-1', 'auto');
  ga('send', 'pageview');

</script>
  </head>
  <body>
      <!-- should be included as PHP fixed menu, will be updated later -->
     [@menu]
      
      <div class="container container-fluid data-display-header">
    
<div class="row">		  
              <h1 >IIT Bombay Life</h1>
              <p>Providing a snapshot of life on the IITB campus</p>
              <p>The IIT Bombay view provides information about various aspects of the campus.
              Click on any of the "View" links below to see the latest information for the different categories, or click "Report" to provide some.</p>
          </div>

      </div>

     <div class="container  display-content ">     
         
          <div class="row">
		  <div class="col-sm-6">
		   <div class="row  box map-box">
               <h2>Campus Map</h2>
			  <p> Provides you with real-time TumTum bus locations, latest demand and disruptions </p>
                <p><a href="map.php">View Map</a></p>
				</div>
		  
		  
             <div class="row   box tumtum-demand-box">
                <h2>TumTum Demand</h2>
				<p>Details of TumTum demand on the campus.</p>
                 <p><a href="demand-view.php">View</a></p>
                <p><a href="demand-report.php">Report</a></p>
             </div>
			 
			
			
			 
            <div class="row  box events-box">
                <h2>Events</h2>
				<p>Details of latest events happening on the campus.</p>
                 <p><a href="events-view.php">View</a></p>
                <p><a href="events-report.php">Provide</a></p>
             </div>
         
		 </div>
		 <div class="col-sm-6">
                 <div class="row box disruption-box">
                <h2>Campus Disruptions</h2>
				<p>Details of most recent disruptions on the campus</p>
        <p><a href="disruption-view.php">View</a></p>
                <p><a href="disruption-report.php">Report</a></p>
             </div>
			 
				
				
			 
				
			       <div class="row box questions-box">
                <h2>Community QA</h2>
				<p>Ask questions or provide answers about campus life. </p>
        <p><a href="questions-view.php">Show Questions</a></p>
                <p><a href="questions-report.php">Ask a Question</a></p>
             </div>
                 
                 
          
             
            <div class="row box feedback-box">
               <h2>Feedback</h2>
			   <p>Provide feedback about IITB Life Dashboard</p> 
                <p><a href="feedback-view.php">View</a></p>
                <p><a href="feedback-report.php">Provide</a></p>
             </div>

           
          
      </div>
	  </div>
         </div>
         
      
         
            
      
    <!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>
    <!-- Include all compiled plugins (below), or include individual files as needed -->
    <script src="js/bootstrap.min.js"></script>
  </body>
</html>