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
  <body>
      <!-- should be included as PHP fixed menu, will be updated later -->
     [@menu]
      
      <div class="container-fluid data-display-header">
          <div class="container">        
              <h1 class="data-display">[@templateTitle] VIEW</h1>
          </div>
      </div>

     <div class="container data-display-content ">     
         <h2 class="">Latest [@templateTitle] data</h2>
			<div class="table-responsive">
		<table id="[@templateTitle]-data-table">
         </table>
		 </div>
      </div>
      
      <div class="container-fluid data-display-footer">
          <div class="container">
              <a class="btn btn-default" href="index.php" role="button">Back to dashboard</a>
            <a class="btn btn-default" href="[@templateTitle]-report.php" role="button">Report [@templateTitle]</a>
          </div>
      </div>
      
      
    <!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>
    <!-- Include all compiled plugins (below), or include individual files as needed -->
    <script src="js/bootstrap.min.js"></script>
    <script src="js/[@templateTitle]-template.js"></script>
	  <script src="js/general-query.js"></script>
    <script type="text/javascript">
        // When the page is ready, load the data
        $( document ).ready(function() {
            getData(); // found in demand.js file
        });  
    </script>
  </body>
</html>