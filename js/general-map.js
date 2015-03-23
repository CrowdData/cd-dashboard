//global variable 
var BusStops = new L.LayerGroup();
var BusLocations = new L.LayerGroup();
var map;
var marks={};
var locate = [];
var buses = {};
 var example = "SELECT ?name ?lat ?long \
                                                                       WHERE\
                                                                       { \
                                                                       ?stop a naptan:BusStop ; \
                                                                       dc:identifier ?name; \
                                                                       geo:lat ?lat; \
                                                                       geo:long ?long .\
                                                                       }";
var prefixes = "PREFIX dc: <http://purl.org/dc/elements/1.1/>\
                                                                       PREFIX db: <http://crowddata.abdn.ac.uk:8080/d2rq/resource>\
                                                                       PREFIX geo: <http://www.w3.org/2003/01/geo/wgs84_pos#>\
                                                                       PREFIX meta: <http://www4.wiwiss.fu-berlin.de/bizer/d2r-server/metadata#>\
                                                                       PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\
                                                                       PREFIX time: <http://www.w3.org/TR/owl-time/>\
                                                                       PREFIX naptan: <http://transport.data.gov.uk/def/naptan/>\
                                                                       PREFIX d2r: <http://sites.wiwiss.fu-berlin.de/suhl/bizer/d2r-server/config.rdf#>\
                                                                       PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\
                                                                       PREFIX map: <http://crowddata.abdn.ac.uk:8080/d2rq/resource/#>\
                                                                       PREFIX owl: <http://www.w3.org/2002/07/owl#>\
                                                                       PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>\
                                                                       PREFIX vocab: <http://crowddata.abdn.ac.uk:8080/d2rq/resource/vocab/>\
                                                                       PREFIX cd: <http://crowddata.abdn.ac.uk/vocab/0.1/>\ ";
function initialize() {
    getMap();
    getLocations();
   

   
   
}
function getMap() {

        var queryUrl = "http://crowddata.abdn.ac.uk/d2rq/sparql?callback=?&format=json&query=" + escape(prefixes + example);
        console.log(queryUrl);

        $.ajax({
            dataType: "jsonp",
            url: queryUrl,
            success: function (data) {
                var bindings = data.results.bindings;
                for (var i in bindings) {
                    var schoolData = data.results.bindings[i];

                    var lat = schoolData["lat"]["value"];
                    var long = schoolData["long"]["value"];
                    var name = schoolData["name"]["value"];
                    
                    var n = name.search("_D");

                    if (n == -1) {
                        locate.push({
                        "Latitute": lat,
                        "Longitude": long,
                        "Name": name
                    });
                        var icon = L.MakiMarkers.icon({ icon: "bus", color: "00C5CD", size: "m" });
                        var marker = new L.marker([lat, long], { icon: icon })
                                .on('click', function e() {

                                    var contentD = "";

                                    var m = this.getLatLng();
                                    var result = findIndexByKeyValue(locate, "Latitute", "Longitude", m.lat, m.lng)

                                    var check = locate[result]["Name"];
                                    if (check == "SOM_&_IRCC")
                                        check = "SOM_IRCC";
                                    getDemand(check, contentD, this);



                                });
                        marks[name] = marker;
                   
                        marker.addTo(BusStops);

                    }
                }

                  if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                function(position) {
               console.log("Location position success");
			   UserLocation(position);
                },
                function() {
                 alert("Could not retrieve your location, make sure your GPS location sharing is enabled");
                }, {
                    enableHighAccuracy: true,
                    timeout: 30000, 
                    maximumAge: 30000
                });
        } else {
           alert("We apologise, but it seems your browser does not support location sharing");
        }


            }
        });

    }
    function findIndexByKeyValue(obj, key1, key2, value1, value2) {
        for (var i = 0; i < obj.length; i++) {
            if ((obj[i][key1] == value1) && (obj[i][key2] == value2)) {
                return i;
            }
        }
        return null;
    }
	
	// Callback function for asynchronous call to HTML5 geolocation
    function UserLocation( position )
    {
		console.log("Retrieved position ...Calculating nearest stop");
        NearestStop( position.coords.latitude, position.coords.longitude,locate );
    }


    // Convert Degress to Radians
    function Deg2Rad( deg ) {
       return deg * Math.PI / 180;
    }

    function PythagorasEquirectangular( lat1, lon1, lat2, lon2 )
    {
    lat1 = Deg2Rad(lat1);
    lat2 = Deg2Rad(lat2);
    lon1 = Deg2Rad(lon1);
    lon2 = Deg2Rad(lon2);
    var R = 6371; // km
    var x = (lon2-lon1) * Math.cos((lat1+lat2)/2);
    var y = (lat2-lat1);
    var d = Math.sqrt(x*x + y*y) * R;
    return d;
    }



    function NearestStop( latitude, longitude ,cities)
    {
	var icon = L.MakiMarkers.icon({icon: "star-stroked", color: "#b0b", size: "m"});
        L.marker([latitude,longitude],{icon: icon}).on('click', function e() {

                                    this.bindPopup("<b>This is your approximate position</b>");
									this.openPopup();


                                }).addTo(map);
        var mindif=99999;
        var closest;

        for (index = 0; index < cities.length; ++index) {
            var dif =  PythagorasEquirectangular( latitude, longitude, cities[ index ][ "Latitute"], cities[ index ][ "Longitude" ] );
            if ( dif < mindif )
            {
                closest=index;
                mindif = dif;
            }
        }

        // echo the nearest city
      var name= cities[ closest ]["Name"];
  
      if (name=="SOM_&_IRCC") {
       name="SOM_IRCC";
      }

	  console.log("Getting demand and disruption for bus stop...:" );
        getDemand(name, "<b>NEAREST STOP TO YOU</b><br>",marks[name] );
    }
    var url = 'proxyCheck.php?url=http%3A%2F%2Ftransittripplanner.co.in%2FVIS_2%2Ftrack&full_headers=1&full_status=1';
    
    function getLocations() {
     //   map.removeLayer(BusLocations)
     BusLocations.clearLayers();
        $.ajax({
            url: url,
            success: function (data) {
                var MainData = data["contents"].toString().split("$", 2);
                //MainData[1] represents active bus number
                var buses = MainData[0].split("#", MainData[1]);
                var markers = [];
                for (var i in buses) {
                    var details = buses[i].split(",", 5)
                    var nextStop = details[4].split(":", 2)
                    markers.push({
                        "latitude": details[2],
                        "longitude": details[3],
                        "Route_No": details[0],
                        "Next_Stop": nextStop[1]

                    });
                }
                for (var i in markers)
                    createMarkerandLoad(markers[i]);
                
                t = setTimeout("getLocations()", 3000);
                
            },
            
            error: function (xhr, textStatus, errorThrown) {
              // sometimes it display error had to comment this out. 
			  //			  alert("Error:" + textStatus); alert("Error" + errorThrown);
            }
        });
    }
    function createMarkerandLoad(markers) {
        var icon = L.MakiMarkers.icon({ icon: "square", color: "FF6600", size: "m" });
        var marker = new L.marker([markers["latitude"], markers["longitude"]], { icon: icon })
                                .on('click', function e() {
                                    var myHtml = "<b>Route No:</b>" + markers["Route_No"] + "<br /><b>Next Stop:</b>" + markers["Next_Stop"];
                                    marker.bindPopup(myHtml);
                                    marker.openPopup();
                                }).addTo(BusLocations);
                              //  map.addLayer(BusLocations) not needed
                                return marker;
       

    }
	