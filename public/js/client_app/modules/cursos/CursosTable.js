var CursosTable = TableView.extend({

	template:"public/templates/cursos_table.html",

	initialize: function()
	{
		var options = {};
		options.control_values  = {"label":"Nuevo curso", "url":"#cursos/new"};
		TableView.prototype.initialize.call(this, options);
                this.controls.add_permission("Administrador");       
                this.controls.add_permission("Director");
                this.controls.add_permission("Counter"); 
                                                                     
                this.template_values.can_edit = auth.check(["Administrador"]); 
         
     
	}

});
