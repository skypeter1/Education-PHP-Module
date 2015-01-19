var Sesion = BaseModel.extend({

	initialize: function(options)
	{
		BaseModel.prototype.initialize.call(this, options);
		this.namespace = "sesiones";
		this.data_types.fecha = DateType;
		this.data_types.sin_profesor = BooleanType;
		this.data_types.estado = BooleanType; 
                this.data_types.pagado = BooleanType;        

	},   
 
	save_asistencia: function(matriculas)
	{
		if(this.can("create"))
		{
			var options = {success: $.proxy(this.success_callback, this, "save")};

			options.alternate_url = "save_asistencia";
			Backbone.Model.prototype.save.call(this, matriculas, options);
		}
		else
			this.bus.trigger("authorization:error");
	}

});