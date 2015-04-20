 var prefixes = "PREFIX dc: <http://purl.org/dc/elements/1.1/>\
                                                        PREFIX db: <http://crowddata.abdn.ac.uk:8080/d2rq/resource>\
                                                        PREFIX geo: <http://www.w3.org/2003/01/geo/wgs84_pos#>\
                                                        PREFIX meta: <http://www4.wiwiss.fu-berlin.de/bizer/d2r-server/metadata#>\
                                                        PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\
                                                        PREFIX time: <http://www.w3.org/TR/owl-time/>\
                                                        PREFIX naptan: <http://transport.data.gov.uk/def/naptan/>\
                                                        PREFIX d2r: <http://sites.wiwiss.fu-berlin.de/suhl/bizer/d2r-server/config.rdf#>\
                                                        PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\
                                                        PREFIX foaf: <http://xmlns.com/foaf/0.1/>\
                                                        PREFIX map: <http://crowddata.abdn.ac.uk:8080/d2rq/resource/#>\
                                                        PREFIX owl: <http://www.w3.org/2002/07/owl#>\
                                                        PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>\
                                                        PREFIX vocab: <http://crowddata.abdn.ac.uk:8080/d2rq/resource/vocab/>\
                                                        PREFIX event: <http://purl.org/NET/c4dm/event.owl#>\
                                                        PREFIX cdi: <http://crowddata.abdn.ac.uk/def/incidents/>\
														PREFIX sioc: <http://rdfs.org/sioc/ns#>\
														PREFIX dcterms: <http://purl.org/dc/terms/>\
                                                        PREFIX prov: <http://www.w3.org/ns/prov#>\
                                                        PREFIX inc: <http://crowddata.abdn.ac.uk/def/incidents/>\
                                                        PREFIX cde: <http://crowddata.abdn.ac.uk/def/events/>\
                                                        PREFIX events: <http://crowddata.abdn.ac.uk/def/events/>\
                                                        PREFIX cd: <http://crowddata.abdn.ac.uk/ontologies/cd/0.1/>\  ";

var construct = "CONSTRUCT {?instance a cdi:Incident .}";
 function initialize() {
           getEvents();
           getQA();
           tumtumTrack();
           getData();
           getDisrupt();
       }
       function getData() {
           var demQuery="SELECT ?Location ?Demand ?Date \
                                                    WHERE\
                                                    { \
                                                     GRAPH <http://crowddata.abdn.ac.uk/datasets/demandv2/data/> {\
													?resource  <http://www.w3.org/1999/02/22-rdf-syntax-ns#type>  cd:Demand;\
                                                    <http://purl.org/dc/terms/date> ?Date .\
											OPTIONAL { ?resource <http://crowddata.abdn.ac.uk/def/demand/demandLevel> ?Demand }\
											OPTIONAL { ?resource  <http://crowddata.abdn.ac.uk/def/demand/hasLocationLabel> ?Location }\
                                                    }\
                                                    } ORDER BY DESC(?Date)";

           var url = "http://crowddata.abdn.ac.uk/query/sparql?callback=?&format=json&query="+escape(prefixes+demQuery);
           console.log(url);
           $.ajax({
               dataType: "jsonp",
               url: url,
               success: function (data) {
                   var result = "";
                   var countDem = 0;
                   var simCount = 0;
                   var count = [0, 0, 0, 0, 0, 0];
                   var bindings = data.results.bindings;
                   var demUnique = [];
                   for (var i in bindings) {
                       var demandData = data.results.bindings[i];
                       var endD = parseXSDDateString(demandData["Date"]["value"]);
                       var today = new Date;
                       var val = Date.daysBetween(endD, today);
                       simCount = simCount + 1;
                
                       if (val <= 7) {
                           countDem = countDem + 1;
                           demUnique.push(demandData["Demand"]["value"]);


                       }

                   }
                   if (demUnique.length > 0)
                       for (var i in demUnique) {
                           if (demUnique[i] == "21 and over")
                               count[4] = count[4] + 1;
                           else if (demUnique[i] == "11 to 20")
                               count[3] = count[3] + 1;
                           else if (demUnique[i] == "6 to 10")
                               count[2] = count[2] + 1;
                           else if (demUnique[i] == "1 to 5")
                               count[1] = count[1] + 1;
                           else if (demUnique[i] == "0")
                               count[0] = count[0] + 1;
                           else
                               console.log(demUnique[i])
                           result = getStringVal(count, countDem);
                           document.getElementById("tumtum-demand-number").innerHTML = result;
                       }
                   else {
                       document.getElementById("tumtum-demand-number").innerHTML = "Last two weeks " + simCount;
                   }
                   //    document.getElementById("distinctDemand").innerHTML = countDemUni;
               },


               error: function (xhr, textStatus, errorThrown) {
                   alert("Error:" + textStatus); alert("Error" + errorThrown);
               }

           });

       };
       function getStringVal(demands, generalCount) {
           var maxCount = 0;
           var index = 0;
           var i;
           for (i = 0; i < 5; i++)
               if (demands[i] >= maxCount)
               {
                   index = i;
                   maxCount = demands[i];
                   console.log(maxCount);
               }

               if (index == 4) {
                   if (demands[index] > 1)
                       return "Last week <br/><span class=\"tile-number\">" + demands[index] + "</span><br/> groups of 21 or more";
                   else
                       return "Last week <br/><span class=\"tile-number\">" + demands[index] + "</span><br/> group of 21 or more";
               }
               else if (index == 3) {
                   if (demands[index] > 1)
                        return "Last week <br/><span class=\"tile-number\">" + demands[index] + "</span><br/> groups of 11 to 20";
                    else
                        return "Last week <br/><span class=\"tile-number\">" + demands[index] + "</span><br/> group of 11 to 20";
               }
               else if (index == 2){
                   if (demands[index] > 1)
                        return "Last week <br/><span class=\"tile-number\">" + demands[index] + "</span><br/> groups of 6 to 10";
                    else
                        return "Last week <br/><span class=\"tile-number\">" + demands[index] + "</span><br/> group of 6 to 10";
               }
               else if (index == 1){
                   if (demands[index] > 1)
                        return "Last week <br/><span class=\"tile-number\">" + demands[index] + "</span><br/> groups of 1 to 5";
                    else
                        return "Last week <br/><span class=\"tile-number\">" + demands[index] + "</span><br/> group of 1 to 5";
               }
               else
                   return generalCount;
               
            
       }
       function tumtumTrack() {
           var unavailable="Currently unable to determine how many TumTums are being tracked as the service is unavailable.";
           var url = 'proxyCheck.php?url=http%3A%2F%2Ftransittripplanner.co.in%2FVIS_2%2Ftrack&full_headers=1&full_status=1';
           $("#tumtum-tracker-number").html("<img src=css/images/loading.gif></img>");
           $.ajax({
               url: url,
               timeout:10000,
               success: function (data) {
            
                   var MainData = data["contents"].toString().split("$", 2);
                    if(MainData[1]){
                   document.getElementById("tumtum-tracker-number").innerHTML = MainData[1];
                   }
                   else{
                         $(".tumtum-location-tile").html(unavailable);                                                 
                   }
               },
               error:function(){
                   $(".tumtum-location-tile").html(unavailable);
               }
           });
       }
       
       function getQA() {
           var questionQuery=" select count(?question) FROM <http://crowddata.abdn.ac.uk/datasets/questionsv2/data/> FROM <http://crowddata.abdn.ac.uk/datasets/users/data/> where { \
                                           ?question a cd:Question ;\
                                            prov:wasAttributedTo ?user .\
                                            ?user foaf:name ?name .\
                }";
           var qaUrl = 
           $.ajax({
               dataType: "jsonp",
               url:"http://crowddata.abdn.ac.uk/query/sparql?callback=?&format=json&query="+escape(prefixes +questionQuery),
               success: function (data) {
                   var countQues = 0;

                   var bindings = data.results.bindings;

                   for (var i in bindings) {
                       var demandData = data.results.bindings[i];
                       countQues = demandData[".1"]["value"];

                   }
                   document.getElementById("questions-number").innerHTML = countQues;

               },


               error: function (xhr, textStatus, errorThrown) {
                   alert("Error:" + textStatus); alert("Error" + errorThrown);
               }

           });

       }
       function getEvents() {
           var eventQuery = "select count(?instance) where {\
                                    GRAPH <http://crowddata.abdn.ac.uk/datasets/eventsv2/data/> {\
                                    ?instance a cde:IITBEvent;\
                                        dcterms:title ?title.\
                                }\
                                }\
                            ";

           var eventUrl = "http://crowddata.abdn.ac.uk/query/sparql?callback=?&format=json&query=" + escape(prefixes + eventQuery);
           $.ajax({
               dataType: "jsonp",
               url: eventUrl,
               success: function (data) {
                   var countQues = 0;

                   var bindings = data.results.bindings;

                   for (var i in bindings) {
                       var demandData = data.results.bindings[i];
                           countQues = demandData[".1"]["value"];

                   }
                   document.getElementById("events-number").innerHTML = countQues;
               },


               error: function (xhr, textStatus, errorThrown) {
                   alert("Error:" + textStatus); alert("Error" + errorThrown);
               }

           });
       }
       Date.daysBetween = function (date1, date2) {
           //Get 1 day in milliseconds
           var one_day = 1000 * 60 * 60 * 24;

           // Convert both dates to milliseconds
           var date1_ms = date1.getTime();
           var date2_ms = date2.getTime();

           // Calculate the difference in milliseconds
           var difference_ms = date2_ms - date1_ms;

           // Convert back to days and return
           return Math.round(difference_ms / one_day);
       }

       function getDisrupt() {
           var disruptQuery = "SELECT  count(?instance)\
                                                    WHERE\
                                                    { \
                                                     GRAPH <http://crowddata.abdn.ac.uk/datasets/incidents/data/> {\
                                                     ?instance a cdi:Incident ;\
														                                                    }\
                                                    } ";
           var disruptUrl = "http://crowddata.abdn.ac.uk/query/sparql?callback=?&format=json&query=" + escape(prefixes + disruptQuery);
           console.log(disruptUrl);
           $.ajax({
               dataType: "jsonp",
               url: disruptUrl,
               success: function (data) {
                   var countQues = 0;
                   var bindings = data.results.bindings;
                   for (var i in bindings) {
                       var demandData = data.results.bindings[i];
                       countQues = demandData[".1"]["value"];

                   }
                   document.getElementById("disruptions-number").innerHTML = countQues;
               },


               error: function (xhr, textStatus, errorThrown) {
                   alert("Error:" + textStatus); alert("Error" + errorThrown);
               }

           });
       }
       
       function getFeedback() {
           var feedbackQuery = "SELECT    count(?Feedback) \
                                                    WHERE\
                                                    { \
                                                     GRAPH <http://crowddata.abdn.ac.uk/datasets/feedbackv2/data/> {\
                                                     ?Feedback a cd:Feedback .\
                                                    }\
                                                    }";
           var feedbackUrl = "http://crowddata.abdn.ac.uk/query/sparql?callback=?&format=json&query=" + escape(prefixes+ feedbackQuery);
           console.log(feedbackUrl);
           $.ajax({
               dataType: "jsonp",
               url: feedbackUrl,
               success: function (data) {
                   var countQues = 0;
                   var bindings = data.results.bindings;
                   for (var i in bindings) {
                       var feedbackData = data.results.bindings[i];
                       countFeedback = feedbackData[".1"]["value"];

                   }
                   document.getElementById("feedback-number").innerHTML = countFeedback;
               },


               error: function (xhr, textStatus, errorThrown) {
                   alert("Error:" + textStatus); alert("Error" + errorThrown);
               }

           });
       }
