var NotasGridController;
(function(){

	NotasGridController = function(router)
	{
		BaseController.call(this, router);
		this.set_up_routes();
		this.set_up_model();
		this.set_up_grid();
		this.feedback = new FeedbackView();
	};
 
	NotasGridController.prototype = new BaseController();
	NotasGridController.prototype.constructor = NotasGridController;

	NotasGridController.prototype.index = function(curso_id) 
	{ 
		$(this.grid.el).empty();
		this.grid.template_values = {};
                this.grid.template_values.is_admin = auth.check(["Administrador", "Director"]);
		this.grid.render();  
		this.view(this.grid);

		var model = new this.model();

		model.on("cursos:fetch:success", $.proxy(function(model, response){

			this.grid.template_values.overview = response.data.overview;
			this.grid.render_template();

		}, this));

		model.get_overview(curso_id);
	};

	NotasGridController.prototype.set_up_routes = function() 
	{
		this.router.create_namespaced_route("curso-overview/:id", "curso:route:overview", "cursos");
		this.bus.on("curso:route:overview", $.proxy(function(id){this.index(id);}, this));
	};

	NotasGridController.prototype.set_up_model = function() 
	{
		this.model = Curso.extend();
	};

	NotasGridController.prototype.set_up_grid = function() 
	{
		this.grid = new NotasGridView();
		this.grid.on("save:pesos", $.proxy(function(values){
			
			var model = new this.model({id:values.curso});
			model.save_pesos(values);
			model.on("save", $.proxy(function(){
				this.feedback.atach($("#content"));
				this.feedback.template_values.message = "Pesos guardados correctamente.";
				this.feedback.render();
			}, this));

		}, this));

		this.grid.on("close:curso", $.proxy(function(curso){
			
			var model = new this.model(curso);
			var model2 = new this.model(curso);
			model.transform_input_data();

			model.on("save", $.proxy(function(){
				
				model2.save_notas_finales({notas:this.grid.get_notas_finales()});

			}, this));

			model2.on("save", $.proxy(function(model){

				this.index(curso.id);

			}, this));	
			
			model.save();

		}, this));
	};

})();
