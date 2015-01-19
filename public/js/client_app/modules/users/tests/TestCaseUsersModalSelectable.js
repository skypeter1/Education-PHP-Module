describe("ProfesoresModalSelectable", function() {

	beforeEach(function(){
		this.TestController = function(){
			this.set_up_profesores_modal();
		};
		this.TestController.prototype = new BaseController();
		this.TestController.prototype.form = new BaseForm();
		this.TestController.prototype = _.extend(ProfesoresModalSelectable, this.TestController.prototype);
	});
	
	it("instances userscontroller as modal on this.profesores_modal", function() {
		
		spyOn(UsersController.prototype, "as_modal");
		spyOn(UsersController.prototype, "no_url_mode");

		var controller = new this.TestController();

		expect(controller.profesores_modal instanceof UsersController).toBe(true);
		expect(UsersController.prototype.as_modal).wasCalled();
		expect(UsersController.prototype.no_url_mode).wasCalled();
		expect(controller.profesores_modal.list.template_values.selectable).toEqual(true);
	});

	it("sets profesor on form and closes the modal", function() {
		
		var controller = new this.TestController();
		spyOn(controller.form, "render_template");
		spyOn(controller.profesores_modal, "close_modal");

		controller.profesores_modal.list.trigger("ui:row:selection", new BaseModel({id:"1", nombre:"test"}));

		expect(controller.form.template_values.profesor).toEqual({id:"1", nombre:"test"});
		expect(controller.form.render_template).wasCalled();
		expect(controller.profesores_modal.close_modal).wasCalled();
	});

	it("shows modal on form select:profesor event", function() {
		
		var controller = new this.TestController();
		spyOn(controller.profesores_modal, "index");

		controller.form.trigger("select:profesor");
		expect(controller.profesores_modal.index).wasCalled();

	});

});

