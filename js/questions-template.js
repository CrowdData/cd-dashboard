// All the code related to displaying (and getting) demand data.


function getData() {
 var questionsQuery ="SELECT *\
                      WHERE\
                      { \
                      GRAPH <http://crowddata.abdn.ac.uk/datasets/questions/data/> {\
                      ?resource sioc:has_creator ?creator ;\
								sioc:content ?question ;\
								dcterms:created ?created; .\
								?creator sioc:name ?author; .\
								 MINUS { ?resource sioc:reply_of ?uri . }\
                                }\
                                } ORDER BY DESC(?created)";
var result=query(questionsQuery,loadQuestions);
			
}
	
	function getTemplate(datasetID,loc){
	//getData(); did not work for questions (RDForms layout issues)
	holder.DATASET_ID=datasetID;
	holder.templateID=datasetID;
	getUniqueResourceForDataset(holder);
	console.log("Response:"+holder.RESPONSE);
	if(holder.RESPONSE==="failed"){
	alert("No form created, failed to get URI");
	}
	else{
	addButton(loc,"Submit your question");
	loadGraph(TemplateProvider.getTemplate(holder.templateID), holder.RESPONSE, loc, holder );

	}
	};
	
	
	
function loadQuestions(data){
console.log("Data in template"+JSON.stringify(data));
var bindings=data.results.bindings;
for(var id in bindings){
var row=bindings[id];
addQuestionDiv(row.resource.value,row.author.value, row.question.value,row.created.value);

}

}

function addQuestionDiv(questionID,author,questionContent,created){
var container=$('#questionsDiv');
var questionDiv=$('<div class=\'question row\' id='+questionID+'></div>');
questionDiv.append($('<h4>Question: </h2>').append(questionContent));
questionDiv.append($('<h5>by </h3>').append(author));
questionDiv.append($('<h5>at  </h3>').append(parseXSDDateString(created).toLocaleString()));

var replyButton=$('<a class=\'btn btn-success\' href=responses-view.php?id='+escape(questionID)+'&author='+escape(author)+'&question='+escape(questionContent)+'>Show responses</a>').appendTo(questionDiv);
container.append(questionDiv);

}


function addQuestion(){
	$('#newQuestion').hide();
	loadGraph(TemplateProvider.getTemplate(holder.templateID), holder.RESPONSE, "questionsID", holder );
	addButton("questionsID","Submit your question");
	
	}


function sendData(){
sendDataAll('questions',holder);
}






