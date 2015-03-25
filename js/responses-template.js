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
	$('body').addClass('loading');
	console.log("questionID:"+questionID);
	assignQuestionID(question);
	console.log("questionID after assing"+questionID);
	holder.DATASET_ID=datasetID;
	holder.templateID=templateID;
	
	getData(questionID);
	getUniqueResourceForDataset(holder);
	if(holder.RESPONSE==="failed"){
	alert("Failed get URI, cannot create form");
	return;
	}
	loadGraph(TemplateProvider.getTemplate(holder.templateID), holder.RESPONSE, "responsesID", holder,"Submit answer" );
	console.log("Response:"+holder.RESPONSE);
	
	

	};

function loadReplies(data){
$('body').removeClass('loading');
			
        if (!data.results.bindings[0]) {
                 $('#responsesDiv').append("<p>No information provided ...</p>");
               return;
		 }
console.log("REPLIES"+JSON.stringify(data));
var bindings=data.results.bindings;
var container=$('#responsesDiv');
container.empty();
for(var id in bindings){
console.log("Inside bindings");
var row=bindings[id];
container.append(addRepliesDiv(row.author.value, row.reply.value, row.created.value,id));

}
$('#responsesDiv').css({'opacity':0}).animate({'opacity':1});
}

function addRepliesDiv(author,reply,created,id){
console.log("addrepliesDiv called");
var questionDiv=$('<div class=\'reply row\'></div>');
if (id%2==0) {
	questionDiv.addClass('even');	
}
questionDiv.append($('<i>Response by </i>').append(author).append(' at '+ parseXSDDateString(created).toLocaleString()));
questionDiv.append($('<p></p>').append(reply));

console.log("Appending reply");
return questionDiv;


}




//needs custom.js
function sendData(){
$('body').addClass('loading');
console.log(JSON.stringify(holder.EDITOR.graph.exportRDFJSON()));
var rdfjson=holder.EDITOR.graph.exportRDFJSON();

checkCardinality(holder);
if (!isComplete(holder)) {
$('body').removeClass('loading');
alert("Please note, following fields are still required to be filled in: \n"+labels);
}

else{
var message=postRDFJSON(rdfjson,holder.DATASET_ID,holder.RESPONSE);
if(message.match("OK")){
$('body').removeClass('loading');
alert("Your response was succesfuly received.");
/*
$('#responsesDiv').empty();
$('#responsesID'+i++).attr('id','responsesID'+i);
$('#responsesID'+i).empty();
$('#newResponse').show();
$('#responsesDiv').css({'opacity':0}).animate({'opacity':1});
//getData(questionID); //reload?

//reload
*/
reset();
document.location.href="#top";
getData(questionID);




}
else {
$('body').removeClass('loading');
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






