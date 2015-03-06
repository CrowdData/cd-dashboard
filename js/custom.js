
//assings to holder.RESPONSE resourceURI or failed string
function  getUniqueResourceForDataset(holder){
var queryUrl="http://crowddata.abdn.ac.uk:8080/crowddata/1/tools/generate/id?ds="+holder.DATASET_ID;
console.log(queryUrl);
 		$.ajax({
  			type: "GET",
  			async:false,    
			url:queryUrl,
  			success:function(data) {    
				
			console.log("Response for resource"+JSON.stringify(data));
			holder.RESPONSE=data.id;
  			},
 			error: function(xhr,textStatus, errorThrown) { 
        			alert("Error:"+xhr.responseText);   //should give you json error
					console.log(xhr.responseText);
					holder.RESPONSE="failed";
					
    			}
		});

}

function postRDFJSON(rdfjson,datasetID)
{
var message="OK";
var queryUri="http://crowddata.abdn.ac.uk:8080/crowddata/1/tools/upload.rdfjson?ds="+datasetID;
$.ajax({
   url: queryUri,
  type: "POST",
  data: JSON.stringify(rdfjson),   
  async:false,  
  contentType: 'application/rdf+json',
  success:function(data) {    
  console.log(JSON.stringify(data));
  },
 error: function(XMLError) { 
 message=XMLError.responseText;

    }
});
return message;
};

function sendDataAll(page,holder){
console.log(JSON.stringify(holder.EXPERIMENT.graph.exportRDFJSON()));
var rdfjson=holder.EXPERIMENT.graph.exportRDFJSON();
var message=postRDFJSON(rdfjson,holder.DATASET_ID);
if(message.match("OK")){
alert("Thank you for your contribution");
document.location.href="/dashboard/"+page+"-view.php";
}
else {
alert("Check your input before sending this data.");
}
}


function  loadGraph(templateSrc, resourceURI, locationToLoad, holder){

    require([
        'rdforms/apps/Experiment',        //The editor User interface
        'rdforms/model/system',
		 'rdfjson/Graph',    
        'dojo/dom-attr',
        'dojo/domReady!'             //Wait until the dom is ready.
            ], function (Experiment, system, Graph, domAttr) {
			
                holder.EXPERIMENT = new Experiment({ templateObj: templateSrc, resource:resourceURI, hideTemplate: true }, locationToLoad);
                holder.EXPERIMENT.startup();

     });
};



