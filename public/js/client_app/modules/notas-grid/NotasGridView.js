var NotasGridView = BaseView.extend({

	template: "public/templates/notas_grid.html",

	events: {
		"keyup input.peso": "peso_change",
		"click button.save": "save_event",
		"click button.close_curso": "close_event",
		"click button.disabled" : "prevent_event"
	},

	initialize: function(options)
	{
		BaseView.prototype.initialize.call(this, options);
	},

	save_event: function(event)
	{
		event.preventDefault();
		this.trigger("save:pesos", this.get_values());
	},

	prevent_event: function(event)
	{
		event.preventDefault();
	},

	close_event: function(event)
	{
		event.preventDefault();

		var values = this.get_values();

		var curso = this.template_values.overview.curso;

		curso.estado = "Terminado";
		curso.pesos = JSON.stringify(values.pesos);

		this.trigger("close:curso", curso);
	},

	peso_change: function(event)
	{
		this.save_pesos();
		this.calculate_totals();
		this.update_total_percent();
	},

	get_values: function()
	{
		var values = {};
		values.pesos = {};
		values.curso = $(this.el).find("input[name='curso']").val();

		var inputs = $(this.el).find("thead input.peso");
		$.each(inputs, $.proxy(function(index, input){
				values.pesos[$(input).attr("name")] = $(input).val();
		}, this));

		return values;
	},

	get_notas_finales: function(){

		var notas = [];
		var curso = $(this.el).find("input[name='curso']").val();

		var alumnos = $(this.el).find("tr.alumno");

		$.each(alumnos, $.proxy(function(index, alumno_row){

			var alumno = $(alumno_row).find("td.alumno").attr("data");
			var nota = $(alumno_row).find("td.nota_final span").text();
			notas.push({curso:curso, alumno:alumno, nota:nota});

		}, this));

		return notas;

	}, 

	calculate_totals: function()
	{
		var alumnos = $(this.el).find("tr.alumno");

		$.each(alumnos, $.proxy(function(index, alumno_tr){
			
			this.calculate_for_alumno(alumno_tr);

		}, this));

	},

	calculate_for_alumno: function(alumno_tr)
	{
		var pruebas = $(alumno_tr).find("td.nota");
		var nota_final = 0;

		$.each(this.pesos, $.proxy(function(name, peso){
			var pruebas = $(alumno_tr).find("span[name='"+name+"']");

			var nota = 0;
			$.each(pruebas, $.proxy(function(index, prueba){
					
				var value = $(prueba).text();
				if(value == "-") value = 0;

				nota += Number(value);

			}, this));

			nota = nota/pruebas.length;

			var percent = this.pesos[name];

			nota_final += ((nota*percent)/100);

		}, this));


		$(alumno_tr).find(".nota_final span").removeClass("label-important");
		$(alumno_tr).find(".nota_final span").removeClass("label-success");
		$(alumno_tr).find(".nota_final span").removeClass("label-warning");

		var css = "label-important";
		if(nota_final <= 80 && nota_final >= 60) css = "label-warning";
		if(nota_final >= 80) css = "label-success";

		$(alumno_tr).find(".nota_final span").addClass(css);
		$(alumno_tr).find(".nota_final span").text(nota_final.toFixed(1));

	},

	save_pesos: function() 
	{
		var pesos = {};
		var inputs = $(this.el).find("thead input.peso");

		$.each(inputs, $.proxy(function(index, input){
			
			pesos[$(input).attr("name")] = $(input).val();

		}, this));

		this.pesos = pesos;
	},

	render_template: function()
	{
		BaseView.prototype.render_template.call(this);
		//$(this.el).find("input.peso").mask("U?DC");
		$('.nota').tooltip();
		this.add_default_percents();
		this.peso_change();

		if(this.template_values.overview && this.template_values.overview.curso.estado == "Terminado")
		{
			$(this.el).find("thead input.peso").attr("disabled", "disabled");
			$(this.el).find("button.btn-primary").detach();
			$(this.el).find("button.btn-success").detach();
		}

	},

	add_default_percents: function()
	{
		var pesos = $(this.el).find("thead input.peso");
		var default_percent =( 100/pesos.length).toFixed(0);

		if(!this.all_pesos_blank(pesos))
			return;


		$.each(pesos, $.proxy(function(index, input){
			
			$(input).val(default_percent);

		}, this));
	},

	all_pesos_blank: function(pesos)
	{
		var result = true;
		$.each(pesos, $.proxy(function(index, input){
			if($(input).val() !== "") result = false;
		}, this));

		return result;
	},

	update_total_percent: function()
	{
		var pesos = $(this.el).find("thead input.peso");
		var total_percent = 0;

		$.each(pesos, $.proxy(function(index, input){
			
			total_percent += Number($(input).val());

		}, this));

		$(this.el).find("th.total_percent span").text(total_percent);

		$(this.el).find("th.total_percent").removeClass("fail");
		$(this.el).find("button.btn-primary").removeClass("disabled");
		$(this.el).find("button.btn-success").removeClass("disabled");

		$(this.el).find("button.btn-primary").addClass("save");
		$(this.el).find("button.btn-success").addClass("close_curso");

		if(total_percent > 100) 
		{
			$(this.el).find("th.total_percent").addClass("fail");
			$(this.el).find("button.btn-primary").addClass("disabled");
			
			$(this.el).find("button.btn-primary").removeClass("save");
		}

		if(total_percent != 100)
		{
			$(this.el).find("button.btn-success").addClass("disabled");
			$(this.el).find("button.btn-success").removeClass("close_curso");
		}
	}

});