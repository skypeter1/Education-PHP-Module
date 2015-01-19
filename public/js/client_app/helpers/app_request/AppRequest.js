(function(){
	
	AppRequest = function(options)
	{
		if(options === undefined) options = {};
		if(!options.type) options.type = "POST";
		if(!options.dataType) options.dataType = "json";
		if(options.startEvent === undefined) options.startEvent = true;

        options.complete = get_on_complete();
        options.error = get_on_error(options);
        options.success = get_on_success(options);		
		
		if(options.startEvent === true)
			EventBus.trigger("request:started");
			
		return $.ajax(options);
	};
	
	AppRequest.redirect = function(url)
	{
		window.location.href = url;
	};
	
	function get_on_complete()
	{
		return function()
		{
			EventBus.trigger("request:finished");
		};
	}
	
	function get_on_error(options)
	{
		if(options.error)
			var passed_error_function = options.error;
		
		return function(response)
		{
			EventBus.trigger("request:error", response, $.proxy(AppRequest, this, options));
			
			if(passed_error_function)
			{
				passed_error_function.apply(this, arguments);
			}	
		};
	}
	
	function get_on_success(options)
	{

		if(options.success)
			var passed_success_function = options.success;
		
		return function(response)
		{
			if(response.exception && response.exception != null)
			{
				EventBus.trigger("exception:thrown", response.exception);
				return false;
			}
			
			if($.inArray("error_not_loggedin", response.errors) != -1)
			{
				AppRequest.redirect("login");
			}
			
			if(passed_success_function)			
				passed_success_function.apply(this, arguments);
		};
	}
	
})();
