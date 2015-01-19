<!DOCTYPE html>

<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <title>Benedict</title>
        <link rel="stylesheet" href="<?=$base_url?>public/css/bootstrap.css" />
        <link rel="stylesheet" href="<?=$base_url?>public/css/custom.css" />
        <link rel="stylesheet" href="<?=$base_url?>public/css/application.css" />
        
		<style type="text/css">

			#main_container {
				padding-top:60px;
			}

			#main_container form {
				margin:auto;
				width:300px;
			}
			
			#main_container form fieldset {
				margin:auto;
				width:230px;
			}
			
			#header a {
				color: white;
				float: right;
				line-height: 43px;
			}
			
			#content {

				width:auto;

			}

        </style>

    </head>
    
    <body>
			
    	<div id="header">
	    	<h1>Benedict</h1>
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
									<label>E-mail</label>
									<input value="" name="email">
								</div>
								<div class='control-group <?=$input_class?>'>
									<label>Contrase&ntilde;a</label>
									<input type='password' value="" name="password">
								</div>
								<div>
									<input class='btn btn-primary' type="submit" value="Login">
									<a href="<?=$recover_password_url?>" class="btn btn-warning" style="margin-left:16px;">Olvid&eacute; mi contrase&ntilde;a</a>
								</div>
							</fieldset>
						</form>
					</div>
	  		</div>
        </div>
    </body>
</html>
