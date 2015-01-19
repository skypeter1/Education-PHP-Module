var CursosModalSelection = {

  set_up_cursos_modal: function() 
  {
    this.cursos_modal = new CursosController();
    this.cursos_modal.as_modal();
    this.cursos_modal.no_url_mode();
    this.cursos_modal.list.template_values.selectable = true;
    this.cursos_modal.list.controls.permissions = [];
    this.cursos_modal.list.controls.add_permission("false");
    this.cursos_modal.collection.add_filter("estado", "Terminado", "NOT EQUALS");

    this.cursos_modal.list.on("ui:row:selection", $.proxy(function(curso){

      var profesores_setted;

      if(this.form.template_values.profesores)
        profesores_setted = this.form.template_values.profesores; 

      this.form.template_values = this.form.get_values();

      if(profesores_setted !== undefined)
        this.form.template_values.profesores = profesores_setted;

      if(document.help_vars.current_user.rol == "Administrador")
        this.form.template_values.administrador = true;

      this.form.template_values.curso = curso.toJSON();

      this.form.render_template();
      this.cursos_modal.close_modal();

    }, this));
  },

  set_up_form_select_curso: function() 
  {

    this.form.on("select:curso", $.proxy(function(){

      if(document.help_vars.current_user.rol == "profesor")
        {
          this.cursos_modal.list.search_form.set_status(document.help_vars.current_user.name);
          this.cursos_modal.list.collection.add_filter("GLOBAL", document.help_vars.current_user.name, "LIKE");
        }

        this.cursos_modal.index();

    }, this));

  },

  set_up_cursos_modal_selection: function()
  {
    this.set_up_cursos_modal();
    this.set_up_form_select_curso();	
  }

};
