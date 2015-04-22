function init() {
    //quering old dataset need query for new based on what we need to display?
 var eventQuery ="PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\
PREFIX cde: <http://crowddata.abdn.ac.uk/def/events/>\
PREFIX tl: <http://purl.org/NET/c4dm/timeline.owl#>\
PREFIX event: <http://purl.org/NET/c4dm/event.owl#>\
PREFIX foaf: <http://xmlns.com/foaf/0.1/>\
PREFIX dcterms: <http://purl.org/dc/terms/>\
CONSTRUCT {\
?instance a cde:IITBEvent .\
?instance dcterms:title ?title .\
?instance dcterms:description ?description .\
?instance tl:beginsAtDateTime ?startTime .\
?instance tl:endsAtDateTime ?endTime .\
?instance foaf:name ?venue .\
?instance cde:hasTag ?tag .\
?instance cde:eventType ?eventType .\
?instance cde:department ?departmentLabel .\
?instance cde:more_info ?url .\
}\
FROM <http://crowddata.abdn.ac.uk/datasets/eventsv2/data/> \
FROM <http://crowddata.abdn.ac.uk/datasets/eventsv2/schema/> \
WHERE\
  {\
?instance a cde:IITBEvent .\
?instance dcterms:title ?title .\
?instance dcterms:description ?description .\
?instance event:time ?time .\
?instance event:place ?location .\
?time tl:beginsAtDateTime ?startTime .\
OPTIONAL{?time tl:endsAtDateTime ?endTime .}\
?location foaf:name ?venue .\
OPTIONAL{?instance cde:hasTag ?tag .}\
OPTIONAL{?instance cde:department ?department .?department rdfs:label ?departmentLabel .}\
OPTIONAL{?instance cde:more_info ?url .}\
?instance cde:eventType ?type .\
    ?type rdfs:label ?eventType .\
	\
  }\
";
//you can change handleTable for any other for display purposes    
queryConstruct(eventQuery,handleEventView);
			
}
var props = ["title",":eventType",":department" ,"hasTag", "beginsAtDateTime", "endsAtDateTime","name","description","more_info"];
var headers=["Title","Type(s)","Department", "Tag(s)", "Starts", "Ends","Venue","Description","Links"];
function handleEventView(dataResponse){
    handleConstructView(dataResponse,props,headers);
}