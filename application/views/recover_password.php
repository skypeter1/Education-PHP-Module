<!DOCTYPE html>

<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <title>Aureole - Recuperación de contraseña</title>
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
	    		
	    		<div class="span12" style="position:relative;">
	
					<div id='main_container' class="container">
						
						<form method="post" action="" class="well login_form">
							<?php if($feedback != ""){?>
							<div class="alert alert-error"><?=$feedback?></div>
							<?php }?>
							
							<fieldset>	
								<div class='control-group <?=$input_class?>'>
									<label>Email</label>
									<input value="" name="email">
								</div>
								<div>
									<input class='btn btn-primary' type="submit" value="Enviar">
								</div>
							</fieldset>
							<div style="text-align:center; padding:10px;">Confirme su e-mail para recibir un mensaje de cambio de contraseña </div>
						</form>
					</div>
	  		</div>
		</div>
    </body>
</html>