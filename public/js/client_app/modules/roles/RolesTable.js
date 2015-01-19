var RolesTable = TableView.extend({

	template:"public/templates/roles_table.html",

	initialize: function()
	{
		var options = {};
		options.control_values  = {"label":"Asignar o editar Rol", "url":"#roles/new"};
		
		TableView.prototype.initialize.call(this, options);
	}

});
