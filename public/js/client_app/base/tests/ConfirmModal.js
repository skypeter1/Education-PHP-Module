describe("ConfirmModal", function(){
	
	it("has public/templates/confirm_modal.html as default template", function(){
		
		var view = new ConfirmModal();
		expect(view.template).toBe("public/templates/confirm_modal.html");
		
	});
	
	it("has execute_action on click a.execute", function(){
		
		var view = new ConfirmModal();
		expect(view.events["click a.execute"]).toBe("execute_action");
		
	});
	
	it("has close on click a.close_modal", function(){
		
		var view = new ConfirmModal();
		expect(view.events["click a.close_modal"]).toBe("close");
		
	});
	
	it("executes function setted on execute_action", function(){
		
		var view = new ConfirmModal();
		
		spyOn(view, "close");
		
		var action_executed = false;
		var action = function(){action_executed=true;};
		view.set_action(action);
		view.execute_action();
		
		expect(action_executed).toBe(true);
		expect(view.close).toHaveBeenCalled();
		
	});
	
	it("hides the modal on close", function(){
		
		var view = new ConfirmModal();
		var element_modal;
		var modal_params;
		$.fn.modal = function(argument)
		{
			modal_params = argument;
			element_modal = this;
		};
		
		view.close();
		expect(element_modal).toBe(view.el);
		expect(modal_params).toBe("hide");
	});
	
	it("renders modal with message and action passed on confirm", function(){
		
		var view = new ConfirmModal();
		
		var template_values_on_the_render_call = false;
		var action_on_the_render_call = false;
		spyOn(view, "render").andCallFake(function(){
			template_values_on_the_render_call = this.template_values;
			action_on_the_render_call = this.action;
		});
		
		var element_modal;
		$.fn.modal = function(argument)
		{
			element_modal = this;
		};
		
		var action = "test_action";
		view.confirm("confirm message", action);
		
		expect(template_values_on_the_render_call.message).toBe("confirm message");
		expect(action_on_the_render_call).toBe(action);
		expect(element_modal).toBe(view.el);
	});
	
	it("preventsDefault event on close and execute_action", function(){
		
		var view = new ConfirmModal();
		var fakeEvent = {};
		fakeEvent.preventDefault = function(){};
		spyOn(fakeEvent, "preventDefault");

		view.close(fakeEvent);
		expect(fakeEvent.preventDefault).toHaveBeenCalled();
		
		view.execute_action(fakeEvent);
		expect(fakeEvent.preventDefault.callCount).toBe(3);
	});
});
