(function(){

	var methodMap = {
	    'create': 'create',
	    'update': 'update',
	    'delete': 'delete',
	    'read':   'search',
		'block':  'block',
		'emitir':  'emitir',
		'anular':  'anular'
	  };

	Backbone.sync = function(method, model, options) {
	    var segment = methodMap[method];

		if(options.alternate_url)
		{
			segment = options.alternate_url;
		}
		
		//prevents update if id is empty
		if(segment == "update" && model.get("id") == "")
		{
			segment = "create";
			model.unset("id");
		}

		var query = model.toJSON();

		if(segment == "search" && options.is_model == true)
		{
			segment = "get";
			query = {id:model.id};
		}
		
		if(segment == "search" && options.is_model == undefined)
		{
			query = {};
		}

	    // Default options, unless specified.
	    options || (options = {});

	    // Default JSON-request options.
	    var params = {type: "POST", dataType:"json"};

	    // Ensure that we have a URL.
	    if (!options.url) {
	      params.url = model.namespace+"/"+segment;
	    }
	
		if(	document.help_vars && 	document.help_vars.base_url)
		{
			params.url = document.help_vars.base_url+params.url;
		}

		params.data = {};
		params.data.data = JSON.stringify(query);
		
	    
	    return AppRequest(_.extend(params, options));
	  };
	
})()

