function init() {
 var feedbackQuery ="SELECT ?Feedback_Provider ?Feedback \
FROM <http://crowddata.abdn.ac.uk/datasets/feedbackv2/data/>\
FROM <http://crowddata.abdn.ac.uk/datasets/users/data/>\
                                                    WHERE\
                                                    { \
                                                     ?resource <http://purl.org/dc/terms/abstract> ?Feedback ;\
                                                    prov:wasAttributedTo ?user .\
							                         ?user foaf:name ?Feedback_Provider .\
                                                    }\
                                                     ";
query(feedbackQuery,handleTable);
			
}	