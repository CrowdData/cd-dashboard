
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Register for IITB Life</title>

    <!-- Bootstrap -->
    <link href="css/bootstrap.min.css" rel="stylesheet">
    <link href="css/dashboard-general.css" rel="stylesheet">
    <link href="css/dashboard-home.css" rel="stylesheet">

      
    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>-->
[@analytics]
    </head>
<body>
[@menu]
      <div class="container-fluid data-display-header">
          <div class="container">        
    <h2>Welcome to IITB Life, your app to keep up-to-date with what’s happening on campus.</h2>
          </div>
      </div>
<div class="container">


    <p>Before using IITB Life, we require to check that you are a person with a valid email address.  Please enter your name and email address using the form below.  We’ll then send you an email with an activation code which you will need to input to activation form below in order to confirm your registration.</p>

    <hr/>
  <form id="register">
       <h3>Registration form</h3>
    <div class="form-group">
        <label class="control-label" for="name">Name:</label>
        <div class="input-group">
            <span class="input-group-addon">Name</span>
            <input class="form-control" placeholder="Enter your name" name="name" id="name" type="text" />
        </div>
    </div>
        
    <div class="form-group">
        <label class="control-label" for="email">Email</label>
        <div class="input-group">
            <span class="input-group-addon">Email</span>
            <input class="form-control" placeholder="john.smith@example.com" name="email" id="email" type="text"/>
        </div>
    </div>
    <div id="successDiv" class="alert alert-success"></div>
     <div id="errorDiv" class="alert alert-error"></div>
     <div >  <button id="submit" type="submit" class="btn btn-primary">Register</button><img id="loading-register" src="css/images/loading.gif"></div>
    </form>

    
    <hr/>
        <p>Already registered and wondering why you’re seeing this page? We use cookies to keep track of your registration; so if you are seeing this page, we cannot find our cookie on your device. This could be because you have recently deleted the cookies from your web browser. Apologies about that; please input your activation code to the form below and we’ll soon have you back using IITB Life. If you lost your Activation Code simply fill out the <a href='#register'>registration form</a> to send you new one.</p>
    <hr/>
      <form id="activation">
           <h3>Activation Form</h3>
    <div class="form-group">
        <label class="control-label" for="name">Activation Code</label>
        <div class="input-group">
            <span class="input-group-addon">Activation Code</span>
            <input class="form-control input-lg" placeholder="Your activation code" name="code" id="code" type="text" />
        </div>
    </div>
        
    <div class="form-group">
        <label class="control-label" for="email">Email</label>
        <div class="input-group">
            <span class="input-group-addon">Email</span>
            <input class="form-control" placeholder="your@registration.email" name="email2" id="email2" type="text"/>
        </div>
    </div>
     <div id="successDivA" style="display:none;" class="alert alert-success"></div>
     <div id="errorDivA" style="display:none" class="alert alert-warning"></div>
          <div><button id="submit-a" type="submit" class="btn btn-primary">Activate</button> <img id="loading-activate" src="css/images/loading.gif"></div>

    </form>
    <div style="height:2em"></div>
    </div>
    <!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>
    <!-- Include all compiled plugins (below), or include individual files as needed -->
    <script src="js/bootstrap.min.js"></script>
     <script src="js/utilities.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-validate/1.13.1/jquery.validate.min.js"></script>
   
        <script>
            // When the document is ready
            $(document).ready(function () {
                //validation rules
                $("#register").validate({
                    rules: {
                        email: {
                            required: true,
                            email: true
                        },  
                        name: {
                            required: true,
                            minlength: 5
                        } 
                    }, highlight: function(element) {
        $(element).closest('.form-group').addClass('has-error');
    },
    unhighlight: function(element) {
        $(element).closest('.form-group').removeClass('has-error');
    },
    errorElement: 'span',
    errorClass: 'help-block',
    errorPlacement: function(error, element) {
        if(element.parent('.input-group').length) {
            error.insertAfter(element.parent());
        } else {
            error.insertAfter(element);
        }
    },
                    submitHandler: function() {
                        $('#loading-register').show();
                                         $.ajax({  
        type:"POST",        
        url: "http://crowddata.abdn.ac.uk/crowddata/1/user/create?callback=?",  
        data: $('#register').serialize(), 
        success: function(result)
        { 
                 $('#loading-register').hide();
            //$('#email').attr('disabled','');
            //$('#name').attr('disabled','');
            //$('#submit').attr('disabled','');
           showSuccess(result);
          
         },
         error: function(error){
     $('#loading-register').hide();
             showError(error);
         }

    }); 
                    }
                });
                
                
      $("#activation").validate({
                    rules: {
                        code: {
                            required: true,
                        },  
                        email2: {
                            required: true,
                            email:true
                        } 
                    }, highlight: function(element) {
        $(element).closest('.form-group').addClass('has-error');
    },
    unhighlight: function(element) {
        $(element).closest('.form-group').removeClass('has-error');
    },
    errorElement: 'span',
    errorClass: 'help-block',
    errorPlacement: function(error, element) {
        if(element.parent('.input-group').length) {
            error.insertAfter(element.parent());
        } else {
            error.insertAfter(element);
        }
    },
                    submitHandler: function() {
                         $('#loading-activate').show();
                                         $.ajax({  
        type:"POST",        
        url: "http://crowddata.abdn.ac.uk/crowddata/1/user/validate?callback=?",  
        data: $('#activation').serialize(), 
        success: function(result)
        { 
           //storecookie
          //  createCookie('userid',result.id);
            $('#errorDivA').hide();
             $('#loading-activate').hide();
            createCookie('userid',result.additional);
            $('#submit-a').attr('disabled','');
           $('#successDivA').show().html(result.message);
          
         },
         error: function(error){
         $('#loading-activate').hide();
            $('#errorDivA').show().html(JSON.parse(error.responseText).message);
         }

    }); 
                    }
                });
                
                
            });
            
        </script>

</body>


</html>