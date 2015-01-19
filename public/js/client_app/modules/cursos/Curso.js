var Curso = BaseModel.extend({

	initialize:function(attributes)
	{
		BaseModel.prototype.initialize.call(this, attributes);
		this.data_types = {};
		this.data_types.fecha_inicio = DateType;
		this.data_types.fecha_fin = DateType;
		this.namespace = "cursos";

	},

	transform_output_data: function()
	{
		BaseModel.prototype.transform_output_data.call(this);

		var result = this.get("producto_pac").split("-");

		this.set("producto_pac", result[0]);
		this.set("bodega", result[1]);
	},

	transform_input_data: function()
	{
		BaseModel.prototype.transform_input_data.call(this);

		var result = this.get("producto_pac")+"-"+this.get("bodega");

		this.set("producto_pac", result);
	},

	save_matriculas_by_curso: function(matriculas)
	{
		if(this.can("create"))
		{
			var options = {success: $.proxy(this.success_callback, this, "save")};

			options.alternate_url = "save_matriculas_by_curso";
			Backbone.Model.prototype.save.call(this, matriculas, options);
		}
		else
			this.bus.trigger("authorization:error");
	},

	save_pesos: function(pesos)
	{
		if(this.can("create"))
		{
			var options = {success: $.proxy(this.success_callback, this, "save")};

			options.alternate_url = "save_pesos";
			Backbone.Model.prototype.save.call(this, pesos, options);
		}
		else
			this.bus.trigger("authorization:error");
	},

	save_notas_finales: function(notas_finales){

		if(this.can("create"))
		{
			var options = {success: $.proxy(this.success_callback, this, "save")};

			options.alternate_url = "save_notas_finales";
			Backbone.Model.prototype.save.call(this, notas_finales, options);
		}
		else
			this.bus.trigger("authorization:error");
	}, 

	get_overview: function(curso_id){
		
		if(this.can("get"))
		{
			var options = {};
			
			var callbacks = {success: $.proxy(this.success_callback, this, "fetch")};
		
			options = $.extend(callbacks, options);
			options.is_model = true;
			options.alternate_url = "get_overview";

			options.data = {};
			options.data.data = JSON.stringify({id:curso_id});

			Backbone.Model.prototype.fetch.call(this, options);
		}
		else
			this.bus.trigger("authorization:error");
	}

});