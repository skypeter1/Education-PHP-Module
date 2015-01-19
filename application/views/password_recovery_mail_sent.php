<!DOCTYPE html>

<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <title>Aureole - Cambio de contraseña</title>
        <link rel="stylesheet" href="<?=$base_url?>public/css/bootstrap.css" />
        <link rel="stylesheet" href="<?=$base_url?>public/css/custom.css" />
        
		<style type="text/css">
			#main_container form {
				margin:auto;
				width:300px;
			}
			
			#main_container form fieldset {
				margin:auto;
				width:230px;
			}
        </style>

    </head>
    
    <body>
			
    	<div id="header">
	    	<h1>Aureole</h1>
	    	
	    </div>

		<div class="container-fluid" id="content">
	  		<div class="row-fluid">
	    		<div class="span2">
	 
	    		</div>

	    		<div class="span10" style="position:relative;">
	
					<div id='main_container' class="container">
							<div class="alert alert-success">Le hemos enviado un correo electrónico, por favor compruebe su bandeja de entrada. <a href="<?=$login_url?>">volver</a></div>
					</div>
	  		</div>
		</div>
    </body>
</html>