describe("TestCaseUsersController", function() {

	it("has users as his namespace", function(){

		var controller = new UsersController(new BaseRouter());
		expect(controller.namespace).toBe("users");

	});

	it("sets User:: as his auth namespace", function(){

		spyOn(CrudController.prototype, "set_auth_namespace");
		var controller = new UsersController(new BaseRouter());

		expect(CrudController.prototype.set_auth_namespace).toHaveBeenCalledWith("User::");

	});

	it("has User as his model", function(){

		var controller = new UsersController(new BaseRouter());

		var controller_model = new controller.model();
		expect(controller_model instanceof User).toBe(true);
	});

	it("has UsersForm as his form", function(){

		var controller = new UsersController(new BaseRouter());
		expect(controller.form instanceof UsersForm).toBe(true);
	});

	it("has UsersTable as his list", function(){

		var controller = new UsersController(new BaseRouter());
		expect(controller.list instanceof UsersTable).toBe(true);
	});

	it("fetches proveedores on form can:render event", function() {

		var controller = new UsersController(new BaseRouter());

		spyOn(controller.proveedores, "fetch");
		controller.form.trigger_can_render();

		expect(controller.proveedores.fetch).wasCalled();

	});

	it("sets proveedores to form and renders it on proveedores fetch success", function() {
		
		var controller = new UsersController();

		var actual_proveedores;
		spyOn(controller.form, "render_template").andCallFake(function(){
			actual_proveedores = this.template_values.proveedores;
		});

		controller.proveedores.trigger("fetch:success", {data:{list:[{id:1, nombre:"proveedor"}]}});

		expect(actual_proveedores).toEqual([{value:1, label:"proveedor"}]);

	});

});