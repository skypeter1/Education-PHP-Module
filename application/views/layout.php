<!DOCTYPE html>

<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <title>Benedict</title>
        <link rel="stylesheet" href="<?php echo $base_url; ?>public/css/bootstrap.css" />
        <link rel="stylesheet" href="<?php echo $base_url; ?>public/css/application.css" />
        <link rel="stylesheet" href="<?php echo $base_url; ?>public/css/custom.css" />
        <link rel="stylesheet" href="<?php echo $base_url; ?>public/css/jquery.tools.calendar.css" />
        <link rel="stylesheet" href="<?php echo $base_url; ?>public/css/print.css" media='print' />
	  	
	  	<script type="text/javascript" src="<?php echo $base_url; ?>public/js/client_app/build.js"></script>
	  									
		<script type='text/javascript'>
			document.help_vars = {};
			document.help_vars.base_url = "<?php echo $base_url; ?>";
			document.help_vars.current_user = <?php echo json_encode($current_user); ?>;
			document.help_vars.user_type = "<?php echo $current_user_type; ?>";
			document.help_vars.user_permissions = <?php echo $current_user_permissions; ?>;
			
			<?php if(isset($current_bodega)) {?>
				document.help_vars.current_bodega = <?=$current_bodega?>;
			<?php } ?>	
		
		</script>
        
    </head>
    
    <body>
		<div id="header">
	    	<h1>Benedict</h1>
	    	<div id="user-button" class="btn-group">
	    		<?php if ($current_user->rol != "administrador") { ?>
      			<a class="btn btn-mini username" href="<?=$user_url.$current_user->id?>">
      				<i class="icon-user icon-black"></i> <?=$current_user->email?>
      			</a>
      			<?php } else {?>
      				<span class="btn btn-mini username">
      					<i class="icon-user icon-black"></i> <?=$current_user->email?>
      				</span>
      			<?php } ?> 
	          	<a class="btn btn-mini dropdown-toggle" data-toggle="dropdown" href="#"><span class="caret"></span></a>
	          	<ul class="dropdown-menu pull-right">
	          		<?php if ($current_user->rol != "administrador") { ?>
	            	<li><a href="<?=$user_url.$current_user->id?>"><i class="icon-pencil"></i> Opciones usuario</a></li>
	            	<?php } ?>
	            	<li><a href="<?=$logout_url?>"><i class="icon-ban-circle"></i> Cerrar sesi&oacute;n</a></li>

	          	</ul>
	        </div>
	    </div>

		<div class="container-fluid" id="content">

		  	<div class="row-fluid">
		    	<div class="span2">
	         		<ul id='main_menu' class="nav nav-pills nav-stacked">
		  
	         		</ul>
		    	</div>

			    <div class="span10" style="position:relative;">
			
					<div id='main_container'>
						
					</div>
			
			    </div>
		  	</div>
		</div>
    </body>
</html>
