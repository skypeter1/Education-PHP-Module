describe("AlumnosForm", function() {

	it("has a template diferent to default", function() {
		
		var form = new AlumnosForm();
		expect(form.template).toNotBe("default");

	});
	
	it("resubscribes to got:template event and triggers a can:render event", function(){

		var form = new AlumnosForm();

		var event_triggered = false;
		form.on("can:render", function(){
			event_triggered = true;
		});

		form.trigger("got:template");

		expect(event_triggered).toBe(true);

	});

	it("transforms pac clients array to a label:value type object on set_pac_clients", function() {
		
		var form = new AlumnosForm();
		var clients_array = [{id:1, nombre:"client1"}, {id:2, nombre:"client2"}];

		form.set_pac_clients(clients_array);

		var transformed_clients = form.template_values.pac_clients;

		expect(transformed_clients[0]).toEqual({label:"client1", value:1});
		expect(transformed_clients[1]).toEqual({label:"client2", value:2});
		expect(form.pac_clients instanceof PacClientsCollection).toBe(true);
		expect(form.pac_clients.toJSON()).toEqual(clients_array);

	});

	it("fills some default fields on pac client select change with pacclients info", function(){

		var form = new AlumnosForm();
		var template = "<form>"+
				"<select id='cliente_pac_field'><option selected='selected' value='1'></option><option value='5'></option></select>"+
				"<input name='email'>"+
				"<input name='direccion'>"+
				"<input name='celular'>"+
				"<input name='telefono'>"+
			"</form>";

		var clients_array = [{id:1, nombre:"client1", celular:"5555", telefono:"666", direccion:"direccion", email: "email"}];
		form.set_template(template);
		form.render_template();
		form.set_pac_clients(clients_array);

		$(form.el).find("#cliente_pac_field").change();

		expect($(form.el).find("[name='email']").val()).toBe("email");
		expect($(form.el).find("[name='celular']").val()).toBe("5555");
		expect($(form.el).find("[name='direccion']").val()).toBe("direccion");
		expect($(form.el).find("[name='telefono']").val()).toBe("666");

		$(form.el).find("#cliente_pac_field").val("5");
		$(form.el).find("#cliente_pac_field").change();

		expect($(form.el).find("[name='email']").val()).toBe("email");
		expect($(form.el).find("[name='celular']").val()).toBe("5555");
		expect($(form.el).find("[name='direccion']").val()).toBe("direccion");
		expect($(form.el).find("[name='telefono']").val()).toBe("666");

	});
});