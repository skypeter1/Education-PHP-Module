var AlumnosSwitchForm = BaseForm.extend({

	template: "public/templates/alumnos_switch_form.html",

	events:_.extend({
		"change #curso_left_field": "cursos_change",
		"change #curso_right_field": "cursos_change"
	}, BaseForm.prototype.events),

	render_template: function()
	{
		BaseView.prototype.render_template.call(this);
		$(this.el).find("select.searchable").searchable();
		this.swap_list = $(this.el).find("select[multiple]").swap_list();
	},

	cursos_change: function(event)
	{
		var left_curso = $(this.el).find("#curso_left_field").val();
		var right_curso = $(this.el).find("#curso_right_field").val();
		this.trigger("cursos:changed", left_curso, right_curso);
	},

	set_cursos: function(cursos)
	{
            var transformed = [];
              
            if (cursos.length != 0){
                $.each(cursos, function(index, curso){

                  var date = new XDate(curso.fecha_inicio*1000);
                  var fecha = date.toString("yyyy-MM-dd");
                  var label = curso.identificador+" - "+curso.bodega_nombre+" - "+curso.nombre+" - "+curso.profesor.name+" - "+fecha; 
                  transformed.push({label:label, value:curso.id});
 
                });
                     
            }else{
                transformed.push({label:'', value:''});    
            }
            
            this.template_values.cursos = transformed;
            
	},

	get_values: function()
	{
                var left_curso = $(this.el).find("#curso_left_field").val();
		var right_curso = $(this.el).find("#curso_right_field").val();

		var left_alumnos = [];
		$.each($(this.el).find("#alumnos_left_field option"), function(index, option){
			left_alumnos.push($(option).val());
		});

		var right_alumnos = [];
		$.each($(this.el).find("#alumnos_right_field option"), function(index, option){
			right_alumnos.push($(option).val());
		});

		var result = {};
		result[left_curso] = left_alumnos;
		result[right_curso] = right_alumnos;

		return result;
	},

	submit: function()
	{
		var values = this.get_values();
		this.bus.trigger(this.namespace+":form:submit", values);
		this.trigger("submit", values);
	}

});
