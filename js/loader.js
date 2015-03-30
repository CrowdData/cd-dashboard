var host = "http://crowddata.abdn.ac.uk:8080/test/1/";

var TEMPLATE_ID;
var DATASET_ID;
var DATASET_PATH;
function init(templateID, datasetID) {
    var jsonRequest = {};
    jsonRequest['resourceType'] = templateID;
    TEMPLATE_ID = templateID;
    DATASET_ID = datasetID;
    postAjax(host + "datasets/" + DATASET_ID, "application/json", {}, jsonRequest,
        function (data) {
        DATASET_PATH=data.datasetPath;
        injectGraph(data.template, data.graph, data.resourceURI);
        hideLoading();
        showForm();

        },
        function (error) {
           showError('Failed to retrieve data from server: Check your connection?');
         hideLoading();
        hideForm();
        });


}

function updateData(resourceID) {
    var updateURL = "/resources/get/" + encodeURI(resourceID);




}

function submit() {
    showLoading();
    if (isComplete()) {
        sendReport();
    } else {
        hideLoading();
    }



    $('#graph').html(JSON.stringify(EDITOR.graph.exportRDFJSON()));

}


function sendReport(){
   var url=host+"datasets/"+DATASET_ID+"/create";    
   var jsonData={};
   jsonData['userid']=readCookie('userid');
   jsonData['graph']=EDITOR.graph.exportRDFJSON();
   jsonData['templateID']=TEMPLATE_ID;
   jsonData['timeSent']=getDateTime();
    
     postAjax(url, "application/json", {}, jsonData,
        function (data) {
        //create new graph
         init(TEMPLATE_ID,DATASET_ID);        
            alert("Success"+data);
        },
        function (error) {
          hideLoading();
           showError('Something went wrong when submitting your data,try again');
         
        });
    
}




