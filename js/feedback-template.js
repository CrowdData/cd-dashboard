// All the code related to displaying (and getting) demand data.

// called when page loaded
function getData() {
 var feedbackQuery ="SELECT    ?Feedback_Provider ?Feedback \
                                                    WHERE\
                                                    { \
                                                     GRAPH <http://crowddata.abdn.ac.uk/datasets/feedback/data/> {\
                                                     ?resource <http://purl.org/dc/terms/abstract> ?Feedback ;\
							<http://purl.org/dc/terms/creator> ?Feedback_Provider .\
                                                    }\
                                                    } ";
var tableID="#feedback-data-table";
query(feedbackQuery,tableID);
			
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
		element.innerHTML="Submit Feedback";
		element.className="btn btn-default hidden";
		element.id="templateButton";
    element.onclick = sendData;
	
    var foo = document.getElementById(location);
    foo.appendChild(element);
}
function sendData(){
sendDataAll("feedback",holder);
}
	
     