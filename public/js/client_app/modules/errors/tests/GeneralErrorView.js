describe("GeneralErrorView", function(){
	
	it("has click a.retry event atached to retry function", function(){
		
		var view = new GeneralErrorView();
		
		expect(view.events["click a.retry"]).toBe("retry");
		
	});
	
	it("prevents event default, hides modal and executes his retry_function", function(){
		
		var fake_event = {};
		fake_event.preventDefault = function(){};
		spyOn(fake_event, "preventDefault");

		var view = new GeneralErrorView();
		
		var element_modal;
		var argument_for_modal = "";
		$.fn.modal = function(argument)
		{
			argument_for_modal = argument;
			element_modal = this;
		};
		
		spyOn(view, "retry_function");
		
		view.retry(fake_event);
		
		expect(fake_event.preventDefault).toHaveBeenCalled();
		expect(view.retry_function).toHaveBeenCalled();
		expect(element_modal).toBe($(view.el));
		expect(argument_for_modal).toBe("hide");
		
	});
	
	it("executes .modal() on render and calls parent", function(){
		
		var view = new GeneralErrorView();
		
		var element_modal;
		$.fn.modal = function(){element_modal = this;};
		
		spyOn(BaseView.prototype, "render");
		
		view.render();
		
		expect(element_modal).toBe($(view.el));
		expect(BaseView.prototype.render).toHaveBeenCalled();
	});
	
});