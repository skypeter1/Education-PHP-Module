var AsistenciasForm = BaseForm.extend({

	template: "public/templates/asistencias_form.html",

	initialize: function(options)
	{
		BaseForm.prototype.initialize.call(this, options);
		this.resubscribe_template_event();
	},

	get_values: function() 
	{
		var values = {};

		$.each($(this.el).find("div.asistencia"), $.proxy(function(index, container){
			
			var sesion = $(container).find("input[name='sesion']").val();
			var alumno = $(container).find("input[name='alumno']").val();
			var observaciones = $(container).find("textarea[name='observaciones']").val();
			var estado = $(container).find("select[name='estado']").val();

			if(!values[sesion])
				values[sesion] = {};

			values[sesion][alumno] = {estado:estado, observaciones:observaciones};

		}, this));

		return values;
	}

});