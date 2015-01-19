describe("TestCaseUsersForm", function() {

	it("has a non default template", function(){

		var form = new UsersForm();
		expect(form.template).toNotBe("default");

	});

	it("resubscribes to got:template event and triggers a can:render event", function(){

		var form = new UsersForm();

		var event_triggered = false;
		form.on("can:render", function(){
			event_triggered = true;
		});

		form.trigger("got:template");

		expect(event_triggered).toBe(true);

	});

	it("trasnforms proveedores to a label:value object on set_proveedores", function(){

		var form = new UsersForm();
		var proveedores = [{id:1, nombre:"proveedor1"}, {id:2, nombre:"proveedor2"}];
		form.set_proveedores(proveedores);

		var expected = form.template_values.proveedores;

		expect(expected[0].label).toBe("proveedor1");
		expect(expected[1].label).toBe("proveedor2");

		expect(expected[0].value).toBe(1);
		expect(expected[1].value).toBe(2);
	});
});