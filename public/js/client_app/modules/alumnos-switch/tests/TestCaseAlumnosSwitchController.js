function prepare_mocked_model_for(controller, data)
{
	if(data === undefined) data = {};
	
	var mock = new controller.model(data);
	spyOn(controller, "model").andReturn(mock);
	return mock;
}

describe("AlumnosSwitchController", function() {

	it("creates and subscribes to alumnos-switch route", function() {

		var controller = new AlumnosSwitchController(new BaseRouter());

		spyOn(controller, "index");

		Backbone.history.loadUrl("alumnos-switch");

		expect(controller.index).toHaveBeenCalled();

	});

	it("has an instance of AlumnosSwitchForm as his form", function() {
		
		var controller = new AlumnosSwitchController(new BaseRouter());
		expect(controller.form instanceof AlumnosSwitchForm).toBe(true);

	});

	it("has an AlumnosCollection as his alumnos_right and alumnos_left", function() {
		
		var controller = new AlumnosSwitchController(new BaseRouter());
		expect(controller.alumnos_right instanceof AlumnosCollection).toBe(true);
		expect(controller.alumnos_left instanceof AlumnosCollection).toBe(true);

	});

	it("has an CursosCollection as his cursos", function() {
		
		var controller = new AlumnosSwitchController(new BaseRouter());
		expect(controller.cursos instanceof CursosCollection).toBe(true);

	});

	it("fetches cursos on index and fetches alumnos_left and right on cursos fetch finishes", function() {
		
		var controller = new AlumnosSwitchController(new BaseRouter());
		spyOn(controller.cursos, "fetch");
		spyOn(controller.form, "set_cursos");

		var alumnos_left_filters;
		spyOn(controller.alumnos_left, "fetch").andCallFake(function(){
			alumnos_left_filters = this.status.filters;
		});

		var alumnos_right_filter;

		spyOn(controller.alumnos_right, "fetch").andCallFake(function(){
			alumnos_right_filter = this.status.filters;
		});

		controller.index();
		expect(controller.cursos.fetch).toHaveBeenCalled();

		controller.cursos.trigger("fetch:success", {data:{list:[{id:1}, {id:2}]}});
		
		expect(controller.form.set_cursos).toHaveBeenCalledWith([{id:1}, {id:2}]);
		expect(alumnos_left_filters).toEqual([{property:"curso", pattern:1,method:"EQUALS"}]);
		expect(controller.alumnos_left.fetch).toHaveBeenCalled();
		
		controller.alumnos_left.trigger("fetch:success", {data:{list:"alumnos_left"}});
		
		expect(controller.form.template_values.alumnos_left).toBe("alumnos_left");
		expect(alumnos_right_filter).toEqual([{property:"curso", pattern:2,method:"EQUALS"}]);
		expect(controller.alumnos_right.fetch).toHaveBeenCalled();

		expect(controller.form.template_values.left_curso_id).toBe(1);
		expect(controller.form.template_values.right_curso_id).toBe(2);

	});

	it("filters alumnos left and right with form.left_curso_id and form.right_curso_id if defined", function() {
		
		var controller = new AlumnosSwitchController(new BaseRouter());
		controller.form.template_values.left_curso_id = 3;
		controller.form.template_values.right_curso_id = 4;

		spyOn(controller.cursos, "fetch");
		spyOn(controller.form, "set_cursos");

		var alumnos_left_filters;
		spyOn(controller.alumnos_left, "fetch").andCallFake(function(){
			alumnos_left_filters = this.status.filters;
		});

		var alumnos_right_filter;

		spyOn(controller.alumnos_right, "fetch").andCallFake(function(){
			alumnos_right_filter = this.status.filters;
		});

		controller.index();
		expect(controller.cursos.fetch).toHaveBeenCalled();

		controller.cursos.trigger("fetch:success", {data:{list:[{id:1}, {id:2}, {id:3}, {id:4}]}});
		
		expect(alumnos_left_filters).toEqual([{property:"curso", pattern:3,method:"EQUALS"}]);
		expect(controller.alumnos_left.fetch).toHaveBeenCalled();
		
		controller.alumnos_left.trigger("fetch:success", {data:{list:"alumnos_left"}});
		
		expect(controller.form.template_values.alumnos_left).toBe("alumnos_left");
		expect(alumnos_right_filter).toEqual([{property:"curso", pattern:4,method:"EQUALS"}]);
		expect(controller.alumnos_right.fetch).toHaveBeenCalled();

	});

	it("renders form on alumnos fetch success", function(){

		var controller = new AlumnosSwitchController(new BaseRouter());
		spyOn(controller, "view");
		spyOn(controller.form, "render");
		
		controller.alumnos_right.trigger("fetch:success", {data:{list:"alumnos_right"}});

		expect(controller.form.template_values.alumnos_right).toBe("alumnos_right");
		expect(controller.view).toHaveBeenCalledWith(controller.form);
		expect(controller.form.render).toHaveBeenCalled();

	});

	it("executes cursos.fetch and sets the form template_values for cursos selected on cursos:change event", function(){

		var controller = new AlumnosSwitchController(new BaseRouter());
		spyOn(controller.cursos, "fetch");

		controller.form.trigger("cursos:changed", 5, 8);

		expect(controller.form.template_values.left_curso_id).toBe(5);
		expect(controller.form.template_values.right_curso_id).toBe(8);
		expect(controller.cursos.fetch).wasCalled();

	});

	it("triggers a custom:info error on swap_list:repeated:values bus event with a message", function(){

		var controller = new AlumnosSwitchController(new BaseRouter());

		var actual_message;
		EventBus.on("custom:info", function(message){
			actual_message = message;
		});

		EventBus.trigger("swap_list:repeated:values", ["alumno1"]);

		expect(actual_message).toNotBe(undefined);
		expect(actual_message).toNotBe("");

	});

	it("saves_matriculas on form submit", function(){

		var controller = new AlumnosSwitchController(new BaseRouter());
		var mocked_model = prepare_mocked_model_for(controller);

		spyOn(mocked_model, "save_matriculas_by_curso");
		controller.form.trigger("submit", "data");
		expect(mocked_model.save_matriculas_by_curso).toHaveBeenCalledWith("data");

		spyOn(controller.feedback, "render");
		mocked_model.trigger("cursos:save:success");

		expect(controller.feedback.render).toHaveBeenCalled();

	});

});

