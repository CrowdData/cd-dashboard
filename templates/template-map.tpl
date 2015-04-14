<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>IITB Campus Map</title>

    <!-- Bootstrap -->
    <link href="css/bootstrap.min.css" rel="stylesheet">
    <link href="css/dashboard-general.css" rel="stylesheet">
    <link href="css/dashboard-home.css" rel="stylesheet">
      <link href="css/[@cssfilename].css" rel="stylesheet">

      
    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
    
    
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>
      <script src='js/leaflet.js'></script>
    <script src='js/general-map.js'></script>
    <script src='js/loadData.js'></script>
    <script src='js/general-query.js'></script>
      <script src='js/utilities.js'></script>
  <link href='css/leaflet.css' rel='stylesheet' />
   
<script src="js/Leaflet.MakiMarkers.js"></script>
    
 [@analytics]
    
    
  </head>
  <body onload="initialize()">
      <!-- should be included as PHP fixed menu, will be updated later -->
      [@menu]
      
      <div class="container-fluid data-display-header">
          <div class="container">        
              <h1 >Campus Map</h1>
         </div>
      </div>

     <div class="container data-display-content ">  
         <div><p> Use the layers selection box at the top right of the map to display different things on the map. Currently these include real-time TumTum locations, provided by the <a href="http://transittripplanner.co.in/VisitorInformationSystem/tumtum.html">TumTum Tracker system</a> and TumTum stop locations.  Tap on the pins on the map for more details, such as recently reported TumTum demand and incidents at each stop. </p>
          </div>   
   <div id='map' class='map' style="height: 725px;  width: inherit; padding: 2px; "> </div>
<script>
 
   
     var mbAttr = 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
             '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
             'Imagery  <a href="http://mapbox.com">Mapbox</a>',
         mbUrl = 'https://{s}.tiles.mapbox.com/v3/{id}/{z}/{x}/{y}.png';

     var streets = L.tileLayer(mbUrl, { id: 'sandy1401j.kkfo49n8', attribution: mbAttr });

     var map = L.map('map', {
         center: [19.132E0, 72.9151E0],
         zoom: 16,
         layers: [streets, BusLocations, BusStops]
     });

     var baseLayers = {
         
         "Streets": streets
     };

     var overlays = {
         "Bus Stops": BusStops,
         "TumTum Locations": BusLocations
     };

     L.control.layers(baseLayers, overlays).addTo(map);
</script>
          
      
         </div>
         
      
         
      </div>
            
      
    <!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->

    <!-- Include all compiled plugins (below), or include individual files as needed -->
    <script src="js/bootstrap.min.js"></script>
  </body>
</html>
