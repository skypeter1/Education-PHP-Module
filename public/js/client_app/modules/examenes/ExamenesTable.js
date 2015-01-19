var ExamenesTable = TableView.extend({

	template:"public/templates/examenes_table.html",

	initialize: function()
	{
		var options = {};
		options.control_values  = {"label":"Nueva Actividad", "url":"#examenes/new"};
		
		TableView.prototype.initialize.call(this, options);
	}


});