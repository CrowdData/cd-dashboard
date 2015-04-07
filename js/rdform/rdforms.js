var GRAPH;
var EDITOR;
var TEMPLATE_ROOT;
var RDFORM_LOCATION="onlyrdform";
var CARDINALITY_REPORT;
var RESOURCE_URI;

function  injectGraph(templateSrc, graphSrc, resourceURI){
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
    RESOURCE_URI=resourceURI;
	GRAPH=new Graph(graphSrc);	
	var itemStore=new ItemStore();
	var bundle = itemStore.registerBundle({source: templateSrc});
	TEMPLATE_ROOT=bundle.getRoot();
	console.log("Creating editor");
        
        
	EDITOR=new Editor({
            graph: GRAPH,
            resource: resourceURI,
            template: TEMPLATE_ROOT,
            compact: false
        }, RDFORM_LOCATION);  
        rdfFormStyle();
     });
};


function constructReport(){

 require([
		 'rdforms/model/Engine',    
        'dojo/dom-attr',
        'dojo/domReady!'             //Wait until the dom is ready.
            ], function (Engine) {

			var rootBinding = Engine.match(GRAPH,RESOURCE_URI,TEMPLATE_ROOT);
			console.log("Engine match");
			CARDINALITY_REPORT= rootBinding.report();			
	
     });

}

var LABELS="";
function isComplete(){
constructReport();
LABELS="";
resetFormValid();
if (CARDINALITY_REPORT.errors.length>0) {


	for (index = 0; index < CARDINALITY_REPORT.errors.length; ++index) {
		var label=CARDINALITY_REPORT.errors[index].item._source.label.en;
	LABELS+=label+"<br/>";
	
	
	$('.rformsLabel').each(function(i) {
	if (label.indexOf(this.innerText)>-1) {
		this.style.color="red";
		console.log("changed color for"+label);
	}
	
});
	
	
}
showError("<b>Incomplete Form:</b><br/>"+LABELS);
return false;
}
return true;
}
function resetFormValid(){
$('.rformsLabel').each(function(i){		
	this.style.color="black";	
	});

}
function rdfFormStyle(){
    $( ".rformsTopLevel.rformsRow" ).addClass( "row" );
	$( ".rformsLabelRow" ).addClass( "row col-sm-12 " );
	$( ".rformsFields" ).addClass( "row col-sm-12 " );
	//$( ".rformsRow" ).addClass( "row" );
	$(".rformsFieldControl").addClass("col sm-1");
//	$(".rformsFieldControl").addClass("col sm-10");
	
	
	$(".rformsEditor.compact").removeClass('compact');
	$("#onlyrdform").css('height','auto');
}