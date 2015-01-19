describe("NotasGridController", function() {
	
	it("creates and subscribes to curso-overview route", function() {

		var controller = new NotasGridController(new BaseRouter());

		spyOn(controller, "index");

		Backbone.history.loadUrl("curso-overview/1");

		expect(controller.index).toHaveBeenCalled();

	});

	it("fetches curso overview on index", function() {
		
		var controller = new NotasGridController(new BaseRouter());
		var mocked_model = prepare_mocked_model_for(controller);

		spyOn(mocked_model, "get_overview");
		spyOn(controller.grid, "render");
		spyOn(controller, "view");

		controller.index(1);

		expect(controller.grid.render).wasCalled();
		expect(controller.view).wasCalledWith(controller.grid);
		expect(mocked_model.get_overview).wasCalledWith(1);

	});

	it("renders grid on get_overview success", function() {
		
		var controller = new NotasGridController(new BaseRouter());
		var mocked_model = prepare_mocked_model_for(controller);

		spyOn(mocked_model, "get_overview");
		spyOn(controller.grid, "render_template");

		controller.index(1);

		mocked_model.trigger("cursos:fetch:success", {}, {data:{overview:"overview"}});

		expect(controller.grid.render_template).wasCalled();
		expect(controller.grid.template_values.overview).toEqual("overview");

	});

	it("saves_pesos on view save:pesos event", function(){

		var controller = new NotasGridController(new BaseRouter());
		var mocked_model = prepare_mocked_model_for(controller);
		spyOn(mocked_model, "save_pesos");

		controller.grid.trigger("save:pesos", {"curso":"14", "pesos":"pesos_value"});

		expect(mocked_model.save_pesos).wasCalledWith({"curso":"14", "pesos":"pesos_value"});

	});

	function prepare_mocked_model_for(controller, data)
	{
		if(data === undefined) data = {};
		
		var mock = new controller.model(data);
		spyOn(controller, "model").andReturn(mock);
		return mock;
	}

});