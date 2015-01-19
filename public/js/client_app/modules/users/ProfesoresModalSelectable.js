var ProfesoresModalSelectable = {

	set_up_profesores_modal: function()
	{
		this.set_up_modal();
		this.set_up_form_profesor_selection();
	},

	set_up_modal: function()
	{
		this.profesores_modal = new UsersController();
		this.profesores_modal.as_modal();
		this.profesores_modal.no_url_mode();
		this.profesores_modal.list.template_values.selectable = true;
    this.profesores_modal.list.controls.permissions = [];
		this.profesores_modal.list.controls.add_permission("false");

		this.profesores_modal.list.on("ui:row:selection", $.proxy(function(model){
			
			this.form.template_values = this.form.get_values();
			this.form.template_values.profesor = model.toJSON();
			this.form.render_template();
			this.profesores_modal.close_modal();

		}, this));
	},

	set_up_form_profesor_selection: function() 
	{
		this.form.on("select:profesor", $.proxy(function(){
			
			this.profesores_modal.index();

		}, this));
	}

};
