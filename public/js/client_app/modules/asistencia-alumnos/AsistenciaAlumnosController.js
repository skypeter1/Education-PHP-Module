var AsistenciaAlumnosController;
(function(){

	AsistenciaAlumnosController = function(router)
	{
		BaseController.call(this, router);
		this.set_up_routes();
		this.set_up_collection();
		this.set_up_table();
		this.set_up_model();
	};

	AsistenciaAlumnosController.prototype = new BaseController();
	AsistenciaAlumnosController.prototype.constructor = AsistenciaAlumnosController;

	AsistenciaAlumnosController.prototype.index = function(alumno_id) 
	{
		var model = new this.model();
		model.set("id", alumno_id);

		this.view(this.list);

		model.on("fetch", $.proxy(function(model){
			this.list.template_values.alumno = model.toJSON();
			this.collection.fetch(alumno_id);
		}, this));


		model.fetch();
	};

	AsistenciaAlumnosController.prototype.set_up_routes = function() 
	{
		this.router.create_namespaced_route("asistencia-alumnos/:id", "alumnos:route:asistencia", "alumnos");
		this.bus.on("alumnos:route:asistencia", $.proxy(function(alumno_id){this.index(alumno_id);}, this));
	};

	AsistenciaAlumnosController.prototype.set_up_collection = function() 
	{
		this.collection = new AsistenciaAlumnosCollection();
		this.collection.on("fetch:success", $.proxy(function(response){

			this.list.render();
		}, this));
	};

	AsistenciaAlumnosController.prototype.set_up_table = function() 
	{
		this.list = new AsistenciaAlumnosTable({collection: this.collection});
	};

	AsistenciaAlumnosController.prototype.set_up_model = function() 
	{
		this.model = Alumno.extend();
	};

})();