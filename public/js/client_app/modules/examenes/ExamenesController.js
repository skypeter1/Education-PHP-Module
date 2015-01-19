var ExamenesController;
(function(){

	ExamenesController = function(router)
	{
		CrudController.call(this, "examenes", router);
		this.set_auth_namespace("Examen::");
		this.set_up_profesores();
		this.subscribe_to_custom_routes();
		this.set_up_alumnos();
		this.set_up_notas_collection();
		this.set_up_notas_form();
		this.set_up_cursos_modal_selection();
		this.set_up_profesores_modal();
	};

	ExamenesController.prototype = new CrudController();
	
	ExamenesController.constructor = ExamenesController;

	ExamenesController.prototype = _.extend(ExamenesController.prototype, CursosModalSelection);
	ExamenesController.prototype = _.extend(ExamenesController.prototype, ProfesoresModalSelectable);

	ExamenesController.prototype.set_up_model = function()
	{
		this.model = Examen.extend();
	};

	ExamenesController.prototype.notas = function(examen_id) 
	{
		
		var examen = new this.model({id:examen_id});

		$(this.notas_form.el).empty();
		this.notas_form.template_values = {};
		this.notas_form.examen_id = examen_id;
		this.notas_form.render();
		this.view(this.notas_form);

		examen.on(this.namespace+":fetch:success", $.proxy(function(response){

			this.current_examen = response.toJSON();
			this.notas_form.template_values.examen = this.current_examen;
			this.notas_collection.fetch(examen_id);

		}, this));

		examen.fetch();

	};

	ExamenesController.prototype.set_up_form = function() 
	{
		this.form = new ExamenesForm();
		
		this.form.on("can:render", $.proxy(function(){

			if(document.help_vars.current_user.rol == "Administrador")
			{
				this.form.template_helpers.administrador = true;
				this.profesores.fetch();
				return;
			}
			this.form.render_template();
		
        }, this));
	};

	ExamenesController.prototype.set_up_list = function() 
	{
		this.list = new ExamenesTable({collection:this.collection});
	};

	ExamenesController.prototype.set_up_profesores = function() 
	{
		this.profesores = new ProfesoresCollection();
		this.profesores.on("fetch:success", $.proxy(function(response){
			this.form.set_profesores(response.data.list);
			this.form.render_template();
		}, this));
	};

	ExamenesController.prototype.subscribe_to_custom_routes = function() 
	{
		this.router.create_namespaced_route("examenes/notas/:id", "examenes:route:notas", "examenes");
		this.bus.on("examenes:route:notas", $.proxy(function(examen_id){this.notas(examen_id);}, this));
	};

	ExamenesController.prototype.set_up_alumnos = function() 
	{
		this.alumnos = new AlumnosCollection();
		this.alumnos.on("fetch:success", $.proxy(function(response){

			this.notas_form.set_alumnos(response.data.list);
			this.notas_form.render_template();

		}, this));
	};

	ExamenesController.prototype.set_up_notas_collection = function() 
	{
		this.notas_collection = new NotasCollection();
		this.notas_collection.on("fetch:success", $.proxy(function(response){

			this.notas_form.template_values.notas = response.data.list;
			this.alumnos.add_filter("curso", this.current_examen.curso.id, "EQUALS");
			this.alumnos.fetch();

		}, this));
	};

	ExamenesController.prototype.set_up_notas_form = function() 
	{
		this.notas_form = new NotasForm();
		this.notas_form.on("submit", $.proxy(function(values){

			var model = new this.model();
			model.on(this.namespace+":save:success", $.proxy(function(){

				this.router.navigate("examenes", true);

			}, this));

			model.save_notas({notas:values});

		}, this));
	};

})();
