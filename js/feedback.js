function init() {
 var feedbackQuery ="SELECT    ?Feedback_Provider ?Feedback \
                                                    WHERE\
                                                    { \
                                                     GRAPH <http://crowddata.abdn.ac.uk/datasets/feedback/data/> {\
                                                     ?resource <http://purl.org/dc/terms/abstract> ?Feedback ;\
							<http://purl.org/dc/terms/creator> ?Feedback_Provider .\
                                                    }\
                                                    } ";
query(feedbackQuery,handleTable);
			
}	