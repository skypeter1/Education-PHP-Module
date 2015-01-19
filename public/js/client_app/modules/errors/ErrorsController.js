var ErrorsController;
(function(){
	
	ErrorsController = function(container_id)
	{
		this.bus = EventBus;
		this.view = new GeneralErrorView();
		this.container = $("#"+container_id);
		
		this.bus.on("request:error", $.proxy(render_errors, this));
		this.bus.on("authorization:error", $.proxy(render_auth_errors, this));
		this.bus.on("exception:thrown", $.proxy(render_exception, this));
		this.bus.on("custom:error", $.proxy(render_custom_error, this));
		this.bus.on("custom:info", $.proxy(render_custom_info, this));
	};
	
	function render_errors(error, current_execution)
	{
		error = customize_error(error);

		if(current_execution !== undefined)
			this.view.retry_function = current_execution;
			
		this.view.template_values.status = error.status;
		this.view.template_values.statusText = error.statusText;
		this.view.template_values.responseText = error.responseText;
		this.view.template_values.button_label = "Reintentar";		
		
		this.view.render();
	}
	
	function render_auth_errors()
	{
		this.view.retry_function = function(){};
			
		this.view.template_values.status = "";
		this.view.template_values.statusText = "Authorization Error";
		this.view.template_values.responseText = "No tienes permiso para esta acción";
		this.view.template_values.button_label = "Cerrar";
			
		this.view.render();
	}
	
	function render_exception(exception_message)
	{
		this.view.retry_function = function(){};
			
		this.view.template_values.status = "";
		this.view.template_values.statusText = "Exception has been thrown";
		this.view.template_values.responseText = "<pre>"+exception_message+"</pre>";
		this.view.template_values.button_label = "Cerrar";
			
		this.view.render();
	}
	
	function render_custom_error(message)
	{
		this.view.retry_function = function(){};
			
		this.view.template_values.status = "";
		this.view.template_values.statusText = "Error";
		this.view.template_values.responseText = message;
		this.view.template_values.button_label = "Ok";
			
		this.view.render();
	}
	
	
	function render_custom_info(message)
	{
		this.view.retry_function = function(){};
			
		this.view.template_values.status = "";
		this.view.template_values.statusText = "";
		this.view.template_values.responseText = message;
		this.view.template_values.button_label = "Ok";
			
		this.view.render();
	}
	
	function customize_error(error)
	{
		if(error.status == 200 || error.status == 304)
		{
			error.statusText = "Debug Info";
			error.status = "";
			return error;
		}
		else {
			console.log(error);
		}
		
		if(error.status !== 0) return error;
	
		error.statusText = "El servidor no responde";
		error.status = "";
		
		return error;
	}
	
})();
