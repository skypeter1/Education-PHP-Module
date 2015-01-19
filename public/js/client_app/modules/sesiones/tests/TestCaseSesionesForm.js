describe("TestCaseSesionesForm", function() {

	it("has a non default template", function(){

		var form = new SesionesForm();
		expect(form.template).toNotBe("default");

	});

	it("resubscribes template event", function() {
		
		spyOn(SesionesForm.prototype, "resubscribe_template_event");
		var form = new SesionesForm();
		expect(SesionesForm.prototype.resubscribe_template_event).toHaveBeenCalled();

	});

	it("transforms profesores to a label:value object on set_profesores", function() {
	
		var form = new SesionesForm();
		var profesores = [{id:1, name:"profe1"}, {id:2, name:"profe2"}];

		form.set_profesores(profesores);

		var transformed = form.template_values.profesores;

		expect(transformed[0]).toEqual({label:"profe1", value:1});
		expect(transformed[1]).toEqual({label:"profe2", value:2});
		
	});

	it("has click a.validate_sesion event", function(){

		var form = new SesionesForm();
		expect(form.events["click a.validate_sesion"]).toEqual("validate_sesion");

	});

	it("sets validate sesion to 1 and submits form on validate_sesion", function() {
	
		var form = new SesionesForm();
		var template = "<form><input name='estado' value='0'></input></form>";
		form.set_template(template);

		form.render_template();

		var fake_event = {preventDefault: function(){}};
		spyOn(fake_event, "preventDefault");
		spyOn(form, "submit");

		form.validate_sesion(fake_event);
		expect(fake_event.preventDefault).wasCalled();

		var values = form.get_values();

		expect(values.estado).toEqual("1");
		expect(form.submit).wasCalled();

	});

	it("has click a.select_curso event", function() {

		var form = new SesionesForm();
		
		expect(form.events["click .select_curso"]).toBe("select_curso_event");	

	});

	it("triggers select:curso on select_curso_event", function() {
		
		var form = new SesionesForm();

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

	it("has click a.select_profesor event", function() {

		var form = new SesionesForm();
		expect(form.events["click .select_profesor"]).toBe("select_profesor_event");	

	});

	it("triggers select:profesor on select_profesor_event", function() {
		
		var form = new SesionesForm();

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


});