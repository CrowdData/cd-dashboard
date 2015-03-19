// All the code related to displaying (and getting) demand data.

// called when page loaded
function getData() {
 var disruptionQuery ="SELECT  ?Disruption_Description  ?Near_Bus_Stop ?Occurence_At ?Picture_link \
                                                    WHERE\
                                                    { \
                                                     GRAPH <http://crowddata.abdn.ac.uk/datasets/disruption/data/> {\
                                                     ?resource <http://purl.org/dc/terms/date> ?Occurence_At ;\
														<http://purl.org/dc/terms/title> ?Disruption_Description ;\
														<http://www.w3.org/2003/01/geo> ?Near_Bus_Stop .\
														OPTIONAL{?resource <http://xmlns.com/foaf/0.1/depiction> ?Picture_link.}\
                                                    }\
                                                    } ORDER BY DESC(?Occurence_At)";
query(disruptionQuery,handleTable);
			
}

	
	function getTemplate(datasetID,loc){
	holder.DATASET_ID=datasetID;
	getUniqueResourceForDataset(holder);
	console.log("Response:"+holder.RESPONSE);
	if(holder.RESPONSE==="failed"){
	alert("Failed get URI");
	}
	
	loadGraph(TemplateProvider.getTemplate(datasetID), holder.RESPONSE, loc, holder );
	addButton(loc,"Submit report");
	};
	
	
	

function sendData(){
sendDataAll("disruption",holder);
}
	
     