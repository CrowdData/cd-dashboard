var host = "http://crowddata.abdn.ac.uk:8080/test/1/";

var TEMPLATE_ID;
var DATASET_ID;
var DATASET_PATH;
var PREVIOUS_URI;
var UPDATE=false;
function initTemplate(templateID, datasetID) {
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

function initUpdate(resourceURI){
    var jsonReq={};
    jsonReq['resourceid']=resourceURI;
    postAjax(host + "resources", "application/json", {}, jsonReq,
        function (data) {
        DATASET_PATH=data.datasetPath;
        PREVIOUS_URI=data.previousURI;
        injectGraph(data.template, data.graph, data.resourceURI);
        hideLoading();
        showForm();

        },
     errorServer);
}

var errorServer=function (error) {
           showError('Failed to retrieve data from server: Check your connection?');
         hideLoading();
        hideForm();
        };

var submit=function(update,handleMethod) {
    showLoading();
    if (isComplete()) {
        if(update){
            updateReport();
            return;
        }
        if(handleMethod){
            handleMethod();
            return;
        }
        createReport();
    } else {
        hideLoading();
    }
   //for testing output   //$('#graph').html(JSON.stringify(EDITOR.graph.exportRDFJSON()));
};



function createReport(){
   var url=host+"datasets/"+DATASET_ID+"/create";    
   var jsonData=genericResponse();
    
     postAjax(url, "application/json", {}, jsonData,
        function (data) {
        //create new graph (simulates reloading)
        showSuccess("Thank you your contribution was succesfully saved.You may add a new one or just return to previous page by pressing a back button.");
         initTemplate(TEMPLATE_ID,DATASET_ID);        
        alert("Success"+JSON.stringify(data));
       
        },
        errorServer);
    
}

function genericResponse(){
    var jsonData={};
   jsonData['userid']=readCookie('userid');
 jsonData['graph']=EDITOR.graph.exportRDFJSON();
   jsonData['templateID']=TEMPLATE_ID;
   jsonData['timeSent']=getDateTime();
    jsonData['resourceURI']=RESOURCE_URI;
    return jsonData;
}

function updateReport(){
   var url=host+"resources/update";    
    var jsonData=genericResponse();
    jsonData['previousURI']=PREVIOUS_URI;
    jsonData['datasetPath']=DATASET_PATH; 
    
     postAjax(url, "application/json", {}, jsonData,
        function (data) {     
        alert("Success"+JSON.stringify(data));
         hideForm();
         showSuccess("Thank you your update was succesfully saved");
          hideLoading();
        javascript: history.go(-1);
         hideLoading();
        },
        errorServer);
    
}




