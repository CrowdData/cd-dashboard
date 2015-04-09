
var errorDiv='#errorDiv';
var successDiv='#successDiv';
var rdformDiv='#onlyrdform';
var submitButton='#submitButton';
function showError(message){
    hideSuccess();
$(errorDiv).html("<span class='glyphicon glyphicon-remove-sign'></span> "+ message).fadeIn('slow');
}
function hideError(){
    $(errorDiv).fadeOut('slow');
}
function showSuccess(message){
    hideError();
    $(successDiv).html("<span class='glyphicon glyphicon-ok-sign'></span> "+ message).fadeIn('slow');
    
};
function hideSuccess(){
   $(successDiv).fadeOut('slow');
};

function showLoading(message){
    $('body').addClass('loading');
}


function hideLoading(){
$('body').removeClass('loading');
} 

function showForm(message){

   $(rdformDiv).animate({"opacity":1});
    $(submitButton).animate({"opacity":1});
}


function hideForm(){
   $(rdformDiv).animate({"opacity":0});
    $(submitButton).animate({"opacity":0});
}


function postAjax(url, type, headers, data, successF, errorF) {
    $.ajax({
        url: url,
        type: "POST",
        headers: headers,
        data: JSON.stringify(data),
        contentType: type,
        success: successF,
        error: errorF
    });
};

function getDateTime(){
   return new Date().getTime();
}

var generateUid = function (separator) {
    /// <summary>
    ///    Creates a unique id for identification purposes.
    /// </summary>
    /// <param name="separator" type="String" optional="true">
    /// The optional separator for grouping the generated segmants: default "-".    
    /// </param>

    var delim = separator || "-";

    function S4() {
        return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    }

    return (S4() + S4() + delim + S4() + delim + S4() + delim + S4() + delim + S4() + S4() + S4());
};


function getDateTime(){
   return new Date().getTime();
}

function createCookie(name, value, days) {
    var expires;

    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toGMTString();
    } else {
        expires = "";
    }
    document.cookie = encodeURIComponent(name) + "=" + encodeURIComponent(value) + expires + "; path=/";
}

function readCookie(name) {
    var nameEQ = encodeURIComponent(name) + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) === ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) === 0) return decodeURIComponent(c.substring(nameEQ.length, c.length));
    }
    return null;
}

function eraseCookie(name) {
    createCookie(name, "", -1);
}
//create cookie on load
if(readCookie('userid')==null){
   // alert("userid is null");
   createCookie('userid',generateUid(),365);
}
else{
  //  alert("cookie="+readCookie('userid'));
}

       
//http://www.experts-exchange.com/Programming/Languages/Scripting/JavaScript/Q_21889287.html           

function parseXSDDateString(dateString) {
  var Zp=(dateString.charAt(10)=="T")?19:10;
  var xDate = new Date(dateString.substr(0,Zp).replace(/-/g,'/').replace("T"," "));
  if(dateString.length>Zp){
    xDate.setMinutes(xDate.getMinutes()+xDate.getTimezoneOffset());
    if(dateString.charAt(Zp)!="Z"){
      var tZ = dateString.substr(Zp).split(":");
      tZ=tZ[0]*60+(tZ[1]*1);
      xDate.setMinutes(xDate.getMinutes()+tZ);
    }
  }
  return xDate;
}
  function isUrl(s) {
var regexp = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/
return regexp.test(s);
}
function styleType(value){
    var date=parseXSDDateString(value);
    if ( date.toString().indexOf("Invalid Date")==-1) {
        return date.toLocaleString();
    }

     if(/^\d\d\d\d-\d\d-[\d]+/.test(value)){
    console.log("DATE ONLY=="+value);
                return (new Date(value).toLocaleDateString());
     }
     if(isUrl(value)){
         var aTag=$('<a>',{href:value});
         aTag.text(value);
         return aTag.prop('outerHTML');
     }
    return value.replace(/-|_/g," ");
    }






