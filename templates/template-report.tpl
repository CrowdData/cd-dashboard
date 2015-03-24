<html>
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>[@templateTitle] Report</title>

    <!-- Bootstrap -->
    <link href="css/bootstrap.min.css" rel="stylesheet">
    <link href="css/dashboard-general.css" rel="stylesheet">
    <link href="css/dashboard-[@templateTitle].css" rel="stylesheet">


    <meta http-equiv="content-type" content="text/html; charset=UTF-8">
  <link type="text/css" href="release/dijit/themes/claro/claro.css" rel="stylesheet" />
    <link type="text/css" href="release/rdforms/view/resources/rdforms.css" rel="stylesheet" />
    <script src="release/dojo/dojo.js"></script>
 
 <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>
	<script src="js/custom.js"></script>
	<script src="js/[@templateTitle]-template.js"></script>
	  <script src="js/bootstrap.min.js"></script>
	  <script src="js/rdftemplate.js"></script>
	  <script type="text/javascript">
        // When the page is ready, load the data
        $( document ).ready(function() {
            getTemplate("[@datasetID]","[@templateTitle]Div"); // found in [template].js file
        });  
		</script>
    </script>
	<style>
        @import "release/dijit/themes/claro/claro.css";
     
  
</style>


	
	</head>
	
	<body class="claro">
	[@menu]
	
	
	
	
	
	 <div class="container-fluid data-display-header">
          <div class="container">        
              <h1 class="data-display capitalize">Provide [@templateMessageTitle]</h1>
	    
          </div>
      </div>
	    <div class="main container">
	
    
	<div id='onlyrdform'></div>
	<div id="_editor" class="hidden">
	    <div id="mandatoryDiv" class="hidden">
		  <p>[@templateMessage]</p>
</div>
		<div id="[@templateTitle]Div" class="hidden"></div>
	
		</div>
		<div id="loading" class="col-md-12 text-center vcenter">
	<h2 class="data-display capitalize">Loading [@templateMessageTitle] ...</h2><br>
        <span class="glyphicon glyphicon-refresh glyphicon-refresh-animate"></span>
    </div>
		
		<div id="errorDiv" class="alert alert-danger hidden"></div>
		
		
		
		</div>
	
	
	
	 <div class="container-fluid data-display-footer">

      </div>
	 <script>
	   (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-61133382-1', 'auto');
  ga('send', 'pageview');

	 </script>
</body>
	
	
	
	
	</html>