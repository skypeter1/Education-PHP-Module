var ExamenesForm = BaseForm.extend({

	template:"public/templates/examenes_form.html",

	events: _.extend({

		"click .select_curso": "select_curso_event",
		"click .select_profesor": "select_profesor_event"

	}, BaseForm.prototype.events),

	initialize: function(options){

		BaseForm.prototype.initialize.call(this, options);
		this.resubscribe_template_event();


		this.template_helpers.categorias_options = [{label:"LAB", value:"LAB"},
		{label:"GVR", value:"GVR"},
		{label:"ORAL", value:"ORAL"},
		{label:"Categoria 4", value:"Categoria 4"},
		{label:"Categoria 5", value:"Categoria 5"},
		{label:"Categoria 6", value:"Categoria 6"}];
	},

	select_profesor_event: function(event){
		event.preventDefault();
		this.select_profesor();
	},

	select_profesor: function() 
	{
		this.trigger("select:profesor");
	}, 

	select_curso: function(){
		this.trigger("select:curso");
	}, 

	select_curso_event: function(event){
		event.preventDefault();
		this.select_curso();
	},

	set_profesores: function(profesores){

		var transformed = [];
		$.each(profesores, function(index, profesor){

			transformed.push({label:profesor.name, value:profesor.id});

		});

		this.template_values.profesores = transformed;
	}	

});
