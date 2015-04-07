function init() {
    //quering old dataset need query for new based on what we need to display?
 var eventQuery ="SELECT ?Event_Name  ?Date_Start  ?Date_End ?Department ?about ?Website \
                                                    WHERE\
                                                    { \
                                                     GRAPH <http://crowddata.abdn.ac.uk/datasets/events/data/> {\
                                                     ?resource <http://purl.org/dc/terms/dateStart> ?Date_Start ;\
														<http://purl.org/dc/terms/dateEnd> ?Date_End ;\
                                                        <http://purl.org/dc/terms/titleEvent> ?Department;\
                                                        <http://purl.org/dc/terms/title> ?Event_Name;\
														 <http://purl.org/dc/terms/abstract> ?about.\
														OPTIONAL{?resource <http://xmlns.com/foaf/0.1/homepage> ?Website.}\
                                                    }\
                                                    } ORDER BY ASC(?Date_Start)";
//you can change handleTable for any other for display purposes    
query(eventQuery,handleTable);
			
}