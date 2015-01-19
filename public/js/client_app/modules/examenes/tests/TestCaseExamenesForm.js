describe("TestCaseExamenesForm", function() {

	it("has a non default template", function(){

		var form = new ExamenesForm();
		expect(form.template).toNotBe("default");

	});

	it("has click a.select_curso event", function() {

		var form = new ExamenesForm();
		
		expect(form.events["click .select_curso"]).toBe("select_curso_event");	

	});

	it("resubscribes template event", function() {
		
		spyOn(ExamenesForm.prototype, "resubscribe_template_event");
		var form = new ExamenesForm();
		expect(ExamenesForm.prototype.resubscribe_template_event).toHaveBeenCalled();

	});

	it("triggers select:curso on select_curso_event", function() {
		
		var form = new ExamenesForm();

		var event_triggered = false;
		form.on("select:curso", function(){
			event_triggered = true;
		});

		var fake_event = {preventDefault:function(){}};
		spyOn (fake_event, "preventDefault");

		form.select_curso_event(fake_event);
		expect(fake_event.preventDefault).wasCalled();
		expect(event_triggered).toBe(true);

	});

	it("transforms profesores on a label:value object on set profesores", function() {
		
		var form = new ExamenesForm();
		var profesores = [{name:"profe1", id:"1"}, {name:"profe2", id:"2"}];

		form.set_profesores(profesores);

		var transformed = form.template_values.profesores;

		expect(transformed[0]).toEqual({label:"profe1", value:"1"});
		expect(transformed[1]).toEqual({label:"profe2", value:"2"});
	});

	it("has click a.select_profesor event", function() {

		var form = new ExamenesForm();
		expect(form.events["click .select_profesor"]).toBe("select_profesor_event");	

	});

	it("triggers select:profesor on select_profesor_event", function() {
		
		var form = new ExamenesForm();

		var event_triggered = false;
		form.on("select:profesor", function(){
			event_triggered = true;
		});

		var fake_event = {preventDefault:function(){}};
		spyOn (fake_event, "preventDefault");

		form.select_profesor_event(fake_event);
		expect(fake_event.preventDefault).wasCalled();
		expect(event_triggered).toBe(true);

	});

	it("has categorias_options on template_helpers", function() {
		
		var form = new ExamenesForm();


		var expected = [{label:"LAB", value:"LAB"},
		{label:"GVR", value:"GVR"},
		{label:"ORAL", value:"ORAL"},
		{label:"Categoria 4", value:"Categoria 4"},
		{label:"Categoria 5", value:"Categoria 5"},
		{label:"Categoria 6", value:"Categoria 6"}];

		expect(form.template_helpers.categorias_options).toEqual(expected);

	});

});