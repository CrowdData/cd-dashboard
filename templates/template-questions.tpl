<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>[@templateTitle] View</title>

    <!-- Bootstrap -->
    <link href="css/bootstrap.min.css" rel="stylesheet">
    <link href="css/dashboard-general.css" rel="stylesheet">
    <link href="css/dashboard-[@templateTitle].css" rel="stylesheet">
    
    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
	
  </head>
  <body class="claro">
      <!-- should be included as PHP fixed menu, will be updated later -->
     [@menu]
      
      <div class="container-fluid data-display-header">
          <div class="container">        
              <h1 class="data-display capitalize">Community Questions</h1>
	   
          </div> 
      </div>

	    <div class="main container">
		
		
	
	<div id="questionsDiv" class="container"></div>
    
		
		<div id="errorDiv" class="alert alert-danger hidden"></div>

		</div>
	
      <div class="container-fluid data-display-footer">
    <div class="container">
            <a class="btn btn-default" href="questions-report.php" role="button">Ask a question</a>
          </div>
      </div>
      
      
    <!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>

    <script src="release/dojo/dojo.js"></script>
    <!-- Include all compiled plugins (below), or include individual files as needed -->
    <script src="js/bootstrap.min.js"></script>
	<script src="js/custom.js"></script>
    <script src="js/[@templateTitle]-template.js"></script>
	  <script src="js/general-query.js"></script>
	  <script src="js/rdftemplate.js"></script>
    <script type="text/javascript">
        // When the page is ready, load the data
        $( document ).ready(function() {
            getData();
        });  
		  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-61133382-1', 'auto');
  ga('send', 'pageview');

    </script>
  </body>
</html>