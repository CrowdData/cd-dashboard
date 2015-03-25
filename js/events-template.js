// All the code related to displaying (and getting) demand data.

// called when page loaded
function getData() {
 var eventQuery ="SELECT ?Event_Name  ?Date_Start  ?Date_End ?Department ?about ?Website \
                                                    WHERE\
                                                    { \
                                                     GRAPH <http://crowddata.abdn.ac.uk/datasets/events/data/> {\
                                                     ?resource <http://purl.org/dc/terms/dateStart> ?Date_Start ;\
														<http://purl.org/dc/terms/dateEnd> ?Date_End ;\
                                                        <http://purl.org/dc/terms/titleEvent> ?Department;\
                                                        <http://purl.org/dc/terms/title> ?Event_Name;\
														 <http://purl.org/dc/terms/abstract> ?about.\
														OPTIONAL{?resource <http://xmlns.com/foaf/0.1/homepage> ?Website.}\
                                                    }\
                                                    } ORDER BY ASC(?Date_Start)";
query(eventQuery,handleTable);
			
}
	
	function getTemplate(datasetID,loc){
	$('body').addClass('loading');
	holder.DATASET_ID=datasetID;
	getUniqueResourceForDataset(holder);
	console.log("Response:"+holder.RESPONSE);
	if(holder.RESPONSE==="failed"){
	alert("Failed get URI");
	}
	
	loadGraph(TemplateProvider.getTemplate(datasetID), holder.RESPONSE, loc, holder, "Submit new event" );
	
	};
	
	
	

function sendData(){
sendDataAll("events",holder);
}
	
     