// All the code related to displaying (and getting) demand data.


function getData() {
 var questionsQuery ="SELECT *\
                      WHERE\
                      { \
                      GRAPH <http://crowddata.abdn.ac.uk/datasets/questionsv2/data/> {\
                      ?resource sioc:has_creator ?creator ;\
								sioc:content ?question ;\
								sioc:created_at ?created; .\
								?creator sioc:name ?author; .\
								 MINUS { ?resource sioc:reply_of ?uri . }\
                                }\
                                } ORDER BY DESC(?created)";
var result=query(questionsQuery,loadQuestions);
			
}
		
function loadQuestions(data){
console.log("Data in template"+JSON.stringify(data));
$('body').removeClass('loading');

  if (!data.results.bindings[0]) {
                 $('#questionsDiv').append("<p>Be first to ask a question to IITB community.</p>");
               return;
		 }

var bindings=data.results.bindings;
for(var id in bindings){
var row=bindings[id];
addQuestionDiv(row.resource.value,row.author.value, row.question.value,row.created.value,id);

}

}
function addQuestionDiv(questionID,author,questionContent,created,id){
var container=$('#questionsDiv');
var questionDiv=$('<div class=\'question row\' id='+questionID+'></div>');
if (id%2==0) {
	questionDiv.addClass('even');	
}

var questionCol=$('<div class=\'col-xs-12 col-md-9\'></div>').appendTo(questionDiv);
var buttonCol=$('<div class=\'col-xs-3 col-md-3\'></div>').appendTo(questionDiv);


questionCol.append($('<h4>Question: </h2>').append(questionContent));
questionCol.append($('<i>- by </i>').append(author).append(' at '+ parseXSDDateString(created).toLocaleString()));

var replyButton=$('<a class=\'btn btn-success\' href=responses-view.php?id='+escape(questionID)+'&author='+escape(author)+'&question='+escape(questionContent)+'>Show responses</a>').appendTo(buttonCol);
container.append(questionDiv);

}







