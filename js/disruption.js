function init() {
 var disruptionQuery ="PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\
PREFIX cdi: <http://crowddata.abdn.ac.uk/def/incidents/>\
PREFIX tl: <http://purl.org/NET/c4dm/timeline.owl#>\
PREFIX event: <http://purl.org/NET/c4dm/event.owl#>\
PREFIX dcterms: <http://purl.org/dc/terms/>\
CONSTRUCT {\
?instance a cdi:Incident .\
?instance dcterms:title ?title .\
?instance dcterms:description ?description .\
?instance rdfs:label ?type .\
?instance cdi:nearStopName ?nearStop .\
?instance event:time ?time .\
?instance tl:beginsAtDateTime ?startTime .\
?instance tl:endsAtDateTime ?endTime .\
?instance foaf:name ?locationName .\
}\
WHERE\
  { GRAPH <http://crowddata.abdn.ac.uk/datasets/incidents/data/>\
      { ?instance <http://www.w3.org/1999/02/22-rdf-syntax-ns#type> cdi:Incident .\
        ?instance dcterms:title ?title .\
        ?instance dcterms:description ?description .\
        ?instance cdi:incidentType ?typeUri .\
        ?instance event:time ?time .\
        ?instance event:place ?location .\
        ?location foaf:name ?locationName.\
        ?time tl:beginsAtDateTime ?startTime .\
        ?time tl:endsAtDateTime ?endTime .\
        ?location cdi:nearStopName ?nearStop .\
      }\
GRAPH <http://crowddata.abdn.ac.uk/datasets/incidents/schema/>{\
    ?typeUri rdfs:label ?type .}\
  }";

queryConstruct(disruptionQuery,handleIncidentView);
			
}



//var props = ["id","hasTag" ];
var props = ["rdfs:label", "title", "description", "beginsAtDateTime", "endsAtDateTime","name", "nearStopName"];
var headers=["Type of incident", "Title","Description", "Start Time", "End Time","Location description", "Affected Stops"];


function handleIncidentView(dataResponse){
    	handleConstructView(dataResponse,props,headers);
}

    

         
     