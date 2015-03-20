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
query(feedbackQuery,handleTable);
			
}

	
	function getTemplate(datasetID,loc){
	holder.DATASET_ID=datasetID;
	getUniqueResourceForDataset(holder);
	console.log("Response:"+holder.RESPONSE);
	if(holder.RESPONSE==="failed"){
	alert("Failed get URI");
	}
	
	loadGraph(TemplateProvider.getTemplate(datasetID), holder.RESPONSE, loc, holder,"Submit new feedback" );
	};
	
	
	
	
function sendData(){
sendDataAll("feedback",holder);
}
	
     