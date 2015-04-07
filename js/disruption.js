function init() {
$('body').addClass('loading');
 var disruptionQuery ="SELECT  ?Disruption_Description  ?Near_Bus_Stop ?Occurence_At ?Picture_link \
                                                    WHERE\
                                                    { \
                                                     GRAPH <http://crowddata.abdn.ac.uk/datasets/disruption/data/> {\
                                                     ?resource <http://purl.org/dc/terms/date> ?Occurence_At ;\
														<http://purl.org/dc/terms/title> ?Disruption_Description ;\
														<http://www.w3.org/2003/01/geo> ?Near_Bus_Stop .\
														OPTIONAL{?resource <http://xmlns.com/foaf/0.1/depiction> ?Picture_link.}\
                                                    }\
                                                    } ORDER BY DESC(?Occurence_At)";
query(disruptionQuery,handleTable);
			
}

     