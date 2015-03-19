//holder
function holderObject(){
	this.EXPERIMENT;
	this.GRAPH;
	this.RESPONSE;
	this.DATASET_ID="";
	this.templateID;
	this.templateRoot;
	this.report;
	}
	
	var holder=new holderObject();

//assings to holder.RESPONSE resourceURI or failed string
function  getUniqueResourceForDataset(holder){
var queryUrl="http://crowddata.abdn.ac.uk/crowddata/1/tools/generate/id?callback=jsonp12345&ds="+holder.DATASET_ID;
console.log(queryUrl);
 		$.ajax({
  			datatype:"jsonp",
  			async:false,    
			url:queryUrl,
  			success:function(data) {    
				
			console.log("Response for resource"+JSON.stringify(data));
			holder.RESPONSE=data.id;
  			},
 			error: function(xhr) {
				console.log(xhr);
				if (xhr.statusText) {
					if (xhr.statusText.indexOf("NetworkError")!=-1) {
						alert("FATAL ERROR!It seems you have issue with your internet connection.<br>This may be caused if your browser don't have proxy set.");
						holder.RESPONSE="failed";
					}
				}
				else{
					console.log("system response error:"+xhr.responseText);
					holder.RESPONSE="failed";
				}
					
    			}
		});

}

questionID=null;
function assignQuestionID(id){
questionID=id;
}

function postRDFJSON(rdfjson,datasetID,resourceURI)
{
var header={"resourceURI":resourceURI};
console.log("Question ID before send:"+questionID);
if(questionID){
//alert("questionID exist before sending");
 header={"resourceURI":resourceURI,"questionURI":questionID};
}
var message="OK";
var queryUri="http://crowddata.abdn.ac.uk/crowddata/1/tools/upload.rdfjson?ds="+datasetID;
$.ajax({
   url: queryUri,
  type: "POST",
  headers:header,   //questionID quickHack.
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


function isComplete(holder){
if (holder.report.errors.length>0) {
$('.rformsLabel').each(function(i){
		
	this.style.color="black";	
		
		
	});
	var labels="";
	for (index = 0; index < holder.report.errors.length; ++index) {
		var label=holder.report.errors[index].item._source.label.en;
	labels+=label+"\n";
	
	
	$('.rformsLabel').each(function(i) {
	if (label.match(this.innerText)) {
		this.style.color="red";
		console.log("changed color for"+label);
	}
	
});
	
	
}
return false;
}
return true;
}

function sendDataAll(page,holder){
console.log(JSON.stringify(holder.EXPERIMENT.graph.exportRDFJSON()));
var rdfjson=holder.EXPERIMENT.graph.exportRDFJSON();

checkCardinality(holder);
if (!isComplete(holder)) {
alert("Please note, following fields are still required to be filled in: \n"+labels);
}

else{
var message=postRDFJSON(rdfjson,holder.DATASET_ID,holder.RESPONSE);
if(message.match("OK")){
alert("Thank you for your contribution");
document.location.href="/dashboard/"+page+"-view.php";
}
else {
	console.log("Error"+message);
	if (message.indexOf("IllegalArgumentException")!=-1) {
		alert("The form cannot be empty.");
	}
	else if(message.indexOf("RiotException")!=-1){
alert("Please make sure your links start with http:// prefix\n http://www.iitb.abdn.ac.uk");
	}
	else{
		alert("Thank you for your contribution.");
		document.location.href="/dashboard/"+page+"-view.php";
	}
}
}
}

function showError(error,message) {
	console.log("showErrorTriggered"+message);
	$(document).trigger("add-alerts", [
    {
      'message': "Some error",
      'priority': 'warning'
    }
  ]);
}

function  loadGraph(templateSrc, resourceURI, locationToLoad, holder){


if (resourceURI.indexOf("failed")!=-1) {
	$('#loading').addClass('hidden');
	$('#errorDiv').append("Unable to load form.Check your connection.");
	$('#errorDiv').removeClass('hidden');
	return;
	
}

    require([
        'rdforms/apps/Experiment',        //The editor User interface
        'rdforms/model/system',
		 'rdfjson/Graph',
		  'rdforms/model/Engine',
		 'rdforms/template/ItemStore',
        'dojo/dom-attr',
        'dojo/domReady!'             //Wait until the dom is ready.
            ], function (Experiment, system, Graph, Engine,ItemStore,domAttr) {
			
			
                holder.EXPERIMENT = new Experiment({ templateObj: templateSrc, resource:resourceURI, hideTemplate: true }, locationToLoad);
                holder.EXPERIMENT.startup();
		$('#loading').addClass('hidden');
		$('#templateButton').removeClass('hidden');
		$('#mandatoryDiv').removeClass('hidden');
		$('#editorDiv').removeClass('hidden');
		holder.template=holder.EXPERIMENT.template;
			var itemStore=new ItemStore();
			 var bundle = itemStore.registerBundle({source: templateSrc});
			 holder.templateRoot=bundle.getRoot();

     });
};

function checkCardinality(holder){

 require([
		 'rdforms/model/Engine',    
        'dojo/dom-attr',
        'dojo/domReady!'             //Wait until the dom is ready.
            ], function (Engine) {

			var rootBinding = Engine.match(holder.EXPERIMENT.graph,holder.RESPONSE,holder.templateRoot);
			console.log("Engine match");
			holder.report= rootBinding.report();			
	
     });

}

	
	function addButton(location,innerHtml) {
    //Create an input type dynamically.   
    var element = document.createElement("button");
		element.innerHTML=innerHtml;
		element.className="btn btn-default hidden";
		element.id="templateButton";
    element.onclick = sendData;
	
    var foo = document.getElementById(location);
    foo.appendChild(element);
}




