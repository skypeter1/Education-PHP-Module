describe("BaseController", function(){
	
	beforeEach(function(){
		this.bus = EventBus;
		this.router = new BaseRouter();
		this.controller = new BaseController("id", this.router);
		this.controller.show = function(){};
		$.fn.modal = function(){};
	});
	
	afterEach(function(){
		this.bus.off();
	});
	
	describe("Rendering", function(){
		
		beforeEach(function(){
			this.fixture_id = "main_container";
			setFixtures("<div id='"+this.fixture_id+"'></div>");
			this.fixture_container = $("#"+this.fixture_id);
			this.router = new BaseRouter();
			this.controller = new BaseController("namespace", this.router);
		});
		
		it("switches views on the controller main container detaching the current view if necesary", function(){
			var first_view = new BaseView();
			
			this.controller.view(first_view);
			expect($(first_view.el).parent()).toBe(this.fixture_container);
			
			var second_view = new BaseView();
			
			this.controller.view(second_view);
			expect($(second_view.el).parent()).toBe(this.fixture_container);
			
			var first_view_has_been_detached = ($(first_view.el).parent().length === 0);
			expect(first_view_has_been_detached).toBe(true);
		});
		
		
		it("switches views only if the current view and the new view are not the same", function(){
			var view = new BaseView();
			spyOn(view, "atach");
			spyOn(view, "detach");
			
			this.controller.view(view);
			this.controller.view(view);
			
			expect(view.atach.callCount).toBe(1);
			expect(view.detach.callCount).toBe(0);
		});
		
		
		/*it("sets auth namespace to model and collection on set_auth_namespace", function(){
			var controller = new CrudController("id", new BaseRouter());
			spyOn(controller.collection, "set_auth_namespace");
			
			controller.set_auth_namespace("namespace");
			
			expect(controller.collection.set_auth_namespace).toHaveBeenCalledWith("namespace");
			expect(controller.model.prototype.auth_namespace).toBe("namespace");
		});*/
		
		it("shares last_view between controllers", function(){

			var first_controller = new BaseController("id", new BaseRouter());
			var second_controller = new BaseController("id", new BaseRouter());

			var first_controller_view = new BaseView();
			spyOn(first_controller_view, "atach");
			spyOn(first_controller_view, "detach");

			var second_controller_view = new BaseView();
			spyOn(second_controller_view, "atach");

			first_controller.view(first_controller_view);
			second_controller.view(second_controller_view);

			expect(first_controller_view.atach.callCount).toBe(1);
			expect(first_controller_view.detach.callCount).toBe(1);
			expect(second_controller_view.atach.callCount).toBe(1);
		});
		
		it("renders views as modal on modal mode true", function(){
			
			var  controller = new BaseController();
			controller.as_modal();
			var view = new BaseView();
			
			var modal_element;  
			spyOn(controller, "modal");
			controller.view(view);
			expect(controller.modal).toHaveBeenCalledWith(view);
		});
		
		it("hides modal on a normal view", function(){
			$.fn.modal = function(){};
			spyOn($.fn, "modal");
			
			var controller = new BaseController();
			controller.as_modal();
			
			var view = new BaseView();
			controller.view(view);
			
			controller.as_modal(false);
			controller.view(new BaseView());
			expect($.fn.modal).toHaveBeenCalledWith("hide");
		});
		
		it("accepts options for modal as a second parameter", function(){
			
			$.fn.modal = function(){};
			var controller = new BaseController();
			var view = new BaseView();
			
			spyOn($.fn, "modal");

			controller.modal(view, {test:"test"});
			expect($.fn.modal).toHaveBeenCalledWith({test:"test"});
			
		});
		
		it("accepts a boolean as a third parameter to set it as a modal_mode for the view", function(){
			
			$.fn.modal = function(){};
			var controller = new BaseController();
			var view = new BaseView();
				
			controller.modal(view, {}, false);	
			
			expect(view.modal_mode).toBe(false);	
		});
		
		it("prevents detaching and ataching to the modal if the view passed is the same", function(){
			
			var controller = new BaseController();
			var view = new BaseView();
			spyOn(view, "atach");
			spyOn(view, "detach");	
			
			controller.modal(view);
			controller.modal(view);	
			controller.modal(view);		
			
			expect(view.atach.callCount).toBe(1);
			expect(view.detach).wasNotCalled();
			
		});
	});
});
