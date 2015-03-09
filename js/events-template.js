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
                                                    } ORDER BY DESC(?Date_Start)";
var tableID="#events-data-table";
query(eventQuery,tableID);
			
}

function holderObject(){
	this.EXPERIMENT;
	this.GRAPH;
	this.RESPONSE;
	this.DATASET_ID="events";
	}
	
	var holder=new holderObject();
	
	function getTemplate(datasetID,loc){
	holder.DATASET_ID=datasetID;
	getUniqueResourceForDataset(holder);
	console.log("Response:"+holder.RESPONSE);
	if(holder.RESPONSE==="failed"){
	alert("Failed get URI");
	}
	
	loadGraph(TemplateProvider.getTemplate(datasetID), holder.RESPONSE, loc, holder );
	addButton(loc);
	};
	
	
	
	
	
	function addButton(location) {
    //Create an input type dynamically.   
    var element = document.createElement("button");
		element.innerHTML="Submit new Event";
		element.className="btn btn-default hidden";
		element.id="templateButton";
    element.onclick = sendData;
	
    var foo = document.getElementById(location);
    foo.appendChild(element);
}
function sendData(){
sendDataAll("events",holder);
}
	
     