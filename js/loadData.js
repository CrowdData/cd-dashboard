var days= ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
function getDemand(name, content, marker) {
          marker.bindPopup("Loading information...");
            marker.openPopup();
        var demandQuery = "http://crowddata.abdn.ac.uk/query/sparql?callback=?&format=json&query= SELECT ?Location ?Demand ?Date \
                                                    WHERE\
                                                    { \
                                                     GRAPH <http://crowddata.abdn.ac.uk/datasets/demand/data/> {\
                                                    ?resource <http://purl.org/dc/terms/date> ?Date .\
                                             { ?resource <http://xmlns.com/foaf/0.1/DemandPersonLocation> ?Demand }\
                                            { ?resource <http://purl.org/dc/terms/Location> '" + name + "' }\
                                                    }\
                                                    } ORDER BY DESC(?Date) LIMIT 3";

        console.log(demandQuery);
        $.ajax({
            dataType: "jsonp",
            url: demandQuery,
            success: function (data) {
                var bindings = data.results.bindings;
        if(data.results.bindings[0]){ content+="<b>Latest Demand</b><br>";}
                for (var i in bindings) {
                    var demandData = data.results.bindings[i];
                    var date=parseXSDDateString(demandData["Date"]["value"]);
                    content +="Status: <b>"+demandData["Demand"]["value"] + '</b> on '+days[date.getDay()]+ ' at ' + date.toLocaleTimeString() + '<br/>';

                }

                getDisrupt(name, content, marker);


            }
        }
                );
    }
    function getDisrupt(name, content, marker) {
        var disruptQuery = "http://crowddata.abdn.ac.uk/query/sparql?callback=?&format=json&query=SELECT * WHERE { GRAPH <http://crowddata.abdn.ac.uk/datasets/disruption/data/> { ?resource <http://purl.org/dc/terms/date> ?Occurence_At ; <http://purl.org/dc/terms/title> ?Disruption_Description ; <http://www.w3.org/2003/01/geo> '" + name + "'. OPTIONAL{?resource <http://xmlns.com/foaf/0.1/depiction> ?Picture_link.}} } ORDER BY DESC(?Occurence_At) LIMIT 3";
     
        console.log(disruptQuery);
        $.ajax({
            dataType: "jsonp",
            url: disruptQuery,
            success: function (data) {
                var bindings = data.results.bindings;
                if(data.results.bindings[0]){ content+="<b>Latest Disruption Information</b><br>";}
                for (var i in bindings) {
                    var disruptData = data.results.bindings[i];
                     var date=parseXSDDateString(disruptData["Occurence_At"]["value"]);
                    content +=disruptData["Disruption_Description"]["value"] + ' <br>Happened: <b>' + date.toLocaleDateString()+'</b> at <b>'+ date.toLocaleTimeString()+"</b>";
                    if (disruptData["Picture_link"]) {
                      content+= ', <br/> <img height=100 width=100 src =' + disruptData["Picture_link"]["value"] + ' /> <br/ >';
                    }
                }
                if (content == [])
                    content = "No information provided for this stop.";
                marker.bindPopup(content);
                marker.openPopup();

            }
        });
        
    }