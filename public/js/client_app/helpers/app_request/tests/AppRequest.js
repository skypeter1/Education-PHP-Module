describe("AppRequest", function(){
	
	beforeEach(function(){
		this.bus = EventBus;
		this.server = sinon.fakeServer.create();
	});
	
	afterEach(function(){
		this.bus.off();
		this.server.restore();
	});
	
	it("calls jquery ajax method with passed options", function(){
		spyOn($, "ajax");
		var options = {url:"url"};
		
		new AppRequest(options);
		
		expect($.ajax).toHaveBeenCalledWith(options);
	});
	
	it("tiggers request:started before ajax and request:finished after it", function(){
		
		var request_started = false;
		this.bus.on("request:started", function(){
			request_started = true;
		});
		
		var request_finished = false;
		this.bus.on("request:finished", function(){
			request_finished = true;
		});
		
		new AppRequest();
		expect(request_started).toBe(true);
		this.server.respond();
		expect(request_finished).toBe(true);
	});
	
	it("not triggering request:started if startEvent option set To false", function(){
		
		var request_started = false;
		this.bus.on("request:started", function(){
			request_started = true;
		});

		new AppRequest({startEvent:false});
		expect(request_started).toBe(false);
		this.server.respond();
	});
	
	it("triggers request:error on request fail", function(){
		
		var request_error = "";
		this.bus.on("request:error", function(error){
			request_error = error;
		});
		this.server.respondWith("POST", "",[404, {"Content-Type": "application/json"},'error_response']);
		new AppRequest();
		this.server.respond();
		expect(request_error.responseText).toBe("error_response");
	});
	
	it("triggers request:error on request fail", function(){
		
		var request_error = "";
		this.bus.on("request:error", function(error){
			request_error = error;
		});
		
        this.server.respondWith("POST", "",[404, {"Content-Type": "application/json"},'error_response']);
		new AppRequest();
		this.server.respond();
		expect(request_error.responseText).toBe("error_response");
	});
	
	
	it("also executes error function passed on options", function(){
	
		this.server.respondWith("POST", "",[500, {"Content-Type": "application/json"},'error']);
		
		var options = {};
		
		var passed_error_var = "";
		var error_response;

		options.error = $.proxy(function(passed_var, response)
		{
			passed_error_var = passed_var;
			error_response = response;	
			
		}, this, "passed_var");
		
		var callback;
		this.bus.on("request:error", function(response, retry_callback){
			callback = retry_callback;
		});
		
		new AppRequest(options);
		this.server.respond();
		
		expect(passed_error_var).toBe("passed_var");
		expect(error_response.responseText).toBe("error");
		
		spyOn($, "ajax");
		callback();
		expect($.ajax).toHaveBeenCalled();
		expect($.ajax.mostRecentCall.args[0]).toBe(options);
	});
	
	it("redirects if request success but with not_loged_error on errors array", function(){
	
		this.server.respondWith("POST", "",
						[200, {"Content-Type": "application/json"},'{"data":{}, "errors":["error_not_loggedin"]}']);
		
		spyOn(AppRequest, "redirect");

		new AppRequest();
		this.server.respond();
		expect(AppRequest.redirect).toHaveBeenCalledWith("login");
	});
	
	it("triggers exception:thrown event on respnse.exception not null and prevents success execution", function(){
	
		this.server.respondWith("POST", "",[200, {"Content-Type": "application/json"}
		,'{"data":{"test":"test"}, "errors":[], "exception":"exception"}']);
		
		
		var exception_message = "";
		this.bus.on("exception:thrown", function(message){
			exception_message = message;
		});
		
		var options = {};
		var success_triggered = false;
		options.success = function(){success_triggered = true;};
		
		new AppRequest(options);
		this.server.respond();
		
		expect(exception_message).toBe("exception");
		expect(success_triggered).toBe(false);
	});
	
	it("also executes success function passed on options", function(){
	
		this.server.respondWith("POST", "",[200, {"Content-Type": "application/json"},'{"data":{"test":"test"}, "errors":[]}']);
		
		var options = {};
		
		var passed_success_var = "";
		var success_response;
		options.success = $.proxy(function(passed_var, response)
		{
            passed_success_var = passed_var;
            success_response = response;	
			
		}, this, "passed_var");
		
		new AppRequest(options);
		this.server.respond();
		
		expect(passed_success_var).toBe("passed_var");
		expect(success_response.data.test).toBe("test");	
	});
});
