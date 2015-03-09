// All the code related to displaying (and getting) demand data.

// called when page loaded
function getData() {
 var demandQuery ="SELECT ?Location ?Demand ?Date \
                                                    WHERE\
                                                    { \
                                                     GRAPH <http://crowddata.abdn.ac.uk/datasets/demand/data/> {\
													?resource <http://purl.org/dc/terms/date> ?Date .\
											OPTIONAL { ?resource <http://xmlns.com/foaf/0.1/DemandPersonLocation> ?Demand }\
											OPTIONAL { ?resource <http://purl.org/dc/terms/Location> ?Location }\
                                                    }\
                                                    } ORDER BY DESC(?Date)";
var tableID="#demand-data-table";
query(demandQuery,tableID);
			
}

function holderObject(){
	this.EXPERIMENT;
	this.GRAPH;
	this.RESPONSE;
	this.DATASET_ID="demand";
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
		element.innerHTML="Submit Demand";
		element.className="btn btn-default hidden";
		element.id="templateButton";
    element.onclick = sendData;
	
    var foo = document.getElementById(location);
    foo.appendChild(element);
}
function sendData(){
sendDataAll("demand",holder);
}
	
     