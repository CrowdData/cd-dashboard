// All the code related to displaying (and getting) demand data.

// called when page loaded
function getData() {
$('body').addClass('loading');
 var demandQuery ="SELECT ?Location ?Demand ?Date \
                                                    WHERE\
                                                    { \
                                                     GRAPH <http://crowddata.abdn.ac.uk/datasets/demand/data/> {\
													?resource <http://purl.org/dc/terms/date> ?Date .\
											OPTIONAL { ?resource <http://xmlns.com/foaf/0.1/DemandPersonLocation> ?Demand }\
											OPTIONAL { ?resource <http://purl.org/dc/terms/Location> ?Location }\
                                                    }\
                                                    } ORDER BY DESC(?Date)";
query(demandQuery,handleTable);
			
}

	
	function getTemplate(datasetID,loc){
	$('body').addClass('loading');
	holder.DATASET_ID=datasetID;
	getUniqueResourceForDataset(holder);
	console.log("Response:"+holder.RESPONSE);
	if(holder.RESPONSE==="failed"){
	alert("Failed get URI");
	}
	
	loadGraph(TemplateProvider.getTemplate(datasetID), holder.RESPONSE, loc, holder,"Submit demand details" );
	};
	
	
	
	

function sendData(){
sendDataAll("demand",holder);
}
	
     