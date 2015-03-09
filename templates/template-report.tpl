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
        @import "release/rdforms/view/resources/rdforms.css";
  
    #_editor * {
        -webkit-box-sizing: content-box;
        -moz-box-sizing: content-box;
        box-sizing: content-box;
	/*	height: auto;*/
    }
    .main {
        position: relative;
		height: 20em;
		margin-bottom:5em;
    }
    .main #_editor {
       /* position: absolute;
        top: 1em;
        bottom: 1em;
        left: 0px;
        right: 0px;*/
    }
</style>


	
	</head>
	
	<body class="claro">
	[@menu]
	
	<div class >
	
	
	
	 <div class="container-fluid data-display-header">
          <div class="container">        
              <h1 class="data-display capitalize">[@templateTitle] Report</h1>
          </div>
      </div>
	    <div class="main">
		<div id="_editor">
    

		<div id="[@templateTitle]Div"></div>
		<div id="loading" class="col-md-12 text-center vcenter">
	<h2 class="data-display capitalize">Loading [@templateTitle] Report</h2><br>
        <span class="glyphicon glyphicon-refresh glyphicon-refresh-animate"></span>
    </div>
		</div>
		</div>
	</div>
	
	
	 <div class="container-fluid data-display-footer">
          <div class="container">
              <a class="btn btn-default" href="index.php" role="button">Back to dashboard</a>
            <a class="btn btn-default" href="[@templateTitle]-view.php" role="button">Back to [@templateTitle]</a>
          </div>
      </div>
	 
</body>
	
	
	
	
	</html>