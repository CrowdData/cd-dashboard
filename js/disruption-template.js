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
var tableID="#disruption-data-table";
query(disruptionQuery,tableID);
			
}

function holderObject(){
	this.EXPERIMENT;
	this.GRAPH;
	this.RESPONSE;
	this.DATASET_ID="";
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
		element.innerHTML="Submit report";
		element.className="btn btn-default hidden";
		element.id="templateButton";
    element.onclick = sendData;
	
    var foo = document.getElementById(location);
    foo.appendChild(element);
}
function sendData(){
sendDataAll("disruption",holder);
}
	
     