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
														
														
										