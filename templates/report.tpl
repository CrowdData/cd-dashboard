<html>

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>[@pageTitle]</title>

    <!-- Bootstrap -->
    <link href="css/bootstrap.min.css" rel="stylesheet">
    <link href="css/dashboard-general.css" rel="stylesheet">
    <link href="css/dashboard-[@datasetID].css" rel="stylesheet">
    <meta http-equiv="content-type" content="text/html; charset=UTF-8">
    <link type="text/css" href="release/dijit/themes/claro/claro.css" rel="stylesheet" />
    <link type="text/css" href="release/rdforms/view/resources/rdforms.css" rel="stylesheet" />

    <style>
        @import "release/dijit/themes/claro/claro.css";
    </style>

    [@analytics]
</head>

<body class="loading">

    [@menu]
    <div class="container-fluid data-display-header shadow">
        <div class="container">
            <h1 class="data-display capitalize">[@headerContent]</h1>

        </div>
    </div>
    <div class="main container">
        <div>[@templateMessage]</div>
        <div id='onlyrdform' class="claro shadow"></div>
        <button class="btn btn-info shadow" id='submitButton' onclick='submit();'>[@button]</button>
        <div id="errorDiv" class="alert alert-danger"></div>
        <div id="graph"></div>
    </div>


    <div class="container-fluid data-display-footer shadow">

    </div>
    <div class="modal"></div>
    <script src="js/jquery-1.11.2.min.js"></script>
    <script src="release/dojo/dojo.js"></script>
    <script src="js/bootstrap.min.js"></script>
    <script src="js/loader.js"></script>
    <script src="js/rdform/rdforms.js"></script>
    <script src="js/utilities.js"></script>
    <script type="text/javascript">
        // When the page is ready, load the data
        $(document).ready(function () {
            init("[@templateID]", "[@datasetID]");
        });
    </script>
</body>




</html>