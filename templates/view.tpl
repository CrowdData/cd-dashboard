<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>[@pageTitle]</title>

    <!-- Bootstrap -->
    <link href="css/bootstrap.min.css" rel="stylesheet">
    <link href="css/dashboard-general.css" rel="stylesheet">
    <link href="css/[@cssfilename].css" rel="stylesheet">

[@analytics]
	
  </head>
  <body class="loading">
      <!-- should be included as PHP fixed menu, will be updated later -->
     [@menu]
      
      <div class="container-fluid data-display-header">
        <div class="container">
              <h1 class="data-display capitalize">[@header] </h1>
          </div>
      </div>

     <div class="main container data-display-content">     
		
         <div id="tablediv" class="hidden">	
         <div class="table-responsive">
			<div class="col-md-12">		  
		<table id="data-table">
		  <p id="tableTitle" class="center">[@tableMessage]</p>
         </table>
			</div>
		 </div>
        </div>
         <div id="content" class="row"></div>
        <div id="errorDiv" class="alert alert-danger"></div>
         <div id="successDiv" class="alert alert-success"></div>
      </div>
      
      <div class="container-fluid data-display-footer">
          <div class="container">
            <a class="btn btn-default" href="[@buttonredirect]" role="button">[@button]</a>
          </div>
      </div>
      
      <div class="modal"></div>
    <!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>
    <!-- Include all compiled plugins (below), or include individual files as needed -->
    <script src="js/bootstrap.min.js"></script>
    <script src="js/viewer.js"></script>
    <script src="js/general-query.js"></script>
    <script src="js/[@jsfilename].js"></script>
    <script src="js/utilities.js"></script>
    <script type="text/javascript">
        // When the page is ready, load the data
        $( document ).ready(function() {
            init();
        });  
    </script>
  </body>
</html>