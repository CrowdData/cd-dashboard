var host = "http://crowddata.abdn.ac.uk:8080/test/1/";

var TEMPLATE_ID;
var DATASET_ID;

function loadData(templateID, datasetID) {
    var jsonRequest = {};
    jsonRequest['resourceType'] = templateID;
    TEMPLATE_ID = templateID;
    DATASET_ID = datasetID;

    postAjax(host + "datasets/" + DATASET_ID, "application/json", {}, jsonRequest,
        function (data) {
        
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
        alert("Sending Data");
        create();
    } else {
        hideLoading();
    }



    $('#graph').html(JSON.stringify(EDITOR.graph.exportRDFJSON()));

}






function postAjax(url, type, headers, data, successF, errorF) {
    $.ajax({
        url: url,
        type: "POST",
        headers: headers,
        data: JSON.stringify(data),
        contentType: type,
        success: successF,
        error: errorF
    });
};