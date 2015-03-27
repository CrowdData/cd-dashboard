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
<script src="http://code.jquery.com/jquery-1.11.1.min.js"></script>

    <meta http-equiv="content-type" content="text/html; charset=UTF-8">
  <link type="text/css" href="release/dijit/themes/claro/claro.css" rel="stylesheet" />
    <link type="text/css" href="release/rdforms/view/resources/rdforms.css" rel="stylesheet" />
    <script src="release/dojo/dojo.js"></script>
 

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
	<style>
        @import "release/dijit/themes/claro/claro.css";
     
  
</style>

[@analytics]
	
	</head>
	
	<body class="claro">
	[@menu]
	
	 <div class="container-fluid data-display-header">
          <div class="container">        
              <h1 class="data-display capitalize">Provide [@templateMessageTitle]</h1>
	    
          </div>
      </div>
	    <div class="main container">
	
   <div id="mandatoryDiv" class="hidden">
		  <p>[@templateMessage]</p>
</div>
	<div id='onlyrdform'></div>
			
		<div id="errorDiv" class="alert alert-danger hidden"></div>

		</div>
	
	
	
	 <div class="container-fluid data-display-footer">

      </div>
	  <div class="modal"></div>
</body>
	
	
	
	
	</html>