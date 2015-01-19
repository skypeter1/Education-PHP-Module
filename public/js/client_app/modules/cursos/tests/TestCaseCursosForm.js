describe("CursosForm", function() {

	it("has a template diferent to default", function() {
		
		var form = new CursosForm();
		expect(form.template).toNotBe("default");

	});

	it("transforms pac products array to a label:value type object on set_pac_products", function() {
		
		var form = new CursosForm();
		var products_array = [{id:1, nombre:"curso1", nombre_bodega:"bodega1", id_bodega:"id_bodega1"}, 
							{id:2, nombre:"curso2", nombre_bodega:"bodega2", id_bodega:"id_bodega2"}];

		form.set_pac_products(products_array);

		var transformed_products = form.template_helpers.pac_products;

		expect(transformed_products[0]).toEqual({label:"bodega1 - curso1", value:"1-id_bodega1"});
		expect(transformed_products[1]).toEqual({label:"bodega2 - curso2", value:"2-id_bodega2"});

	});
	
	it("transforms bodegas array to a label:value type object on set_bodegas", function() {
		
		var form = new CursosForm();
		var bodegas_array = [{id:1, nombre:"Villa Flora"}, {id:2, nombre:"Batan"}];

		form.set_bodegas(bodegas_array);

		var transformed_bodegas = form.template_helpers.bodegas;

		expect(transformed_bodegas[0]).toEqual({label:"Villa Flora", value:1});
		expect(transformed_bodegas[1]).toEqual({label:"Batan", value:2});

	});

	it("transforms profesores array to a label:value object on set_profesores", function() {

		var form = new CursosForm();
		var profesores = [{id:2, name: "profe1"}, {id:45, name: "profe2"}];

		form.set_profesores(profesores);

		var transformed_profesores = form.template_helpers.profesores;

		expect(transformed_profesores[0]).toEqual({label:"profe1", value:2});
		expect(transformed_profesores[1]).toEqual({label:"profe2", value:45});

	});

	it("resubscribes to got:template event and triggers a can:render event", function(){

		var form = new CursosForm();

		var event_triggered = false;
		form.on("can:render", function(){
			event_triggered = true;
		});

		form.trigger("got:template");

		expect(event_triggered).toBe(true);

	});

	it("has click a.select_profesor event", function() {

		var form = new CursosForm();
		expect(form.events["click .select_profesor"]).toBe("select_profesor_event");	

	});

	it("triggers select:profesor on select_profesor_event", function() {
		
		var form = new CursosForm();

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