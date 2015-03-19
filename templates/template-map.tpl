<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>IITB View</title>

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
    
    
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>
      <script src='https://api.tiles.mapbox.com/mapbox.js/v2.1.4/mapbox.js'></script>
    <script src='js/general-map.js'></script>
    <script src='js/loadData.js'></script>
    <script src='js/general-query.js'></script>
  <link href='https://api.tiles.mapbox.com/mapbox.js/v2.1.4/mapbox.css' rel='stylesheet' />
    <link href='http://api.tiles.mapbox.com/v4/auto/' />
   <script src='https://api.tiles.mapbox.com/mapbox.js/plugins/leaflet-label/v0.2.1/leaflet.label.js'></script>
<link href='https://api.tiles.mapbox.com/mapbox.js/plugins/leaflet-label/v0.2.1/leaflet.label.css' rel='stylesheet' />
<script src="js/Leaflet.MakiMarkers.js"></script>
    
    
    
    
  </head>
  <body onload="getMap();">
      <!-- should be included as PHP fixed menu, will be updated later -->
     [@menu]
      
      <div class="container-fluid data-display-header">
          <div class="container">        
              <h1 >Campus Map</h1>
        
          </div>
      </div>

     <div class="container display-content ">     

   <div id='map-one' class='map' style="height: 725px;  width: inherit; padding: 2px; "> </div>
<script>
    L.mapbox.accessToken = 'pk.eyJ1Ijoic2FuZHkxNDAxaiIsImEiOiJQZm1jUDA0In0.46oeppB8hBZXx13FPXFGeg';
    map = L.mapbox.map('map-one', 'sandy1401j.kkfo49n8').setView([19.132E0, 72.9151E0], 16);
   

</script>
          
      
         </div>
         
      
         
      </div>
            
      
    <!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->

    <!-- Include all compiled plugins (below), or include individual files as needed -->
    <script src="js/bootstrap.min.js"></script>
  </body>
</html>