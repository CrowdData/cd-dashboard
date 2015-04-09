function handleTable(data){
			var tableID="#data-table";
			hideLoading();
            $('#tablediv').removeClass('hidden');
			
                                if (!data.results.bindings[0]) {
                                     $(tableID).append("<p>No information provided ...</p>");
                                     return;
                                }
                                
                        var table = $(tableID);
						//Styling for table from boostrap
						$(tableID).addClass('table table-striped');
                        $('#tableTitle').removeClass('hidden');
						
                        var headerVars = data.head.vars;
						var bindings=data.results.bindings;
						console.log(JSON.stringify(bindings));
                        var trHeaders = getTableHeaders(headerVars);
                        table.append(trHeaders);
                                
                        for (rowIdx in bindings) {
						console.log("appending"+rowIdx);
                            table.append(getTableRow(headerVars, bindings[rowIdx]));
                        }
    
    
					


			
			
			};

 function getTableHeaders(headerVars) {
                var trHeaders = $("<tr></tr>");
                for (var i in headerVars) {
                    trHeaders.append($("<th>" + headerVars[i].replace(/-|_/g," ") + "</th>"));
                }
                return trHeaders;
            }

            function getTableRow(headerVars, rowData) {
                var tr = $("<tr></tr>");
                for (var i in headerVars) {
                    tr.append(getTableCells(headerVars[i], rowData));

                }
                return tr;
            }
      

            function getTableCells(fieldName, rowData) {
			console.log("getTableCell"+fieldName);
                var td = $("<td></td>");
                var fieldData = rowData[fieldName];
                
                
                
				if(fieldData){
                    console.log(fieldName);
                    if(fieldName.indexOf("update")>-1){
                       var button=$("<button href='#'></button>");
                        button.addClass("btn btn-default");                             button.attr("href",fieldData.value);
                        button.html("Update");
                        td.append(button);
                        return td;
                    }
				console.log("FieldData"+JSON.stringify(fieldData));
                                //fix for K.R.E.S.I.T bus stop charAt(11)
                                if (fieldData.value.charAt(10)=="T" &&fieldData.value.charAt(11)!="/") {
                                var date=parseXSDDateString(fieldData.value).toLocaleString();
                                console.log("Date is"+date);
                                td.html(date);
                                return td;
                                }
                                if(/^\d\d\d\d-\d\d-[\d]+/.test(fieldData.value)){
								 console.log("DATE ONLY=="+fieldData.value);
								 td.html(new Date(fieldData.value).toLocaleDateString());
								 return td;
								}
                                if (isUrl(fieldData.value)){
                                var aTag=$('<a>',{href:fieldData.value});
                                aTag.text(fieldData.value);
                                td.append(aTag);
                                return td;//code
                                }
                
                
                td.html(fieldData.value.replace(/-|_/g," "));
				}
				else{
				td.html("Not Provided");
				}
                return td;
            }
			
//handling construct			
function handleConstructView(dataResponse,props,headers){
    hideLoading();
        $('#tablediv').removeClass('hidden');
    	$('#data-table').addClass('table table-striped');
var headerRow = $("<tr></tr>");
$.each(headers, function(index, header){
       headerRow.append("<th>"+header+"</th>");
});

$("#data-table").append(headerRow);

var data = JSON.parse(JSON.stringify(dataResponse).replace("@graph", "graph"));

if (data.graph){
    $.each(data.graph, function(index, item){
         $("#data-table").append(createRow(props, item));
    });
} else {
    $("#data-table").append(createRow(props, data));
}

}
//extend
function createRow(props, item){
    var row = $("<tr></tr>");
    $.each(props, function(index, property){
        var cell = $("<td></td>");
     //   var value = eval('item.'+property);
        var value=item[property];
        if(value){
        if (value.constructor === Array){
            $.each(value, function(i, p){
                
                  cell.append("   " + styleType(value[i])+"<br/>");
            });
        } else {
            
            cell.append(styleType(item[property]) );
        }
        }
        else{
            cell.append("N/A");
        }
        row.append(cell)
    });
    return row;
} 

				