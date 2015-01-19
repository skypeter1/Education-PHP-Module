function prepare_mocked_model_for(controller, data)
{
	if(data === undefined) data = {};
	
	var mock = new controller.model(data);
	spyOn(controller, "model").andReturn(mock);
	return mock;
}

describe("TestCaseExamenesController", function() {

	it("has examenes as his namespace", function(){

		var controller = new ExamenesController(new BaseRouter());
		expect(controller.namespace).toBe("examenes");

	});

	it("sets Examen:: as his auth namespace", function(){

		spyOn(CrudController.prototype, "set_auth_namespace");
		var controller = new ExamenesController(new BaseRouter());

		expect(CrudController.prototype.set_auth_namespace).toHaveBeenCalledWith("Examen::");

	});

	it("has Examene as his model", function(){

		var controller = new ExamenesController(new BaseRouter());

		var controller_model = new controller.model();
		expect(controller_model instanceof Examen).toBe(true);
	});

	it("has ExamenesForm as his form", function(){

		var controller = new ExamenesController(new BaseRouter());
		expect(controller.form instanceof ExamenesForm).toBe(true);
	});

	it("has ExamenesTable as his list", function(){

		var controller = new ExamenesController(new BaseRouter());
		expect(controller.list instanceof ExamenesTable).toBe(true);
	});

	it("has a cursos controller as modal", function() {
		
		spyOn(CursosController.prototype, "as_modal");
		var controller = new ExamenesController(new BaseRouter());

		expect(controller.cursos_modal instanceof CursosController).toBe(true);
		expect(CursosController.prototype.as_modal).wasCalled();
		expect(controller.cursos_modal.list.template_values.selectable).toBe(true);

	});

	it("shows cursos list as modal on select:curso form event", function() {
		
		var controller = new ExamenesController(new BaseRouter());
		spyOn(controller.cursos_modal, "index");

		document.help_vars.current_user = {name: 'test_name', rol: 'rol'};

		controller.form.select_curso();
		expect(controller.cursos_modal.index).wasCalled();
	});

	it("adds curso to form on cursos.list ui:row:selection event", function() {
		
		var controller = new ExamenesController(new BaseRouter());
		spyOn(controller.form, "get_values").andReturn({test:"test_value"});
		spyOn(controller.form, "render_template");
		spyOn(controller.cursos_modal, "close_modal");

		controller.cursos_modal.list.trigger("ui:row:selection", new Curso({id:2, nombre:"nombre"}));

		expect(controller.form.get_values).wasCalled();
		expect(controller.form.template_values.test).toBe("test_value");
		expect(controller.form.template_values.curso).toEqual({id:2, nombre:"nombre"});
		expect(controller.form.render_template).wasCalled();
		expect(controller.cursos_modal.close_modal).wasCalled();

	});

	it("fetches profesores on form can:render event if current_user is Administrador", function() {

		var controller = new ExamenesController(new BaseRouter());
		spyOn(controller.profesores, "fetch");

		document.help_vars.current_user = {name: 'test_name', rol: 'Administrador'};

		controller.form.trigger("can:render");
		expect(controller.profesores.fetch).wasCalled();

	});

	it("renders form on can:render if user is profesor", function(){

		var controller = new ExamenesController(new BaseRouter());
		spyOn(controller.form, "render_template");

		document.help_vars.current_user = {name: 'test_name', rol: 'profesor'};

		controller.form.trigger("can:render");
		expect(controller.form.render_template).wasCalled();

	});

	it("renders form on profesores fetch success", function() {

		var controller = new ExamenesController(new BaseRouter());
		spyOn(controller.form, "render_template");
		spyOn(controller.form, "set_profesores");


		controller.profesores.trigger("fetch:success", {data:{list:"profesores"}});

		expect(controller.form.set_profesores).wasCalledWith("profesores");
		expect(controller.form.render_template).wasCalled();

	});

	it("creates a new route on the router", function(){

		var controller = new ExamenesController(new BaseRouter());
		spyOn(controller, "notas");

		Backbone.history.loadUrl("examenes/notas/5");

		expect(controller.notas).wasCalledWith("5");

	});

	it("fetches alumnos on notas method, sets alumnos on notas_form values", function() {
		
		var controller = new ExamenesController(new BaseRouter());
		spyOn(controller.notas_collection, "fetch");
		spyOn(controller.alumnos, "fetch");
		spyOn(controller.notas_form, "render_template");
		spyOn(controller.notas_form, "set_alumnos");

		controller.notas(1);
		controller.current_examen = {curso:{id:1}};

		controller.notas_collection.trigger("fetch:success", {data:{list:"notas"}});

		expect(controller.notas_form.template_values.notas).toEqual("notas");
		expect(controller.alumnos.fetch).wasCalled();

		controller.alumnos.trigger("fetch:success", {data:{list:"alumnos"}});
		expect(controller.notas_form.set_alumnos).wasCalledWith("alumnos");
		expect(controller.notas_form.render_template).wasCalled();
	});

	it("saves notas on notas_form submit and returns to examenes table", function() {
	
		var controller = new ExamenesController(new BaseRouter());
		var mock_model = prepare_mocked_model_for(controller);
		spyOn(mock_model, "save_notas");
		spyOn(controller.router, "navigate");

		controller.notas_form.trigger("submit", "fake_values");
		expect(mock_model.save_notas).wasCalledWith({notas: "fake_values"});

		mock_model.trigger(controller.namespace+":save:success");
		expect(controller.router.navigate).wasCalled();

	});

});

