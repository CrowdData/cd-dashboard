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
														PREFIX sioc: <http://rdfs.org/sioc/ns#>\
														PREFIX dcterms: <http://purl.org/dc/terms/>\
                                                        PREFIX cd: <http://crowddata.abdn.ac.uk/vocab/0.1/>\ ";

														function query(query,functionExecute){
                var queryUrl = "http://crowddata.abdn.ac.uk/query/sparql?callback=?&format=json&query=" + escape(prefixes+query);
                console.log(queryUrl);
                $.ajax({
                    dataType: "jsonp",
                    url: queryUrl,
                    success: function (data) {  
					console.log("Data" +data);
					functionExecute(data);
                    },


                    error: function (xhr, textStatus, errorThrown) {
                        alert("Error:" + textStatus); alert("Error" + errorThrown);
                    }

                });
				
				};
														
														
														
														
														function queryOld(query,tableID){
                var queryUrl = "http://crowddata.abdn.ac.uk/query/sparql?callback=?&format=json&query=" + escape(prefixes + query);
                console.log(queryUrl);
                $.ajax({
                    dataType: "jsonp",
                    url: queryUrl,
                    success: function (data) {  
				$('#loading').addClass('hidden');
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
                    trHeaders.append($("<th>" + headerVars[i].replace(/-|_/g," ") + "</th>"));
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
			
			function handleTable(data){
			var tableID="#data-table";
			//$('#loading').addClass('hidden');
			$('body').removeClass('loading');
			
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
			
       
//http://www.experts-exchange.com/Programming/Languages/Scripting/JavaScript/Q_21889287.html           
function parseXSDDateString(dateString) {
  var Zp=(dateString.charAt(10)=="T")?19:10;
  var xDate = new Date(dateString.substr(0,Zp).replace(/-/g,'/').replace("T"," "));
  if(dateString.length>Zp){
    xDate.setMinutes(xDate.getMinutes()+xDate.getTimezoneOffset());
    if(dateString.charAt(Zp)!="Z"){
      var tZ = dateString.substr(Zp).split(":");
      tZ=tZ[0]*60+(tZ[1]*1);
      xDate.setMinutes(xDate.getMinutes()+tZ);
    }
  }
  return xDate;
}
				