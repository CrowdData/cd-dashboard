
		function Templates(){
	this.url="url/to/templates";
	
	};

	Templates.prototype.getTemplate=function(templateID){
	if(templateID==="demand"){
		return demandTemplate;
	}
	else if (templateID==="feedback"){
	return feedbackTemplate;
	}
	else if (templateID==="disruption"){
	return disruptionTemplate;
	}
	else if (templateID==="events") {
		return eventTemplate;
	}
	else if (templateID==="questions"){
		return questionTemplate;
	}
	else if (templateID==="responses"){
		return responseTemplate;
	}
	};
	
	var TemplateProvider =new Templates();
	
	
	var responseTemplate= {
         "root": "response",
         "templates": [{
             "id": "response",
             "type": "group",
			 "label":{"en":"Reply to question"},
			 "cardinality":{"min":1, "max":1},
			 "constraints": { "http://www.w3.org/TR/rdf-schema/type": "http://rdfs.org/sioc/ns#Post" },
			 "items":["creator","reply"],
			 },{
						"id":"creator",
                        "type": "group",
                        "nodetype": "BLANK",
                        "label": { "en": "Your details" },
						"description": { "en": "Provide your details" },
                        "property": "http://rdfs.org/sioc/ns#has_creator",
                        "cardinality": { "min": 1, "max": 1 },
                        "constraints": { "http://www.w3.org/TR/rdf-schema/type": "http://rdfs.org/sioc/ns#User" },
                        "items":["email","name"]
                 },{
						"id":"email",
                        "type": "text",
                        "nodetype": "ONLY_LITERAL",
                        "label": { "en": "Your Email" },
						"description": { "en": "Provide your email" },
                        "property": "http://rdfs.org/sioc/ns#email",
                        "cardinality": { "min": 1, "max": 1 }
                     
                 },
				 {
						"id":"name",
                        "type": "text",
                        "nodetype": "ONLY_LITERAL",
                        "label": { "en": "Your Name" },
						"description": { "en": "Provide your name or nickname" },
                        "property": "http://rdfs.org/sioc/ns#name",
                        "cardinality": { "min": 1, "max": 1 }
                     
                 }, {
						"id":"reply",
                        "type": "text",
                        "nodetype": "ONLY_LITERAL",
                        "label": { "en": "Reply to question" },
						"description": { "en": "Provide your response" },
                        "property": "http://rdfs.org/sioc/ns#content",
                        "cardinality": { "min": 1, "max": 1 }
                     
                 }
				 		 
			 
			 
			 ]
			 
			 };
	
	
	
	var questionTemplate= {
         "root": "question",
         "templates": [{
             "id": "question",
             "type": "group",
			 "label":{"en":"Question"},
			 "cardinality":{"min":1, "max":1},
			 "constraints": { "http://www.w3.org/TR/rdf-schema/type": "http://rdfs.org/sioc/ns#Post" },
			 "items":["creator","content"],
			 },{
						"id":"creator",
                        "type": "group",
                        "nodetype": "BLANK",
                        "label": { "en": "Author of question" },
						"description": { "en": "Provide your email" },
                        "property": "http://rdfs.org/sioc/ns#has_creator",
                        "cardinality": { "min": 1, "max": 1 },
                        "constraints": { "http://www.w3.org/TR/rdf-schema/type": "http://rdfs.org/sioc/ns#User" },
                        "items":["email","name"]
                 },{
						"id":"email",
                        "type": "text",
                        "nodetype": "ONLY_LITERAL",
                        "label": { "en": "Your Email" },
						"description": { "en": "Provide your email" },
                        "property": "http://rdfs.org/sioc/ns#email",
                        "cardinality": { "min": 1, "max": 1 }
                     
                 },
				 {
						"id":"name",
                        "type": "text",
                        "nodetype": "ONLY_LITERAL",
                        "label": { "en": "Your Name" },
						"description": { "en": "Provide your name" },
                        "property": "http://rdfs.org/sioc/ns#name",
                        "cardinality": { "min": 1, "max": 1 }
                     
                 }, {
						"id":"content",
                        "type": "text",
                        "nodetype": "ONLY_LITERAL",
                        "label": { "en": "Ask a question" },
						"description": { "en": "Provide your question" },
                        "property": "http://rdfs.org/sioc/ns#content",
                        "cardinality": { "min": 1, "max": 1 }
                     
                 }
				 		 
			 
			 
			 ]
			 
			 };
             
				 
				 
				 
	
	var feedbackTemplate = {
          "root": "feedback",
         "templates": [{
             "id": "feedback",
             "type": "group",
             "content": [
                 {
                        "type": "text",
                        "nodetype": "ONLY_LITERAL",
                        "label": { "en": "Your Name" },
                        "property": "http://purl.org/dc/terms/creator",
                        "cardinality": { "min": 1, "max": 1 },
                        "constraints": { "http://www.w3.org/TR/rdf-schema/type": "http://xmlns.com/foaf/0.1/Person" },
                        
                 },{
                       "id":"foaf:account",
                        "property": "http://xmlns.com/foaf/0.1/account",
                        "label": {
                        "en": "Your e-mail address"
                          },
                        "description": {
                            "en": "A personal mailbox, ie. an Internet mailbox associated with exactly one owner, the first owner of this mailbox. This is a 'static inverse functional property', in that  there is (across time and change) at most one individual that ever has any particular value for foaf:mbox."
                        },
                        "type": "text",
                        "nodetype": "ONLY_LITERAL",
                        "cardinality": { "min": 1, "pref": 1, "max": 1 }
                        
             },
                 {    "id":"dc:title",
	                  "type": "text",
                     "nodetype":"ONLY_LITERAL",
                     "property": "http://purl.org/dc/terms/abstract",
                     "cardinality": { "min": 1, "pref": 1, "max": 1 },
                     "label": { "en": "Your Feedback" },
                     "description": { "en": "Enter Feedback" },
                     "styles":["multiline"]
		        },
		{
                        "id": "dcterms:date",
                        "property": "http://purl.org/dc/terms/date",
                        "label": {
                            "en": "Date"
                        },
                        "description": {
                            "en": "Date of feedback."
                        },
                        "type": "text",
                        "nodetype": "DATATYPE_LITERAL",
                        "datatype": "http://www.w3.org/2001/XMLSchema#date",
                        "cardinality": { "min": 1, "max": 1 }
                 }
                
           ]
       }]
};

	
	
		 var disruptionTemplate = {
         "root": "distruptions",
         "templates": [{
             "id": "distruptions",
             "type": "group",
             "content": [
                 {
                     "id":"dc:title",
	             "type": "text",
                     "nodetype":"ONLY_LITERAL",
                     "property": "http://purl.org/dc/terms/title",
                     "cardinality": { "min": 1, "pref": 1, "max": 1 },
                     "label": { "en": "Description of the disruption" },
                     "description": { "en": "Description of the disruption" }
                 },{
		                "id":"foaf:depiction",
		                "type":"text",
                        "nodetype":"URI",
		                "property":"http://xmlns.com/foaf/0.1/depiction",
                        "cardinality":{ "min" : 0, "pref" : 1, "max" : 1},
                        "label" : {"en": "Disruption link image"},
		                "description": {"en":"A link to photo of the the disruption"}
		        },{
                        "id": "dcterms:date",
                        "property": "http://purl.org/dc/terms/date",
                        "label": {
                            "en": "Date and time disruption spotted"
                        },
                        "description": {
                            "en": "Date and time disruption spotted"
                        },
                        "type": "text",
                        "nodetype": "DATATYPE_LITERAL",
                        "datatype": "http://www.w3.org/2001/XMLSchema#date",
                        "cardinality": { "min": 1, "max": 1 }
                 },{
                            "id":"foaf:based_near",
                            "type": "choice",
                            "property": "http://www.w3.org/2003/01/geo",
                            "label": { "en": "Bus stop closest to the disruption" },
                            "description": { "en": "Provide latitude  and longitude coordination of a person" },
                            "choices": [
    		    {
          "value": "Guest_House",
          "label": "Guest_House"
     },
     {
          "value": "Hostel_No-1",
          "label": "Hostel_No-1"
     },
     {
          "value": "Hostel_No-12",
          "label": "Hostel_No-12"
     },
     {
          "value": "Hostel_No-5",
          "label": "Hostel_No-5"
     },
     {
          "value": "Hostel_No-8",
          "label": "Hostel_No-8"
     },
     {
          "value": "Hill_Side",
          "label": "Hill_Side"
     },
     {
          "value": "IDC",
          "label": "IDC"
     },
     {
          "value": "Lake_Side",
          "label": "Lake_Side"
     },
     {
          "value": "Main_Gate",
          "label": "Main_Gate"
     },
     {
          "value": "Swimming-Pool",
          "label": "Swimming-Pool"
     },
     {
          "value": "SOM_&_IRCC",
          "label": "SOM_&_IRCC"
     },
     {
          "value": "YP",
          "label": "YP"
     },
     {
          "value": "Hostel_No-7",
          "label": "Hostel-No-7"
     },
     {
          "value": "Central-Library",
          "label": "Central-Library"
     },
     {
          "value": "Aeronautical-Engineering",
          "label": "Aeronautical-Engineering"
     },
     {
          "value": "K.R.E.S.I.T/Gulmohar",
          "label": "K.R.E.S.I.T/Gulmohar"
     },
     {
          "value": "Tanse-House",
          "label": "Tansa-House"
     },
     {
          "value": "Lake_Side_Gate_U",
          "label": "Lake_Side_Gate_U"
     },

     {
          "value": "Hostel_15",
          "label": "Hostel_15"
     },
     {
          "value": "Campus_Hub",
          "label": "Campus_Hub"
     },
     {
          "value": "Hostel-No-3",
          "label": "Hostel-No-3"
     },
     {
          "value": "Hostel_10_kvroad",
          "label": "Hostel_10_kvroad"
     },
     {
          "value": "Hostel_10_maingate",
          "label": "Hostel_10_maingate"
     },
     {
          "value": "White_House",
          "label": "White_House"
     },
     {
          "value": "QIP",
          "label": "QIP_U"
     },
     {
          "value": "New_QIP",
          "label": "NEW_QIP_U"
     }
     
  	   	],
  		"cardinality": {
    			"min": 1,
    			"pref": 1,
    			"max": 1
  		},
  		"nodetype": "ONLY_LITERAL",
  		"styles": [
    			"dropDown"
  		]
	    },    {		"id":"foaf:name",
                        "type": "text",
                        "nodetype": "ONLY_LITERAL",
                        "label": { "en": "Your Name" },
                        "property": "http://xmlns.com/foaf/0.1/name",
                        "cardinality": { "min": 1, "max": 1 },
                        
                 },{
                       "id":"foaf:account",
                        "property": "http://xmlns.com/foaf/0.1/account",
                        "label": {
                        "en": "Your e-mail address"
                          },
                        "description": {
                            "en": "A personal mailbox, ie. an Internet mailbox associated with exactly one owner, the first owner of this mailbox. This is a 'static inverse functional property', in that  there is (across time and change) at most one individual that ever has any particular value for foaf:mbox."
                        },
                        "type": "text",
                        "nodetype": "ONLY_LITERAL",
                        "cardinality": { "min": 1, "pref": 1, "max": 1 }
                        
             }
                        
                     ]
                 }
             ]
         };
	
	var demandTemplate = {
        "root": "test",
        "templates": [{
            "id": "test",
            "type": "group",
            "content": [
            {
                "id": "dcterms:date",
                "property": "http://purl.org/dc/terms/date",
                "label": {
                    "en": "Date"
                },
                "description": {
                    "en": "Date and time of the demand."
                },
                "type": "text",
                "nodetype": "DATATYPE_LITERAL",
                "datatype": "http://www.w3.org/2001/XMLSchema#date",
                "cardinality": {
                    "min": 1,
                    "pref": 1,
					"max":1
                }
            }, {
                "id": "dcterms:location",
                "property": "http://purl.org/dc/terms/Location",
                "label": {
                    "en": "Location of Stop"
                },
                "description": {
                    "en": "Location of the stop where the demand is made."
                },
		    "cardinality": { "min": 1, "pref": 1, "max": 1 },
                "type": "choice",
                "nodetype": "ONLY_LITERAL",
				"choices":[
     {
          "value": "Guest_House",
          "label": "Guest_House"
     },
     {
          "value": "Hostel_No-1",
          "label": "Hostel_No-1"
     },
     {
          "value": "Hostel_No-12",
          "label": "Hostel_No-12"
     },
     {
          "value": "Hostel_No-5",
          "label": "Hostel_No-5"
     },
     {
          "value": "Hostel_No-8",
          "label": "Hostel_No-8"
     },
     {
          "value": "Hill_Side",
          "label": "Hill_Side"
     },
     {
          "value": "IDC",
          "label": "IDC"
     },
     {
          "value": "Lake_Side",
          "label": "Lake_Side"
     },
     {
          "value": "Main_Gate",
          "label": "Main_Gate"
     },
     {
          "value": "Swimming-Pool",
          "label": "Swimming-Pool"
     },
     {
          "value": "SOM_IRCC",
          "label": "SOM_IRCC"
     },
     {
          "value": "YP",
          "label": "YP"
     },
     {
          "value": "Hostel_No-7",
          "label": "Hostel-No-7"
     },
     {
          "value": "Central-Library",
          "label": "Central-Library"
     },
     {
          "value": "Aeronautical-Engineering",
          "label": "Aeronautical-Engineering"
     },
     {
          "value": "K.R.E.S.I.T/Gulmohar",
          "label": "K.R.E.S.I.T/Gulmohar"
     },
     {
          "value": "Tanse-House",
          "label": "Tansa-House"
     },
     {
          "value": "Lake_Side_Gate_U",
          "label": "Lake_Side_Gate_U"
     },

     {
          "value": "Hostel_15",
          "label": "Hostel_15"
     },
     {
          "value": "Campus_Hub",
          "label": "Campus_Hub"
     },
     {
          "value": "Hostel-No-3",
          "label": "Hostel-No-3"
     },
     {
          "value": "Hostel_10_kvroad",
          "label": "Hostel_10_kvroad"
     },
     {
          "value": "Hostel_10_maingate",
          "label": "Hostel_10_maingate"
     },
     {
          "value": "White_House",
          "label": "White_House"
     },
     {
          "value": "QIP",
          "label": "QIP_U"
     },
     {
          "value": "New_QIP",
          "label": "NEW_QIP_U"
     }
     
],
            }, {
                "id": "foaf:DemandPersonLocation",
                "type": "choice",
                "property": "http://xmlns.com/foaf/0.1/DemandPersonLocation",
                "label": {
                    "en": "Number of passengers at the stop"
                },
                "description": {
                    "en": "Number of passengers at the stop"},
                "choices": [
    		   {
      			"value": "0",
      			"label": {
        		"en": "Empty stop"
      			}
    		   },{
      			"value": "1 to 5",
      			"label": {
        		"en": "Between 1 to 5"
      			}
    		   },{
			"value":"6 to 10",
			"label" : {"en":"Between 6 to 10"}
		   },{	
			"value":"11 to 20",
			"label": {"en" : "Between 11 to 20"}
	           },
			   {	
			"value":"21 and over",
			"label": {"en" : "Over 21"}
	           }
  	   	],
  		"cardinality": {
    			"min": 1,
    			"pref": 1,
    			"max": 1
  		},
  		"nodetype": "ONLY_LITERAL",
  		"styles": [
    			"dropDown"
  		]
	    },
	    
	      {		"id":"foaf:name",
                        "type": "text",
                        "nodetype": "ONLY_LITERAL",
                        "label": { "en": "Your Name" },
                        "property": "http://xmlns.com/foaf/0.1/name",
                        "cardinality": { "min": 1, "max": 1 },
                        
                 },{
                       "id":"foaf:account",
                        "property": "http://xmlns.com/foaf/0.1/account",
                        "label": {
                        "en": "Your e-mail address"
                          },
                        "description": {
                            "en": "A personal mailbox, ie. an Internet mailbox associated with exactly one owner, the first owner of this mailbox. This is a 'static inverse functional property', in that  there is (across time and change) at most one individual that ever has any particular value for foaf:mbox."
                        },
                        "type": "text",
                        "nodetype": "ONLY_LITERAL",
                        "cardinality": { "min": 1, "pref": 1, "max": 1 }
                        
             }
	    
	    
	    
        ]}
    ]};
	
	
var eventTemplate = {
        "root": "Event",
        "templates": [{
            "id": "Event",
            "type": "group",
            "content": [
            {
                "id": "dcterms:dateStart",
                "property": "http://purl.org/dc/terms/dateStart",
                "label": {
                    "en": "Date of start of event"
                },
                "description": {
                    "en": "Date and time of start of event."
                },
                "type": "text",
                "nodetype": "DATATYPE_LITERAL",
                "datatype": "http://www.w3.org/2001/XMLSchema#date",
                "cardinality": {
                    "min": 1,
                    "pref": 1
                }
            }, {
                "id": "dcterms:dateEnd",
                "property": "http://purl.org/dc/terms/dateEnd",
                "label": {
                    "en": "Date of end of event"
                },
                "description": {
                    "en": "Date and time of the end of event."
                },
                "type": "text",
                "nodetype": "DATATYPE_LITERAL",
                "datatype": "http://www.w3.org/2001/XMLSchema#date",
                "cardinality": {
                    "min": 1,
                    "pref": 1
                }
            }, {
                "id": "dcterms:title",
                "type": "text",
                "property": "http://purl.org/dc/terms/title",
                "label": {
                    "en": "Event Name"
                },
                "description": {
                    "en": "Name of the event"},
                
  		"cardinality": {
    			"min": 1,
    			"pref": 1,
    			"max": 1
  		},
  		"nodetype": "ONLY_LITERAL"
	    },
	   {
		"id":"foaf:homepage",
		"type":"text",
		"property":"http://xmlns.com/foaf/0.1/homepage",
		"nodetype":"URI",
		"label":{"en":"Website Address"},
		"description":{"en":"Event Website"},
		"cardinality": {
    			"min": 1,
    			"pref": 1,
    			"max": 1
  		}
	   }, {    "id":"dc:title",
	                  "type": "text",
                     "nodetype":"ONLY_LITERAL",
                     "property": "http://purl.org/dc/terms/abstract",
                     "cardinality": { "min": 1, "pref": 1, "max": 2 },
                     "label": { "en": "About the Event"},
                     "description": { "en": "Details about the event" },
                     "styles":["multiline"]
		        },{
	     "id":"dcterms:title",
	     "type": "choice",
	    "property": "http://purl.org/dc/terms/titleEvent",
		"label" :{ "en" : "Level of Event"},
		"description":{ "en":"Dept. to which the event is associated with"},
		"cardinality": {
    			"min": 1,
    			"pref": 1,
    			"max": 1
  		},
  		"nodetype": "ONLY_LITERAL",
		"choices": [
    		   {
      			"value": "IIT - Related",
      			"label": {
        		"en": "IIT - Related"
      			}
    		   },{
      			"value": "SOM - Related",
      			"label": {
        		"en": "SOM - Related"
      			}
    		   },{
			"value":"Aerospace Engineering Dept. Related",
			"label" : {"en":"Aerospace Engineering Dept. Relate"}
		   },{	
			"value":"Biosciences and Bioengineering Dept. Related",
			"label": {"en" : "Biosciences and Bioengineering Dept. Related"}
	           },{
			"value":"Chemical Engineering Dept. Related",
			"label" : {"en":"Chemical Engineering Dept. Related"}
		   },{
			"value":"Civil Engineering Dept. Related",
			"label" : {"en":"Civil Engineering Dept. Related"}
		   },{
			"value":"Computer Science and Engineering Dept. Related",
			"label" : {"en":"Computer Science and Engineering Dept. Related"}
		   },{
			"value":"Chemistry Dept. Related",
			"label" : {"en":"Chemistry Dept. Related"}
		   },{
			"value":"Earth Science Dept. Related",
			"label" : {"en":"Earth Science Dept. Related"}
		   },{
			"value":"Electrical Engineering Dept. Related",
			"label" : {"en":"Electrical Engineering Dept. Related"}
		   },{
			"value":"Energy Science and Engineering Dept. Related",
			"label" : {"en":"Energy Science and Engineering Dept. Related"}
		   },{
			"value":"Humanities and Social Science Related",
			"label" : {"en":"Humanities and Social Science Dept. Related"}
		   },{
			"value":"Industrial Design Center Related",
			"label" : {"en":"Industrial Design Center Related"}
		   },{
			"value":"Mathematics Dept. Related",
			"label" : {"en":"Mathematics Dept. Related"}
		   },{
			"value":"Mechanical Engineering Dept. Related",
			"label" : {"en":"Mechanical Engineering Dept. Related"}
		   },{
			"value":"Mettalurgical Engineering and Material Science Dept. Related",
			"label" : {"en":"Mettalurgical Engineering and Material Science Dept. Related"}
		   },{
			"value":"Physics Dept. Related",
			"label" : {"en":"Physics Dept. Related"}
		   }
  	   	],
		"styles": [
    			"dropDown"
  		]
	   }
        ]}
    ]};	