
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Register IITB Life</title>

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


    <p>Before using IITB Life, we require to check that you are a person with a valid email address.  Please enter your name and email address using the form below.  We’ll then send you an email with a link for you to confirm your registration.</p>

    <p>Already registered and wondering why you’re seeing this page? We use cookies to keep track of your registration; so if you are seeing this page, we cannot find our cookie on your device. This could be because you have recently deleted the cookies from your web browser. Apologies about that; please complete the form below again, and we’ll soon have you back using IIT Life.</p>

    <hr/>
  <form>
    <div class="form-group">
        <label class="control-label" for="name">Name:</label>
        <div class="input-group">
            <span class="input-group-addon">Name</span>
            <input class="form-control" placeholder="Enter your name" name="name" id="name" type="text" />
        </div>
    </div>
        
    <div class="form-group">
        <label class="control-label" for="email">Email to send registration link to:</label>
        <div class="input-group">
            <span class="input-group-addon">Email</span>
            <input class="form-control" placeholder="john.smith@example.com" name="email" id="email" type="text"/>
        </div>
    </div>
       <button id="submit" type="submit" class="btn btn-primary">Register</button>
    </form>
     <div id="successDiv" class="alert alert-success"></div>
     <div id="errorDiv" class="alert alert-error"></div>
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
                $("form").validate({
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
                                         $.ajax({  
        type:"POST",        
        url: "http://crowddata.abdn.ac.uk/test/1/user/create?callback=?",  
        data: $('form').serialize(), 
        success: function(result)
        { 
            $('#email').attr('disabled','');
            $('#name').attr('disabled','');
            $('#submit').attr('disabled','');
           showSuccess(result);
          
         },
         error: function(error){
             showError(error);
         }

    }); 
                    }
                });
            });
            
        </script>

</body>


</html>