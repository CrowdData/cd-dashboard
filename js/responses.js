// All the code related to displaying (and getting) demand data.

QUESTION_ID=null;
function getResponses(questionID) {
var replyQuery ="SELECT *\
                      WHERE\
                      { \
                      GRAPH <http://crowddata.abdn.ac.uk/datasets/questions/data/> {\
                      <"+questionID+"> sioc:has_reply ?resource .\
							?resource	sioc:content ?reply ;\
										sioc:has_creator ?creator ;\
										sioc:created_at ?created; .\
								?creator sioc:name ?author .\
                                }\
                                } ORDER BY DESC(?created)";
query(replyQuery,loadReplies);
			
}
	
	
	function initResponses(templateID,datasetID,question){
	QUESTION_ID=question;   //loader.js assign
	DATASET_ID=datasetID;   //loader.js assign
	TEMPLATE_ID=templateID;  //loader.js assign
	
	getResponses(QUESTION_ID);      
    initTemplate(templateID,datasetID); //loader.js
	
	

	};
var author;
function loadReplies(data){
$('body').removeClass('loading');
			
        if (!data.results.bindings[0]) {
                 $('#responsesDiv').append("<p>Be the first to answer this question...</p>");
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

function submitResponse(){
   var url=host+"datasets/"+DATASET_ID+"/create";  //loader.js host move to global  
   var jsonData=genericResponse(); //from loader.js
    jsonData['questionID']=QUESTION_ID;
     postAjax(url, "application/json", {}, jsonData,
        function (data) {
        //create new graph (simulates reloading)
        showSuccess("Thank you response was succesfully saved.");
         initResponses(TEMPLATE_ID,DATASET_ID,QUESTION_ID);        
        alert("Success"+JSON.stringify(data));
       
        });
    
}
    

        











