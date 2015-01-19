var AlumnosSwitchController;
(function(){

	AlumnosSwitchController = function(router)
	{
		BaseController.call(this, router);
		this.set_up_routes();
		this.set_up_form();
		this.set_up_alumnos();
		this.set_up_cursos();

		this.form.on("cursos:changed", $.proxy(function(left_curso, right_curso){

			this.form.template_values.left_curso_id = left_curso;
			this.form.template_values.right_curso_id = right_curso;
			this.cursos.fetch();

		}, this));

		this.form.on("submit", $.proxy(function(values){
			
			var model = new this.model();

			model.on("cursos:save:success", $.proxy(function(){
				this.feedback.atach($("#content"));
				this.feedback.template_values.message = "Matriculas guardadas correctamente.";
				this.feedback.render();
			}, this));

			model.save_matriculas_by_curso(values);

		}, this));

		this.bus.on("swap_list:repeated:values", $.proxy(function(repeated_values){

			var message = "Los siguientes Alumnos ya existen en el curso objetivo y no se pueden mover:";
			$.each(repeated_values, function(index, alumno){
				message += "<br/>"+alumno;
			});

			this.bus.trigger("custom:info", message);

		}, this));

		this.model = Curso.extend({});
		this.feedback = new FeedbackView();
	};

	AlumnosSwitchController.prototype = new BaseController();
	AlumnosSwitchController.prototype.constructor = AlumnosSwitchController;

	AlumnosSwitchController.prototype.index = function() 
	{
		this.cursos.fetch();
	};

	AlumnosSwitchController.prototype.set_up_routes = function() 
	{
		this.router.create_namespaced_route("alumnos-switch", "alumnos:route:switch", "alumnos-switch");
		this.bus.on("alumnos:route:switch", $.proxy(function(){this.index();}, this));
	};

	AlumnosSwitchController.prototype.set_up_form = function() 
	{
		this.form = new AlumnosSwitchForm();
	};

	AlumnosSwitchController.prototype.set_up_alumnos = function() 
	{
		this.alumnos_right = new AlumnosCollection();
		this.alumnos_right.on("fetch:success", $.proxy(function(response){
			this.form.template_values.alumnos_right = response.data.list;
			this.form.render();
			this.view(this.form);
		}, this));

		this.alumnos_left = new AlumnosCollection();
		this.alumnos_left.on("fetch:success", $.proxy(function(response){
			this.form.template_values.alumnos_left = response.data.list;

			var filter_curso = this.cursos.at(1).id;
			if(this.form.template_values.right_curso_id)
			{
				filter_curso = this.cursos.get(this.form.template_values.right_curso_id).id;
			}

			this.form.template_values.right_curso_id = filter_curso;

			this.alumnos_right.add_filter("curso", filter_curso, "EQUALS");
			this.alumnos_right.fetch();
		}, this));
	};

	AlumnosSwitchController.prototype.set_up_cursos = function() 
	{
		this.cursos = new CursosCollection();
		this.cursos.add_filter("estado", "Terminado", "NOT EQUALS");
		this.cursos.on("fetch:success", $.proxy(function(response){
  
                  this.cursos.add(response.data.list);
                  this.form.set_cursos(response.data.list);
 
                  if (this.cursos.at(0)){ 
                    var filter_curso = this.cursos.at(0).id;
                    filter_curso = this.cursos.at(0).id; 
                    if(this.form.template_values.left_curso_id)
                    {
                            filter_curso = this.cursos.get(this.form.template_values.left_curso_id).id;
                    }
 
                    this.form.template_values.left_curso_id = filter_curso;
                    this.alumnos_left.add_filter("curso", filter_curso, "EQUALS");
                    this.alumnos_left.fetch();
                } 
 
		}, this));
	};

})();
