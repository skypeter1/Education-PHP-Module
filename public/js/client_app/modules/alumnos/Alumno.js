var Alumno = BaseModel.extend({
	
	initialize: function(attributes)
	{
		BaseModel.prototype.initialize.call(this, attributes);
		this.namespace = "alumnos";
	},

	save_matriculas: function(matriculas)
	{
		if(this.can("create"))
		{
			var options = {success: $.proxy(this.success_callback, this, "save")};

			options.alternate_url = "save_matriculas";

			this.transform_output_data();
			Backbone.Model.prototype.save.call(this, matriculas, options);
		}
		else
			this.bus.trigger("authorization:error");
	}

});