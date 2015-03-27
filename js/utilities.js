var errorDiv='#errorDiv';
var rdformDiv='#onlyrdform';
var submitButton='#submitButton';
function showError(message){
$(errorDiv).html(message).fadeIn('slow');
}
function hideError(){
    $(errorDiv).fadeOut('slow');
}

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




