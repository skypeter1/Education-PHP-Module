var AsistenciaProfesoresTable = TableView.extend({

	template: "public/templates/asistencia_profesores_table.html",

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

		this.template_values.collection = this.collection.toJSON()[0].sesiones;
		this.template_values.total_horas = this.collection.toJSON()[0].total_horas;
		this.template_values.total_valor = this.collection.toJSON()[0].total_valor;

		this.template_values.options = {hash:{operator:"!="}};

		BaseView.prototype.render_template.call(this);

		$(this.el).find("table").tablesorter();
		$(this.el).find("table").on("sortEnd", $.proxy(function(){
			$(this.el).find("table tr.ignore").appendTo($(this.el).find("table tbody"));
		}, this));
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

		$(this.el).find("table tbody tr:not(.ignore)").hide();
		
		var data = search_term.split(" ");
		var rows =  $(this.el).find("table tbody tr:not(.ignore)");

		$.each(data, function(index, value){
			rows = rows.filter("*:contains('"+value+"')");
		});

		rows.show();
	}


});