var days= ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
function getDemand(name, content, marker) {
          marker.bindPopup("Loading information...");
            marker.openPopup();
       var demandQuery ="SELECT  ?Demand ?Date \
                                                    WHERE\
                                                    { \
                                                     GRAPH <http://crowddata.abdn.ac.uk/datasets/demandv2/data/> {\
													?resource dcterms:date ?Date .\
											?resource <http://crowddata.abdn.ac.uk/def/demand/demandLevel> ?Demand .\
											 ?resource <http://crowddata.abdn.ac.uk/def/demand/hasLocationLabel> '"+name+"'\
                                                    }\
                                                    } ORDER BY DESC(?Date)";

        console.log(demandQuery);
        $.ajax({
            dataType: "jsonp",
            url: "http://crowddata.abdn.ac.uk/query/sparql?callback=?&output=json&query=" + escape(prefixes+demandQuery),
            success: function (data) {
                var bindings = data.results.bindings;
        if(data.results.bindings[0]){ content+="<b>Latest Demand</b><br>";}
                for (var i in bindings) {
                    var demandData = data.results.bindings[i];
                    var date=parseXSDDateString(demandData["Date"]["value"]);
                    content +="Number of passengers: <b>"+demandData["Demand"]["value"] + '</b> on '+days[date.getDay()]+ ' at ' + date.toLocaleTimeString() + '<br/>';

                }

                getDisrupt(name, content, marker);


            }
        }
                );
    }
    function getDisrupt(name, content, marker) {
    //    var disruptQuery = "http://crowddata.abdn.ac.uk/query/sparql?callback=?&format=json&query=SELECT * WHERE { GRAPH <http://crowddata.abdn.ac.uk/datasets/disruption/data/> { ?resource //<http://purl.org/dc/terms/date> ?Occurence_At ; <http://purl.org/dc/terms/title> ?Disruption_Description ; <http://www.w3.org/2003/01/geo> '" + name + "'. OPTIONAL{?resource <http://xmlns.com/foaf/0.1/depiction> //Picture_link.}} } ORDER BY DESC(?Occurence_At) LIMIT 3";
        
        
var disruptQuery="PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\
PREFIX cdi: <http://crowddata.abdn.ac.uk/def/incidents/>\
PREFIX tl: <http://purl.org/NET/c4dm/timeline.owl#>\
PREFIX event: <http://purl.org/NET/c4dm/event.owl#>\
PREFIX dcterms: <http://purl.org/dc/terms/>\
    SELECT ?startTime ?endTime ?title ?description ?statusLabel ?type  WHERE\
  { GRAPH <http://crowddata.abdn.ac.uk/datasets/incidents/data/>\
      { ?instance <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> cdi:Incident .\
        ?instance dcterms:title ?title .\
        ?instance dcterms:description ?description .\
        ?instance cdi:incidentType ?typeUri .\
        ?instance event:time ?time .\
        ?instance cdi:hasStatus ?status.\
        ?instance event:place ?location .\
        ?location foaf:name ?locationName.\
        ?time tl:beginsAtDateTime ?startTime .\
       OPTIONAL{ ?time tl:endsAtDateTime ?endTime .}\
      ?location cdi:nearStopName '"+name+"' .\
      }\
GRAPH <http://crowddata.abdn.ac.uk/datasets/incidents/schema/>{\
    ?typeUri rdfs:label ?type .\
    ?status rdfs:label ?statusLabel .}\
  }ORDER BY DESC(?startTime) LIMIT 3";
        
     
        console.log(disruptQuery);
        $.ajax({
            dataType: "jsonp",
            url: "http://crowddata.abdn.ac.uk/query/sparql?callback=?&output=json&query=" + escape(prefixes+disruptQuery),
            success: function (data) {
                var bindings = data.results.bindings;
                if(data.results.bindings[0]){ content+="<h5>Latest Incidents Near this stop</h5><br>";}
                for (var i in bindings) {
                    var disruptData = data.results.bindings[i];
                     var start=parseXSDDateString(disruptData.startTime.value);
                    content+="<b>"+disruptData.title.value+"</b><br>";
                    content+="<b>Type</b>: "+disruptData.type.value+"<br>";
                    content+="<b>Status</b>: "+disruptData.statusLabel.value+"<br>";     
                    content+="<b>Begins</b>: "+start.toLocaleDateString()+" at " +start.toLocaleTimeString()+"<br>";
                    if(disruptData.endTime){
                    var end=parseXSDDateString(disruptData.endTime.value);
                    content+="<b>Ends: </b>"+end.toLocaleDateString()+" at " +end.toLocaleTimeString()+"<br>";
                    }
                    content+="<b>Details: </b>"+disruptData.description.value+"<br>";
                    content+="<hr/>";
                    
                }
                if (content == [])
                    content = "No information provided for this stop.";
                marker.bindPopup(content);
               marker.openPopup();

            }
        });
        
    }