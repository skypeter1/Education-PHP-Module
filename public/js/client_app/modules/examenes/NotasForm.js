var NotasForm = BaseForm.extend({

	template: "public/templates/notas_form.html",

	events: _.extend({

		"keypress input[name='nota']":"nota_insert_event",
		"keyup input[name='nota']":"check_max_event",
		"blur input[name='nota']":"to_number_event"

	}, BaseForm.prototype.events),

	submit: function(save_and_new)
	{
		if(this.validate_form())
		{
			var values = this.get_values(this.examen_id);
			this.bus.trigger(this.namespace+":form:submit", values, save_and_new);
			this.trigger("submit", values, save_and_new);
			return true;
		}	
	
		this.focus_first_error_field();
	},

	nota_insert_event: function(event)
	{
		var charTyped = String.fromCharCode(event.which);

		var pattern = /[\d|.]/i;
		if($(event.currentTarget).val().match(/[.]/))
			pattern = /[\d]/i;

		var valid_chars = pattern.test(charTyped);
		if(this.isCharacterKeyPress(event) && !valid_chars)
			event.preventDefault();
	},

	check_max_event: function(event)
	{
		var input = event.currentTarget;
		var nota = Number($(input).val());
		if(nota > 100) $(input).val("100");
	},

	to_number_event: function(event)
	{
		var input = event.currentTarget;
		var nota = Number($(input).val());
		$(input).val(nota);
	},

	isCharacterKeyPress: function(evt) {

		if (typeof evt.which == "undefined")
			return true;

		if (typeof evt.which == "number" && evt.which > 0)
			return !evt.ctrlKey && !evt.metaKey && !evt.altKey && evt.which != 8;

		return false;
	},

	get_values: function(examen_id) {

		var values = [];

		var alumnos = $(this.el).find("div.alumno");

		$.each(alumnos, $.proxy(function(index, alumno_container){

			
			var nota_object = {};
			nota_object.examen = examen_id;
			nota_object.alumno = $(alumno_container).find("[name='alumno']").val();
			nota_object.nota = $(alumno_container).find("[name='nota']").val();
			nota_object.observaciones = $(alumno_container).find("[name='observaciones']").val();

			values.push(nota_object);

		},this));

		return values;

	},

	render_template: function()
	{
		BaseForm.prototype.render_template.call(this);
	},

	set_alumnos: function(alumnos)
	{
		var notas = this.template_values.notas;
		$.each(alumnos, $.proxy(function(index, alumno){

			alumno.nota = "";
			alumno.observaciones = "";

			var result = $.grep(notas, function(e){ return e.alumno == alumno.id; });
			if(result.length > 0)
			{	
				alumno.nota = result[0].nota;
				alumno.observaciones = result[0].observaciones;
			}

		}, this));

		this.template_values.alumnos = alumnos;
	}

});