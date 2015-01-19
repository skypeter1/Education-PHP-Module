var AlumnosHistoryController;
(function(){

	AlumnosHistoryController = function(router)
	{
		BaseController.call(this, router);
		this.set_up_routes();
		this.set_up_collection();
		this.set_up_model();
		this.set_up_list();
	};

	AlumnosHistoryController.prototype = new BaseController();
	AlumnosHistoryController.prototype.constructor = AlumnosHistoryController;

	AlumnosHistoryController.prototype.index = function(alumno_id) 
	{
		var model = new this.model();
		model.set("id", alumno_id);

		model.on("fetch", $.proxy(function(model){
			this.list.template_values.alumno = model.toJSON();
			this.collection.fetch(alumno_id);
		}, this));

		model.fetch();
		this.view(this.list);
	};

	AlumnosHistoryController.prototype.set_up_routes = function() 
	{
		this.router.create_namespaced_route("alumno-history/:id", "alumnos:route:history", "alumnos");
		this.bus.on("alumnos:route:history", $.proxy(function(alumno_id){this.index(alumno_id);}, this));
	};

	AlumnosHistoryController.prototype.set_up_list = function() 
	{
		this.list = new AlumnosHistoryTable({collection:this.collection});
	};

	AlumnosHistoryController.prototype.set_up_collection = function() 
	{
		this.collection = new AlumnosHistoryCollection();
		this.collection.on("fetch:success", $.proxy(function(response){
			this.list.render();
		}, this));	
	};

	AlumnosHistoryController.prototype.set_up_model = function() 
	{
		this.model = Alumno.extend();
	};

})();
