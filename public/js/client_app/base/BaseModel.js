var BaseModel = Backbone.Model.extend({
	
	bus:EventBus,
	
	validations:{},
	
	namespace:"default",
	
	data_types : {},

	initialize:function(attributes)
	{
		Backbone.Model.prototype.initialize.call(this, attributes);
		this.on("error", this.error);
		this.on("add", $.proxy(this.transform_input_data, this));
	},

	error: function(model, data)
	{
		this.bus.trigger(this.namespace+":data:error");
	},
	
	set_auth_namespace: function(namespace)
	{
		this.auth_namespace = namespace;
	},
	
	add_validation: function(attribute, validation)
	{
		this.validations[attribute] = validation;
	},

	trigger_response_errors: function(errors, model)
	{	
		this.bus.trigger(this.namespace+":response:error", errors, model);
		this.trigger(this.namespace+":response:error", errors, model);
		this.trigger("error", errors, model);
	},
	
	success_callback: function(type, model, data)
	{		
		if(data.errors && data.errors.length > 0)
		{
			this.trigger_response_errors(data.errors, model);
			return false;
		}

		this.transform_input_data();

		this.bus.trigger(this.namespace+":"+type+":success", model, data);
		this.trigger(this.namespace+":"+type+":success", model, data);
		this.trigger(type, model, data);
	},

	save: function(attributes)
	{	
		if(this.can("create"))
		{
			var callbacks = {success: $.proxy(this.success_callback, this, "save")};
			this.transform_output_data();
			Backbone.Model.prototype.save.call(this, attributes, callbacks);
		}
		else
			this.bus.trigger("authorization:error");
	},

	transform_input_data: function()
	{
		this.transform_data("input");
	},

	transform_output_data: function()
	{
		this.transform_data("output");
	},

	transform_data: function(transform_type)
	{
		$.each(this.toJSON(), $.proxy(function(property, value){
		
			if(this.data_types[property])
				this.set(property, this.data_types[property][transform_type](value));
				
		}, this));
	},
	
	destroy: function(options)
	{	
		if(this.can("delete"))
		{
			if(options === undefined)
				options = {};

			var callbacks = {success: $.proxy(this.success_callback, this, "delete")};
			options = $.extend(callbacks, options);
			Backbone.Model.prototype.destroy.call(this, callbacks);
		}
		else
			this.bus.trigger("authorization:error");
	},
	
	fetch: function(options)
	{
		if(this.can("get"))
		{
			if(options === undefined)
				options = {};
			
			var callbacks = {success: $.proxy(this.success_callback, this, "fetch")};
		
			options = $.extend(callbacks, options);
			options.is_model = true;
		
			Backbone.Model.prototype.fetch.call(this, options);
		}
		else
			this.bus.trigger("authorization:error");
	},
	
	block: function(block, options)
	{
		if(this.can("block"))
		{
			if(block === undefined)
			{
				block = true;
			}
			
			this.set("blocked", block);
			
			var action = "block";
			if(block === false)
				action = "unblock";
			
			if(options === undefined)
				options = {};
			
				var callbacks = {success: $.proxy(this.success_callback, this, action, this)};
				Backbone.sync.call(this, "block", this, callbacks);
		}
		else
			this.bus.trigger("authorization:error");
	},
	
	parse: function(response, xhr)
	{		
		if(response.data)
			return response.data;
		return response;	
	},
	
	can: function(permission)
	{
		if(this.auth_namespace === undefined)
			return true;
		
		if(typeof auth === "undefined")
			return true;
			
		if(typeof auth !== "undefined" && auth.check([this.auth_namespace+permission]))
			return true;
		
		return false;
	}
});
