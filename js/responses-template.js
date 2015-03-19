// All the code related to displaying (and getting) demand data.


function getData(questionID) {
 var replyQuery ="SELECT *\
                      WHERE\
                      { \
                      GRAPH <http://crowddata.abdn.ac.uk/datasets/questions/data/> {\
                      <"+questionID+"> sioc:has_reply ?resource .\
							?resource	sioc:content ?reply ;\
										sioc:has_creator ?creator ;\
										dcterms:created ?created; .\
								?creator sioc:name ?author .\
                                }\
                                } ORDER BY DESC(?created)";
query(replyQuery,loadReplies);
			
}
	
	
	function getTemplate(templateID,loc,datasetID,question){
	console.log("questionID:"+questionID);
	assignQuestionID(question);
	console.log("questionID after assing"+questionID);
	holder.DATASET_ID=datasetID;
	holder.templateID=templateID;
	
	getData(questionID);
	
	console.log("Response:"+holder.RESPONSE);
	if(holder.RESPONSE==="failed"){
	alert("Failed get URI");
	}
	

	};
	var i=1;
	function addResponse(){
	$('#newResponse').hide().fadeOut();
	//$('#responsesDiv').fadeOut();
	$('#responsesDiv').css({'opacity':1}).animate({'opacity':0});
	addButton("responsesID"+i,"Reply!");
	//unregister experiment
	holder.EXPERIMENT=null;
	getUniqueResourceForDataset(holder);
	loadGraph(TemplateProvider.getTemplate(holder.templateID), holder.RESPONSE, "responsesID"+i, holder );
	
	
	}
function loadReplies(data){
console.log("REPLIES"+JSON.stringify(data));
var bindings=data.results.bindings;
var container=$('#responsesDiv').fadeIn();
for(var id in bindings){
console.log("Inside bindings");
var row=bindings[id];
container.append(addRepliesDiv(row.author.value, row.reply.value, row.created.value));

}

}

function addRepliesDiv(author,reply,created){
console.log("addrepliesDiv called");
var questionDiv=$('<blockquote class=\'reply row\'></blockquote>');
questionDiv.append($('<p></p>').append(reply));
questionDiv.append($('<footer></footer>').append("at"+parseXSDDateString(created).toLocaleString()+" by<cite>"+author+"</cite>"));
console.log("Appending reply");
return questionDiv;


}




//needs custom.js
function sendData(){
console.log(JSON.stringify(holder.EXPERIMENT.graph.exportRDFJSON()));
var rdfjson=holder.EXPERIMENT.graph.exportRDFJSON();

checkCardinality(holder);
if (!isComplete(holder)) {
alert("Reply: \n"+labels);
}

else{
var message=postRDFJSON(rdfjson,holder.DATASET_ID,holder.RESPONSE);
if(message.match("OK")){
alert("Your response was saved");
$('#responsesDiv').empty();
$('#responsesID'+i++).attr('id','responsesID'+i);
$('#responsesID'+i).empty();
$('#newResponse').show();
$('#responsesDiv').css({'opacity':0}).animate({'opacity':1});
getData(questionID); //reload?

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
		alert("Error");
	}
}
}
}






