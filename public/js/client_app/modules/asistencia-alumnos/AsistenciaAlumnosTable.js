var AsistenciaAlumnosTable = TableView.extend({

	template: "public/templates/asistencia_alumnos_table.html",

	initialize: function(options)
	{
		TableView.prototype.initialize.call(this, options);
		this.controls.add_permission("false");
		//this.search_form.add_permission("false");
		this.footer.add_permission("false");
		this.reset_search_form_event();
	},

	render_template: function()
	{
		this.template_values.no_asistio = "No asistio";
		TableView.prototype.render_template.call(this);
		$(this.el).find("table").tablesorter();
		this.search_form.submit();
	},

	reset_search_form_event: function()
	{

		this.search_form.transform_dates = false;
		this.search_form.off("submit");
		this.search_form.on("submit", $.proxy(function(search_term){
			this.filter_table(search_term);
		}, this));

	},

	filter_table: function(search_term)
	{

		if(search_term === undefined) return;

		$(this.el).find("table tbody tr").hide();
		
		var data = search_term.split(" ");
		var rows =  $(this.el).find("table tbody tr");

		$.each(data, function(index, value){
			rows = rows.filter("*:contains('"+value+"')");
		});

		rows.show();
	}


});