
//holder
function holderObject(){
	this.EDITOR;
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

function postRDFJSON(rdfjson,datasetID,resourceURI,successFunction,errorFunction)
{
var header={"resourceURI":resourceURI};
console.log("Question ID before send:"+questionID);
if(questionID){
//alert("questionID exist before sending");
 header={"resourceURI":resourceURI,"questionURI":questionID};
}
var queryUri="http://crowddata.abdn.ac.uk/crowddata/1/tools/upload.rdfjson?callback=json1234&ds="+datasetID;
$.ajax({
   url: queryUri,
  type: "POST",
  headers:header,   //questionID quickHack.
  data: JSON.stringify(rdfjson),     
  contentType: 'application/rdf+json',
  success:function(data) {    
  successFunction(data);
  },
 error: function(XMLError) { 
 errorFunction(XMLError);

    }
});
};

var labels="";
function isComplete(holder){
labels="";
if (holder.report.errors.length>0) {
$('.rformsLabel').each(function(i){
		
	this.style.color="black";	
		
		
	});
	
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
$('body').addClass('loading'); //loading
console.log(JSON.stringify(holder.EDITOR.graph.exportRDFJSON()));
var rdfjson=holder.EDITOR.graph.exportRDFJSON();

checkCardinality(holder);
if (!isComplete(holder)) {
$('body').removeClass('loading');
alert("Please note, fields highlighted in red are required : \n"+labels);
}

else{
postRDFJSON(rdfjson,holder.DATASET_ID,holder.RESPONSE,function(success){
$('body').removeClass('loading');
alert("Thank you for your contribution.");
document.location.href="/dashboard/"+page+"-view.php";
},function(error){
$('body').removeClass('loading');
isComplete(holder);
alert("We apologise, but something went wrong when saving your data: Network connection?");
});


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

function  loadGraph(templateSrc, resourceURI, locationToLoad, holder, buttonString){


if (resourceURI.indexOf("failed")!=-1) {
	$('body').removeClass('loading');
	$('#errorDiv').append("Unable to load form.Check your connection.");
	$('#errorDiv').removeClass('hidden');
	return;
	
}

    require([
        'rdforms/view/Editor',
		'rdforms/apps/Experiment',        //The editor User interface
        'rdforms/model/system',
		 'rdfjson/Graph',
		  'rdforms/model/Engine',
		 'rdforms/template/ItemStore',
        'dojo/dom-attr',
        'dojo/domReady!'             //Wait until the dom is ready.
            ], function (Editor,Experiment, system, Graph, Engine,ItemStore,domAttr) {
			
		holder.GRAPH=new Graph();	
             //   holder.EXPERIMENT = new Experiment({ graph:holder.GRAPH,templateObj: templateSrc, resource:resourceURI, hideTemplate: true }, locationToLoad);
              //  holder.EXPERIMENT.startup();
		$('#loading').addClass('hidden');
		
	
	//	$('#editorDiv').removeClass('hidden');
	//	holder.template=holder.EXPERIMENT.template;
	
	//$('#onlyrdform').append($("#dijit__Widget_0").css('height','auto'));
$('#mandatoryDiv').removeClass('hidden');
	var itemStore=new ItemStore();
			 var bundle = itemStore.registerBundle({source: templateSrc});
			 holder.templateRoot=bundle.getRoot();
	console.log("Creating editor");
	holder.EDITOR=new Editor({
            graph: holder.GRAPH,
            resource: resourceURI,
            template: holder.templateRoot,
            compact: false
        }, "onlyrdform");  
	applyStyling();	
	console.log("Editor should be created");
	
	addButton(buttonString);
	$('#templateButton').removeClass('hidden');
	$('body').removeClass('loading');
	
			

     });
};

function applyStyling() {
	$( ".rformsTopLevel.rformsRow" ).addClass( "row" );
	$( ".rformsLabelRow" ).addClass( "row col-sm-12 " );
	$( ".rformsFields" ).addClass( "row col-sm-12 " );
	//$( ".rformsRow" ).addClass( "row" );
	$(".rformsFieldControl").addClass("col sm-1");
//	$(".rformsFieldControl").addClass("col sm-10");
	
	
	$(".rformsEditor.compact").removeClass('compact');
	$("#onlyrdform").css('height','auto');
	
	
}
function  reset(){


    require([
        'rdforms/apps/Experiment',        //The editor User interface
        'rdforms/model/system',
		 'rdfjson/Graph',
		  'rdforms/model/Engine',
		 'rdforms/template/ItemStore',
        'dojo/dom-attr',
        'dojo/domReady!'             //Wait until the dom is ready.
            ], function (Experiment, system, Graph, Engine,ItemStore,domAttr) {
			/*
	
                holder.EXPERIMENT.graph=holder.GRAPH;
		holder.EXPERIMENT._rdfTab.setGraph(holder.GRAPH);
	
		holder.EXPERIMENT.resource=holder.RESPONSE;
		holder.EXPERIMENT._updateGraph();
               holder.EXPERIMENT._initEditor();
	
		applyStyling();
	*/
		holder.GRAPH=new Graph();	
		getUniqueResourceForDataset(holder);
		console.log("RESET URI"+holder.RESPONSE);
	holder.EDITOR.show({template: holder.templateRoot, graph: holder.GRAPH, resource: holder.RESPONSE});
	applyStyling();
	addButton("Submit response");
	$('#templateButton').removeClass('hidden');

     });
};

function checkCardinality(holder){

 require([
		 'rdforms/model/Engine',    
        'dojo/dom-attr',
        'dojo/domReady!'             //Wait until the dom is ready.
            ], function (Engine) {

			var rootBinding = Engine.match(holder.EDITOR.graph,holder.RESPONSE,holder.templateRoot);
			console.log("Engine match");
			holder.report= rootBinding.report();			
	
     });

}

	
	function addButton(buttonString) {
    //Create an input type dynamically.   
    var element = document.createElement("button");
		element.innerHTML=buttonString;
		element.className="btn btn-default row";
		element.id="templateButton";
    element.onclick = sendData;
    element.style.marginTop="1em";
    element.style.marginBottom="1em";
	
    var foo = document.getElementById("onlyrdform");
    foo.appendChild(element);
}




