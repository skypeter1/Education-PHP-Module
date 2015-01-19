var ErrorView = BaseView.extend({
	
	tagName: "ul",
	
	template: "public/templates/errors_list.html",
	
	className: "alert alert-error",
	
	initialize: function(options)
	{
		BaseView.prototype.initialize.call(this, options);
		this.translated_errors = {};
	    //this.translated_errors["error_consultorio_not_exist"] = "La consultorios no existe";
	},
	
	render_template: function()
	{
		if(this.template_values.errors !== undefined)
		{
			var errors = this.get_translated_errors();
			this.template_values.errors = errors;
			BaseView.prototype.render_template.call(this);
		}
	},
	
	get_translated_errors: function()
	{
		
		var result = [];
		
		$.each(this.template_values.errors, $.proxy(function(index, error){
			
			if(this.translated_errors[error])
				result.push(this.translated_errors[error]);
			else
				result.push(error);
			
        },this));
		
		return result;
	}
	
});
