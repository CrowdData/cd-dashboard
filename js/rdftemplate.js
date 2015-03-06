
		function Templates(){
	this.url="url/to/templates";
	
	};

	Templates.prototype.getTemplate=function(datasetID){
	if(datasetID==="demand"){
		return demandTemplate;
	}
	else if (datasetID==="feedback"){
	return feedbackTemplate;
	}
	else if (datasetID==="disruption"){
	return disruptionTemplate;
	}
	};
	
	var TemplateProvider =new Templates();
	
	
	var feedbackTemplate = {
          "root": "feedback",
         "templates": [{
             "id": "feedback",
             "type": "group",
             "content": [
                 {
                        "type": "text",
                        "nodetype": "ONLY_LITERAL",
                        "label": { "en": "Name" },
                        "property": "http://purl.org/dc/terms/creator",
                        "cardinality": { "min": 1, "max": 1 },
                        "constraints": { "http://www.w3.org/TR/rdf-schema/type": "http://xmlns.com/foaf/0.1/Person" },
                        
                 },{
                       "id":"foaf:account",
                        "property": "http://xmlns.com/foaf/0.1/account",
                        "label": {
                        "en": "Email"
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
                     "cardinality": { "min": 1, "pref": 1, "max": 2 },
                     "label": { "en": "Enter Feedback" },
                     "description": { "en": "Enter Feedback" },
                     "styles":["multiline"]
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
                     "cardinality": { "min": 1, "pref": 1, "max": 5 },
                     "label": { "en": "Distruption" },
                     "description": { "en": "Enter Distruption" }
                 },{
		                "id":"foaf:depiction",
		                "type":"text",
                        "nodetype":"URI",
		                "property":"http://xmlns.com/foaf/0.1/depiction",
                        "cardinality":{ "min" : 0, "pref" : 1, "max" : 5},
                        "label" : {"en": "Distruption Image"},
		                "description": {"en":"A photo of the the distruption"}
		        },{
                        "id": "dcterms:date",
                        "property": "http://purl.org/dc/terms/date",
                        "label": {
                            "en": "Date"
                        },
                        "description": {
                            "en": "Date of occurence."
                        },
                        "type": "text",
                        "nodetype": "DATATYPE_LITERAL",
                        "datatype": "http://www.w3.org/2001/XMLSchema#date",
                        "cardinality": { "min": 1, "max": 1 }
                 },{
                            "id":"foaf:based_near",
                            "type": "choice",
                            "property": "http://www.w3.org/2003/01/geo",
                            "label": { "en": "Nearest Bus Stop" },
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
                "type": "choice",
                "nodetype": "Only_Literal",
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
                "cardinality": { "min": 1, "pref": 1, "max": 1 }
            }, {
                "id": "foaf:DemandPersonLocation",
                "type": "choice",
                "property": "http://xmlns.com/foaf/0.1/DemandPersonLocation",
                "label": {
                    "en": "Demand at the stop"
                },
                "description": {
                    "en": "Demand at each stop"},
                "choices": [
    		   {
      			"value": "None",
      			"label": {
        		"en": "None"
      			}
    		   },{
      			"value": "Few",
      			"label": {
        		"en": "Few"
      			}
    		   },{
			"value":"Little Crowded",
			"label" : {"en":"Little Crowded"}
		   },{	
			"value":"Very Crowded",
			"label": {"en" : "Very Crowded"}
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
	    }
        ]}
    ]};