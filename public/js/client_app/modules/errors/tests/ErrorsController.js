var template_values;

describe("ErrorsController", function(){

	beforeEach(function(){
		this.bus = EventBus;
		
		this.fixture_id = "fixture_id";
		setFixtures("<div id='"+this.fixture_id+"'></div>");
		this.fixture_container = $("#"+this.fixture_id);
		
		this.controller = new ErrorsController(this.fixture_id);
	});
	
	afterEach(function(){
		this.bus.off();
	});
	
	it("has ErrorView as this.view dom element as this.container, id on instance", function(){
		
		expect(this.controller.view instanceof GeneralErrorView).toBe(true);
		expect(this.controller.container).toBe(this.fixture_container);
	});
	
	it("show errors on reponse:error event in top of his container and sets a retry function to the view is defined", function(){
	
		var template_values_errors;
		spyOn(this.controller.view, "render").andCallFake($.proxy(function(){
			template_values = this.controller.view.template_values;
		},this));
		
		var function_setted_to_view_as_retry_function = false;
		var mock_function = function(){
			function_setted_to_view_as_retry_function = true;
		};
	
		this.bus.trigger("request:error", {status:404, statusText:"status text", responseText:"response text"}, mock_function);
		
		this.controller.view.retry_function();
		expect(function_setted_to_view_as_retry_function).toBe(true);
		
		expect(template_values.status).toEqual(404);
		expect(template_values.statusText).toEqual("status text");
		expect(template_values.responseText).toEqual("response text");
	});
	
	it("shows errors on authorization:error event", function(){
		var template_values_errors;
		spyOn(this.controller.view, "render").andCallFake($.proxy(function(){
			template_values = this.controller.view.template_values;
		},this));
		
		this.bus.trigger("authorization:error");
		
		expect(template_values.status).toEqual("");
		expect(template_values.statusText !== "").toBe(true);
		expect(template_values.responseText !== "").toBe(true);
	});
	
	it("shows errors on exception:thrown event", function(){
		var template_values_errors;
		spyOn(this.controller.view, "render").andCallFake($.proxy(function(){
			template_values = this.controller.view.template_values;
		},this));
		
		this.bus.trigger("exception:thrown", "Exception");
		
		expect(template_values.status).toEqual("");
		expect(template_values.statusText !== "").toBe(true);
		expect(template_values.responseText).toBe("<pre>Exception</pre>");
	});
	
	it("shows errors on custom:error event", function(){
		var template_values_errors;
		spyOn(this.controller.view, "render").andCallFake($.proxy(function(){
			template_values = this.controller.view.template_values;
		},this));
		
		this.bus.trigger("custom:error", "error message");
		
		expect(template_values.status).toEqual("");
		expect(template_values.statusText !== "").toBe(true);
		expect(template_values.responseText).toBe("error message");
	});
});
