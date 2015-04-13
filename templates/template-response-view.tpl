<html>
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Community Responses</title>

    <!-- Bootstrap -->
    <link href="css/bootstrap.min.css" rel="stylesheet">
    <link href="css/dashboard-general.css" rel="stylesheet">
    <link href="css/[@cssfilename].css" rel="stylesheet">


    <meta http-equiv="content-type" content="text/html; charset=UTF-8">
    <link type="text/css" href="release/dijit/themes/claro/claro.css" rel="stylesheet" />
    <link type="text/css" href="release/rdforms/view/resources/rdforms.css" rel="stylesheet" />
    <script src="release/dojo/dojo.js"></script>
 
 <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>
	<script src="js/general-query.js"></script>
	<script src="js/responses.js"></script>
    <script src="js/utilities.js"></script>
    <script src="js/rdform/rdforms.js"></script>
     <script src="js/viewer.js"></script>
    <script src="js/loader.js"></script>
	  <script src="js/bootstrap.min.js"></script>
	  <script type="text/javascript">
        // When the page is ready, load the data
        $( document ).ready(function() {
            initResponses("[@templateID]","[@datasetID]","[@questionID]"); 
        });  
		</script>
    </script>
	<style>
        @import "release/dijit/themes/claro/claro.css";
        @import "release/rdforms/view/resources/rdforms.css";
  

</style>

[@analytics]
	
	</head>
	
	<body class="loading">
	[@menu]

	
	 <div class="container-fluid data-display-header" >
          <div class="container">        
              <h1 class="data-display capitalize">Responses to Question: [@question]</h1>
				   <h5 class="data-display">Author: [@author]</h5>
          </div>
      </div>
	
	    <div class="main container">
		 <div  id="top"></div>
            <div class="row">
		<p>Can you provide a useful response to this question? If so, please provide it using the form below.</p>
	<div id="responsesDiv" class="container"></div>
    </div>
	   <div class="row">
		    <h2>Response form</h2>
		<div id="onlyrdform" class="claro container"></div>
            </div>
		  <div class="row">  
        <div id="errorDiv" class="alert alert-danger"></div>
         <div id="successDiv" class="alert alert-success"></div>
        </div>   
		 <button class="btn btn-info" id='submitButton' onclick='submitResponse()'><span class="glyphicon glyphicon-send"></span> [@button]</button>
		
	    </div>
	
	
	
	 <div class="container-fluid data-display-footer">
          <div class="container">

          </div>
      </div>
	  <div class="modal"></div>
</body>
	
	
	
	
	</html>
