var Examen = BaseModel.extend({

	initialize: function(options)
	{
		BaseModel.prototype.initialize.call(this, options);
		this.namespace = "examenes";
		this.data_types.fecha = DateType;
	},

	save_notas: function(notas)
	{
		if(this.can("create"))
		{
			var options = {success: $.proxy(this.success_callback, this, "save")};

			options.alternate_url = "save_notas";

			this.transform_output_data();
			Backbone.Model.prototype.save.call(this, notas, options);
		}
		else
			this.bus.trigger("authorization:error");
	}

});