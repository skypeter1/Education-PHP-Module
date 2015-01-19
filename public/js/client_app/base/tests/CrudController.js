describe("CrudController", function() {

	beforeEach(function(){
		this.bus = EventBus;
		this.router = new BaseRouter();
		this.controller = new CrudController("id", this.router);
		this.controller.show = function(){};
	});
	
	afterEach(function(){
		this.bus.off();
	});
	
	describe("initialization", function(){
		
		it("has all BaseComponents as default components", function(){

			spyOn(BaseCollection.prototype, "initialize").andCallThrough();
			var controller = new CrudController("namespace_test", this.router);

			var model = new controller.model();
			expect(model.namespace).toBe("namespace_test");

			expect(controller.collection instanceof BaseCollection).toBe(true);
			expect(controller.collection.namespace).toBe("namespace_test");

			var args_for_collection_instance = BaseCollection.prototype.initialize.argsForCall[0];
			expect(args_for_collection_instance[0].model instanceof controller.model).toBe(true);

			expect(controller.list instanceof TableView).toBe(true);
			expect(controller.list.collection).toBe(controller.collection);

			expect(controller.form instanceof BaseForm).toBe(true);
			expect(controller.form.namespace).toBe("namespace_test");

		});

		it("has BaseModel cloned objects instead of same reference object", function(){

			var controller1 = new CrudController("namespace_1", this.router);
			var controller2 = new CrudController("namespace_2", this.router);

			expect(controller1.model != controller2.model).toBe(true);
		});
		
	});
	
	describe("Routing", function(){
	
		it("saves the router in construct on this.router", function(){
			this.controller = new CrudController("namespace", this.router);
			expect(this.controller.router).toBe(this.router);
		});

		it("subscribes to a single crud namespace event routing", function(){

			spyOn(this.controller, "index");
			spyOn(this.controller, "show");
			spyOn(this.controller, "add");
			spyOn(this.controller, "edit");

			this.controller.subscribe_to_crud("test_namespace");

			this.bus.trigger("test_namespace:route:index");
			expect(this.controller.index).toHaveBeenCalled();

			this.bus.trigger("test_namespace:route:show");
			expect(this.controller.show).toHaveBeenCalled();

			this.bus.trigger("test_namespace:route:new");
			expect(this.controller.add).toHaveBeenCalled();

			this.bus.trigger("test_namespace:route:edit");
			expect(this.controller.edit).toHaveBeenCalled();

		});
		
		it("sets on the router crud routing for passed namespace", function(){
			spyOn(this.router, "create_crud_for");
			this.controller = new CrudController("namespace", this.router);
			expect(this.router.create_crud_for).toHaveBeenCalledWith("namespace");
		});

		it("subscribes for passed namespaced crud events", function(){
			spyOn(CrudController.prototype, "subscribe_to_crud");
			this.controller = new CrudController("namespace", this.router);
			expect(this.controller.subscribe_to_crud).toHaveBeenCalledWith("namespace");
		});
	});
	
	describe("index", function() {
		
		it("calls controller collection to fetch and view with the list", function(){
			this.controller = new CrudController("namespace", this.router);
				
			spyOn(this.controller.collection, "fetch");
			spyOn(this.controller, "view");
			this.controller.index();
			
			expect(this.controller.collection.fetch).toHaveBeenCalled();
			expect(this.controller.view).toHaveBeenCalledWith(this.controller.list);
		});
		
		it("calls render_list on collection fetch:success", function(){
			
			this.controller = new CrudController("namespace", this.router);	
			
			spyOn(this.controller.list, "render");
			
			this.controller.list.collection.trigger("fetch:success", {data:{list:[], number_of_entries:5}});
			
			expect(this.controller.list.render).toHaveBeenCalled();
		});
		
	});
	
	describe("new", function(){
		
		it("calls controller view function with the empty rendered form as argument", function(){
			
			this.controller.form.set_values(new BaseModel({name:"john"}));
			spyOn(this.controller, "view");
			
			var form_template_values_on_the_render_call;
			spyOn(this.controller.form, "render").andCallFake(function(){
				form_template_values_on_the_render_call = this.template_values;
			});			
			
			this.controller.add();
			
			expect(this.controller.view).toHaveBeenCalledWith(this.controller.form);
			expect(form_template_values_on_the_render_call).toEqual({});
			
		});
	});

	function prepare_mocked_model_for(controller, data)
	{
	if(data === undefined) data = {};
	
	var mock = new controller.model(data);
	spyOn(controller, "model").andReturn(mock);
	return mock;
	}

	function mock_model_to_trigger_errors_on_save_for(controller, errors)
	{
	var mock = prepare_mocked_model_for(controller);
	mock.save = function()
	{
		mock.trigger(this.namespace+":response:error", errors);
	};
	return mock;
	}

	function prevent_real_model_fetch(model)
	{
	spyOn(model, "fetch");
	}

	function get_spied_modal_confirm_message(modal)
	{
		var args = modal.confirm.mostRecentCall.args; 
		return args[0];
	}

	function confirm_spied_modal(modal)
	{
		var confirm_action = modal.confirm.mostRecentCall.args[1]; 
		confirm_action();
	}

	function assert_confirm_modal_shows_on_certain_ui_event_with_correct_parameters(event)
	{
	var model_id = 1;
	
	var controller = new CrudController("namespace", new BaseRouter());
	var mocked_model = prepare_mocked_model_for(controller, {id:model_id});
	controller.collection.add(mocked_model);
	
	spyOn(controller.confirm_modal, "confirm");
	spyOn(controller, "get_"+event+"_message").andCallFake(function(model){return "correct message "+model.get("id");});
	
	var expected_modal_callback = false;
	spyOn(controller, event+"_model").andCallFake(function(model){expected_modal_callback = true;});

	controller.list.trigger("ui:"+event, model_id);
	
	var message = get_spied_modal_confirm_message(controller.confirm_modal);
	expect(message).toBe("correct message "+model_id);
	expect(controller.confirm_modal.confirm).toHaveBeenCalled();
	
	confirm_spied_modal(controller.confirm_modal);
	expect(expected_modal_callback).toBe(true);
	}
	
	describe("edit", function(){
		
		it("fetch the server for the model being edited and shows form", function(){
	
			var controller = new CrudController("namespace", this.router);
			var mocked_model = prepare_mocked_model_for(controller);
			spyOn(mocked_model, "fetch");
			spyOn(controller, "view");
			
			controller.edit(5);
			
			expect(controller.model).toHaveBeenCalledWith({id:5});
			expect(mocked_model.fetch).toHaveBeenCalled();
			expect(controller.view).toHaveBeenCalledWith(controller.form);
			
		});
		
		it("shows filled form on model fetch success", function(){
			
			var controller = new CrudController("namespace", this.router);
			var mocked_model = prepare_mocked_model_for(controller);
			prevent_real_model_fetch(mocked_model);
			
			spyOn(controller.form, "set_values");
			spyOn(controller.form, "render");
			
			controller.edit(5);
			
			var expected_model = new BaseModel({"username":"Jon", "password":"snow", "id":"5"});
			mocked_model.trigger("namespace:fetch:success", expected_model);
			
			expect(controller.form.set_values).toHaveBeenCalledWith(expected_model.toJSON());
			expect(controller.form.render).toHaveBeenCalled();
		});
		
		it("triggers edit on list ui:edit event", function(){
			
			var controller = new CrudController("namespace", this.router);
			spyOn(controller, "edit");
			
			controller.list.trigger("ui:edit", 2);
			
			expect(controller.edit).toHaveBeenCalledWith(2);
		});
	});
	
	describe("form submit", function(){
		
		it("shows errors if request is not valid", function(){  
  
			var controller = new CrudController("namespace", this.router);
			var mocked_model = mock_model_to_trigger_errors_on_save_for(controller, ["error1", "error2"]);
			
			spyOn(controller.form, "render_errors");  
			controller.form.trigger("submit"); 
			expect(controller.form.render_errors).toHaveBeenCalledWith(["error1", "error2"]);
			
		});
		
		it("saves the model to the server if valid and redirects to list", function(){
			
			var controller = new CrudController("namespace", this.router);
			var mocked_data = {"email":"John","password":"snow"};
			var mocked_model = prepare_mocked_model_for(controller);

			spyOn(mocked_model, "save");
			spyOn(this.router, "navigate");
			
			controller.form.trigger("submit", mocked_data);
			expect(controller.model).toHaveBeenCalledWith(mocked_data);
			expect(mocked_model.save).toHaveBeenCalled();
			
			mocked_model.trigger("namespace:save:success");
			expect(this.router.navigate).toHaveBeenCalledWith("namespace", true);
			
			controller.as_modal();
			spyOn(controller, "index");
			mocked_model.trigger("namespace:save:success");
			expect(this.router.navigate.callCount).toBe(1);
			expect(controller.index).toHaveBeenCalled();			
		});

		it("saves model to the server and emptyes the form if flag true passed on submit as second param", function() {
			
			var controller = new CrudController("namespace", this.router);
			var mocked_data = {"email":"John","password":"snow"};
			var mocked_model = prepare_mocked_model_for(controller);

			spyOn(mocked_model, "save");
			spyOn(this.router, "navigate");
			spyOn(controller.feedback_view, "render");

			controller.form.trigger("submit", mocked_data, true);

			expect(controller.model).toHaveBeenCalledWith(mocked_data);
			expect(mocked_model.save).toHaveBeenCalled();

			mocked_model.trigger("namespace:save:success");
			expect(this.router.navigate).toHaveBeenCalledWith("namespace/new", true);
			expect(controller.feedback_view.render).toHaveBeenCalled();
		});
		
	});
	
	describe("delete model", function(){
			
		it("shows ConfirmModal on ui delete event with expected message and callback", function(){
			
			var event = "delete";
			assert_confirm_modal_shows_on_certain_ui_event_with_correct_parameters(event);
			
		});
		
		it("deletes model and executes index on success", function(){
			var controller = new CrudController("namespace", this.router);
			var mocked_model = prepare_mocked_model_for(controller);
			
			spyOn(mocked_model, "destroy");
			controller.delete_model(1, 1);
			expect(mocked_model.destroy).toHaveBeenCalledWith({wait: true});
			
			spyOn(controller, "index");
			mocked_model.trigger("namespace:delete:success");
			expect(controller.index).toHaveBeenCalled();
		});
		
		it("execute delete_model_error with the errors and model as an argument on response:error", function(){
			var controller = new CrudController("namespace", this.router);
			var mocked_model = prepare_mocked_model_for(controller);
			
			spyOn(controller, "delete_model_error");
			spyOn(mocked_model, "destroy");
			controller.delete_model(1, 1);
			
			mocked_model.trigger("namespace:response:error", "errors", mocked_model);
			expect(controller.delete_model_error).toHaveBeenCalledWith("errors", mocked_model);
		});
		
	});
	
	describe("block model", function(){
		it("shows ConfirmModal on ui block event with expected message and callback", function(){
			
			var event = "block";
			assert_confirm_modal_shows_on_certain_ui_event_with_correct_parameters(event);
			
		});
		
		it("blocks model and executes index on success", function(){
			var controller = new CrudController("namespace", this.router);
			var mocked_model = prepare_mocked_model_for(controller);
			
			spyOn(mocked_model, "block");
			controller.block_model(1, 1);
			expect(mocked_model.block).toHaveBeenCalledWith(true);
			
			spyOn(controller, "index");
			mocked_model.trigger("namespace:block:success");
			expect(controller.index).toHaveBeenCalled();
		});
		
		it("execute block_model_error with the errors and model as an argument on response:error", function(){
			var controller = new CrudController("namespace", this.router);
			var mocked_model = prepare_mocked_model_for(controller);
			
			spyOn(controller, "block_model_error");
			spyOn(mocked_model, "block");
			controller.block_model(1, 1);
			
			mocked_model.trigger("namespace:response:error", "errors", mocked_model);
			expect(controller.block_model_error).toHaveBeenCalledWith("errors", mocked_model);
		});
	});
	
	
	describe("unblock model", function(){
		it("shows ConfirmModal on ui unblock event with expected message and callback", function(){
			
			var event = "unblock";
			assert_confirm_modal_shows_on_certain_ui_event_with_correct_parameters(event);
			
		});
		
		it("unblocks model and executes index on success", function(){
			var controller = new CrudController("namespace", this.router);
			var mocked_model = prepare_mocked_model_for(controller);
			
			spyOn(mocked_model, "block");
			controller.unblock_model(1, 1);
			expect(mocked_model.block).toHaveBeenCalledWith(false);
			
			spyOn(controller, "index");
			mocked_model.trigger("namespace:unblock:success");
			expect(controller.index).toHaveBeenCalled();
		});
	});
	
	
	
	describe("list controls", function(){

		it("executes index on list triggers ui:refresh", function(){

			spyOn(this.controller.collection, "fetch");
			this.controller.list.trigger("ui:refresh");
			expect(this.controller.collection.fetch).toHaveBeenCalled();

		});	
		
		it("executes new on list triggers ui:new", function(){

			spyOn(this.controller, "add");
			this.controller.list.trigger("ui:new");
			expect(this.controller.add).toHaveBeenCalled();

		});
		
		it("executes index on form triggers ui:cancel", function(){

			spyOn(this.controller, "index");
			this.controller.form.trigger("ui:cancel");
			expect(this.controller.index).toHaveBeenCalled();

		});
	});
	
	
	describe("no url mode", function(){
		
		it("sets a no_url flag to true on the controller", function(){
			
			var controller = new CrudController("id", this.router);
			expect(controller.no_url).toBe(false);
			
			controller.no_url_mode();
			expect(controller.no_url).toBe(true);
			
		});
		
		it("executes index on form_save_success instead of url route if no_url_mode active", function(){
			
			var controller = new CrudController("id", this.router);
			controller.no_url_mode();
			spyOn(controller, "index");
			spyOn(controller.router, "navigate");
			
			controller.form_save_success();
			
			expect(controller.index).toHaveBeenCalled();
			expect(controller.router.navigate).wasNotCalled();
			
		});
		
		it("sets no_url flag to true on controller form and list", function(){
			
			var controller = new CrudController("id", this.router);
			spyOn(controller.form, "no_url_mode");
			spyOn(controller.list, "no_url_mode");
            controller.no_url_mode();
			
			expect(controller.form.no_url_mode).toHaveBeenCalled();
			expect(controller.list.no_url_mode).toHaveBeenCalled();
			
		});
		
		it("removes form errors on close_modal", function(){
			var controller = new CrudController("id", this.router);
			spyOn(controller.form, "clear_errors");
			spyOn(BaseController.prototype, "modal");
			
			var view = "my_view";
			var modal_options = "options";
			var as_modal = true;
			controller.modal(view, modal_options, as_modal);
			
			var base_controller_modal_args = BaseController.prototype.modal.mostRecentCall.args;
			
			expect(base_controller_modal_args[0]).toBe(view);
			expect(base_controller_modal_args[1]).toBe(modal_options);
			expect(base_controller_modal_args[2]).toBe(as_modal);
			
			expect(controller.form.clear_errors).toHaveBeenCalled();
		});
	});
});


