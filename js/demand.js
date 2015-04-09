function init() {
 var demandQuery ="SELECT ?Location ?Demand ?Date \
                                                    WHERE\
                                                    { \
                                                     GRAPH <http://crowddata.abdn.ac.uk/datasets/demandv2/data/> {\
													?resource dcterms:date ?Date .\
											OPTIONAL { ?resource <http://crowddata.abdn.ac.uk/def/demand/demandLevel> ?Demand }\
											OPTIONAL { ?resource dcterms:Location ?Location }\
                                                    }\
                                                    } ORDER BY DESC(?Date)";
query(demandQuery,handleTable);
			
}