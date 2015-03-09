var prefixes = "PREFIX dc: <http://purl.org/dc/elements/1.1/>\
                                                        PREFIX db: <http://crowddata.abdn.ac.uk:8080/d2rq/resource>\
                                                        PREFIX geo: <http://www.w3.org/2003/01/geo/wgs84_pos#>\
                                                        PREFIX meta: <http://www4.wiwiss.fu-berlin.de/bizer/d2r-server/metadata#>\
                                                        PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\
                                                        PREFIX time: <http://www.w3.org/TR/owl-time/>\
                                                        PREFIX naptan: <http://transport.data.gov.uk/def/naptan/>\
                                                        PREFIX d2r: <http://sites.wiwiss.fu-berlin.de/suhl/bizer/d2r-server/config.rdf#>\
                                                        PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\
                                                        PREFIX foaf: <http://xmlns.com/foaf/spec/>\
                                                        PREFIX map: <http://crowddata.abdn.ac.uk:8080/d2rq/resource/#>\
                                                        PREFIX owl: <http://www.w3.org/2002/07/owl#>\
                                                        PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>\
                                                        PREFIX vocab: <http://crowddata.abdn.ac.uk:8080/d2rq/resource/vocab/>\
                                                        PREFIX cd: <http://crowddata.abdn.ac.uk/vocab/0.1/>\ ";
function query(query,tableID){
                var queryUrl = "http://crowddata.abdn.ac.uk/query/sparql?callback=?&format=json&query=" + escape(prefixes + query);
                console.log(queryUrl);
                $.ajax({
                    dataType: "jsonp",
                    url: queryUrl,
                    success: function (data) {  
				
                        var table = $(tableID);
						//Styling for table from boostrap
						$(tableID).addClass('table table-striped');
						
                        var headerVars = data.head.vars;
						var bindings=data.results.bindings;
						console.log(JSON.stringify(bindings));
                        var trHeaders = getTableHeaders(headerVars);
                        table.append(trHeaders);

                        for (rowIdx in bindings) {
						console.log("appending"+rowIdx);
                            table.append(getTableRow(headerVars, bindings[rowIdx]));
                        }
					


                    },

                    // for each result, make a table row and add it to the table.

                    error: function (xhr, textStatus, errorThrown) {
                        alert("Error:" + textStatus); alert("Error" + errorThrown);
                    }

                });
				
				};
				
				
				 function getTableHeaders(headerVars) {
                var trHeaders = $("<tr></tr>");
                for (var i in headerVars) {
                    trHeaders.append($("<th>" + headerVars[i].replace("_"," ") + "</th>"));
                }
                return trHeaders;
            }

            function getTableRow(headerVars, rowData) {
                var tr = $("<tr></tr>");
                for (var i in headerVars) {
                    tr.append(getTableCell(headerVars[i], rowData));

                }
                return tr;
            }
      
  function isUrl(s) {
var regexp = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/
return regexp.test(s);
}
            function getTableCell(fieldName, rowData) {
			console.log("getTableCell"+fieldName);
                var td = $("<td></td>");
                var fieldData = rowData[fieldName];
				if(fieldData){
				console.log("FieldData"+JSON.stringify(fieldData));
		
                                if (isUrl(fieldData.value)){
                                var aTag=$('<a>',{href:fieldData.value});
                                aTag.text(fieldData.value);
                                td.append(aTag);
                                return td;//code
                                }
                
                
                td.html(fieldData.value);
				}
				else{
				td.html("Not Provided");
				}
                return td;
            }

				