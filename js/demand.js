function init() {
$('body').addClass('loading');
 var demandQuery ="SELECT ?Location ?Demand ?Date \
                                                    WHERE\
                                                    { \
                                                     GRAPH <http://crowddata.abdn.ac.uk/datasets/demand/data/> {\
													?resource <http://purl.org/dc/terms/date> ?Date .\
											OPTIONAL { ?resource <http://xmlns.com/foaf/0.1/DemandPersonLocation> ?Demand }\
											OPTIONAL { ?resource <http://purl.org/dc/terms/Location> ?Location }\
                                                    }\
                                                    } ORDER BY DESC(?Date)";
query(demandQuery,handleTable);
			
}