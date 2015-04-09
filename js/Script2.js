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

 function initialize() {
           getEvents();
           getQA();
           tumtumTrack();
           getData();
           getDisrupt();
       }
       function getData() {

           var demandQuery = "http://crowddata.abdn.ac.uk/query/sparql?callback=?&format=json&query= SELECT ?Location ?Demand ?Date \
                                                    WHERE\
                                                    { \
                                                     GRAPH <http://crowddata.abdn.ac.uk/datasets/demand/data/> {\
													?resource <http://purl.org/dc/terms/date> ?Date .\
											OPTIONAL { ?resource <http://xmlns.com/foaf/0.1/DemandPersonLocation> ?Demand }\
											OPTIONAL { ?resource <http://purl.org/dc/terms/Location> ?Location }\
                                                    }\
                                                    } ORDER BY DESC(?Date)";

           console.log(demandQuery);
           $.ajax({
               dataType: "jsonp",
               url: demandQuery,
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
                       document.getElementById("tumtum-demand-number").innerHTML = "Last couple of week" + simCount;
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
                       return "Last week" + demands[index] + " groups of 21 or more";
                   else
                       return "Last week" + demands[index] + " group of 21 or more";
               }
               else if (index == 3) {
                   if (demands[index] > 1)
                        return "Last week" + demands[index] + "groups of 11 to 20";
                    else
                        return "Last week" + demands[index] + "group of 11 to 20";
               }
               else if (index == 2){
                   if (demands[index] > 1)
                        return "Last week" + demands[index] + "groups of 6 to 10";
                    else
                        return "Last week" + demands[index] + "group of 6 to 10";
               }
               else if (index == 1){
                   if (demands[index] > 1)
                        return "Last week" + demands[index] + "groups of 1 to 5";
                    else
                        return "Last week" + demands[index] + "group of 1 to 5";
               }
               else
                   return generalCount;
               
            
       }
       function tumtumTrack() {
           var url = 'proxyCheck.php?url=http%3A%2F%2Ftransittripplanner.co.in%2FVIS_2%2Ftrack&full_headers=1&full_status=1';
           $.ajax({
               url: url,
               success: function (data) {
                   var MainData = data["contents"].toString().split("$", 2);
                   document.getElementById("tumtum-tracker-number").innerHTML = MainData[1];
               }
           });
       }
       
       function getQA() {

           var qaUrl = "http://crowddata.abdn.ac.uk/query/sparql?callback=?&format=json&query= select count(?question) where { \
                                        GRAPH <http://crowddata.abdn.ac.uk/datasets/questions/data/>   {\
                                                                    ?question <http://purl.org/dc/terms/created> ?time.\
                        }\
                }";
           $.ajax({
               dataType: "jsonp",
               url: qaUrl,
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
           var eventQuery = "select count(?event) where {\
                                    GRAPH <http://crowddata.abdn.ac.uk/datasets/events/data/> {\
                                    ?event <http://purl.org/dc/terms/dateStart> ?start.\
                                }\
                                }\
                            ";

           var eventUrl = "http://crowddata.abdn.ac.uk/query/sparql?callback=?&format=json&query=" + escape(eventQuery);
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
           var disruptQuery = "SELECT  count(?disrupt)\
                                                    WHERE\
                                                    { \
                                                     GRAPH <http://crowddata.abdn.ac.uk/datasets/disruption/data/> {\
                                                     ?disrupt <http://purl.org/dc/terms/date> ?Occurence_At ;\
														                                                    }\
                                                    } ORDER BY DESC(?Occurence_At)";
           var disruptUrl = "http://crowddata.abdn.ac.uk/query/sparql?callback=?&format=json&query=" + escape(disruptQuery);
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