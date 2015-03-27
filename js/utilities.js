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
   $(rdformDiv).fadeIn('slow');
    $(submitButton).fadeIn('slow');
}


function hideForm(){
   $(rdformDiv).fadeOut('slow');
    $(submitButton).fadeOut('slow');
}




