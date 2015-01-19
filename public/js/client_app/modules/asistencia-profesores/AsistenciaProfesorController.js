var AsistenciaProfesorController;
(function(){

	AsistenciaProfesorController = function(router)
	{
		BaseController.call(this, router);
		this.set_up_routes();
		this.set_up_collection();
		this.set_up_list();
		this.set_up_model();
	};

	AsistenciaProfesorController.prototype = new BaseController();
	AsistenciaProfesorController.prototype.constructor = AsistenciaProfesorController;

	AsistenciaProfesorController.prototype.index = function(profesor_id) 
	{
		var model = new this.model();
		model.set("id", profesor_id);

		model.on("fetch", $.proxy(function(model){
			
			this.list.template_values.profesor = model.toJSON();
			this.collection.fetch(profesor_id);

		}, this));

		model.fetch();
		this.view(this.list);
	};

	AsistenciaProfesorController.prototype.set_up_list = function() 
	{
		this.list = new AsistenciaProfesoresTable({collection:this.collection});
	};

	AsistenciaProfesorController.prototype.set_up_collection = function() 
	{
		this.collection = new AsistenciaProfesorCollection();
		this.collection.on("fetch:success", $.proxy(function(response){
			
			this.list.render();

		}, this));
	};

	AsistenciaProfesorController.prototype.set_up_routes = function() 
	{
		this.router.create_namespaced_route("asistencia-profesores/:id", "profesores:route:asistencia", "users");
		this.bus.on("profesores:route:asistencia", $.proxy(function(profesor_id){this.index(profesor_id);}, this));
	};

	AsistenciaProfesorController.prototype.set_up_model = function() 
	{
		this.model = User.extend();
	};

})();