describe("BaseModel", function() {

	beforeEach(function(){
		this.bus = EventBus;
		this.server = sinon.fakeServer.create();
	});
	
    afterEach(function() {
        this.server.restore();
        this.bus.off();
    });

	
	it("returns the current attributes", function() {
		var model = new BaseModel({username:"john"});
		expect(model.get("username")).toBe("john");
	});
	
	describe("Request callbacks", function(){
	
		it("triggers bus and local success event on request success based on type parameter", function(){
			
			var model = new BaseModel({"name":"jon"});
			model.namespace = "test";
			
			var bus_event_params;
			this.bus.on("test:save:success", function(){bus_event_params = arguments;});

			var model_event_params;
			model.on("test:save:success", function(){model_event_params = arguments;});

			var simple_model_event_params;
			model.on("save", function(){simple_model_event_params = arguments;});
			
			var type = "save";
			var data = {data:{}, errors:[]};
			model.success_callback(type, model, data);
			
			expect(bus_event_params[0]).toBe(model);
			expect(bus_event_params[1]).toBe(data);
			
			expect(model_event_params[0]).toBe(model);
			expect(model_event_params[1]).toBe(data);

			expect(simple_model_event_params[0]).toBe(model);
			expect(simple_model_event_params[1]).toBe(data);
		});
		
		it("triggers bus and local error event on request success with errors", function(){
			var model = new BaseModel({"name":"jon"});
			model.namespace = "test";
			
			var bus_event_params;
			this.bus.on("test:response:error", function(){bus_event_params = arguments;});
			
			var model_event_params;
			model.on("test:response:error", function(){model_event_params = arguments;});
			
			var type = "test_type";
			var errors = ["error", "error2"];
			var data = {data:{}, errors:errors};
			model.success_callback(type, model, data);
			
			expect(bus_event_params[0]).toBe(errors);
			expect(bus_event_params[1]).toBe(model);
			
			expect(model_event_params[0]).toBe(errors);
			expect(model_event_params[1]).toBe(model);
		});
		
	});
	
	describe("save", function(){
		
		it("calls Backbone.Model.prototype.save with model success_callback and error_callback and save as event type", function(){
			
			spyOn(Backbone.Model.prototype, "save");
			var model = new BaseModel({"name":"name"});
			
			spyOn(model, "save").andCallThrough();
			
			var type_passed_on_callback;
			spyOn(model, "success_callback").andCallFake(function(type){type_passed_on_callback = type;});
			
			model.save();
			
			var callbacks_passed = Backbone.Model.prototype.save.mostRecentCall.args[1];
			
			callbacks_passed.success();
			expect(type_passed_on_callback).toBe("save");
		
		});
		
		it("checks for create permision if auth namespace setted", function(){
			
			window.auth = new Auth();
			spyOn($, "ajax");
			var model = new BaseModel();
			model.set_auth_namespace("UsersDomain::");
			
			var auth_error_triggered = false;
			this.bus.on("authorization:error", function(){auth_error_triggered = true;});
			model.save();
			expect($.ajax).wasNotCalled();
			expect(auth_error_triggered).toBe(true);
			
			auth.add_permission("UsersDomain::create");
			
			auth_error_triggered = false;
			model.save();
			expect($.ajax).toHaveBeenCalled();
			expect(auth_error_triggered).toBe(false);
		});
	});
	
	describe("destroy", function(){
		
		it("calls Backbone.Model.prototype.destroy with model success_callback and error_callback and delete as event type", function(){
			
			spyOn(Backbone.Model.prototype, "destroy");
			var model = new BaseModel({"id":"1"});
			
			spyOn(model, "destroy").andCallThrough();
			
			var type_passed_on_callback;
			spyOn(model, "success_callback").andCallFake(function(type){type_passed_on_callback = type;});
				
			model.destroy();
			
			var callbacks_passed = Backbone.Model.prototype.destroy.mostRecentCall.args[0];
			
			callbacks_passed.success();
			expect(type_passed_on_callback).toBe("delete");

		});
		
		it("checks for delete permision if auth namespace setted", function(){
			
			window.auth = new Auth();
			spyOn($, "ajax");
			var model = new BaseModel({id:1});
			model.set_auth_namespace("UsersDomain::");
			
			var auth_error_triggered = false;
			this.bus.on("authorization:error", function(){auth_error_triggered = true;});
			
			model.destroy();
			expect($.ajax).wasNotCalled();
			expect(auth_error_triggered).toBe(true);	
			
			auth.add_permission("UsersDomain::delete");
			
			auth_error_triggered = false;
			model.destroy();
			expect($.ajax).toHaveBeenCalled();
			expect(auth_error_triggered).toBe(false);	
		});
	});
	
	describe("block", function(){
		
		it("calls model save with block options set to true", function(){
			
			spyOn(Backbone, "sync");
			var model = new BaseModel({"id":"1"});
			
			//spyOn(model, "save").andCallThrough();
			
			var type_passed_on_callback;
			var model_passed_on_callback;
			spyOn(model, "success_callback").andCallFake(function(type, model){
				type_passed_on_callback = type;
				model_passed_on_callback = model;
			});
				
			model.block();
			
			var callbacks_passed = Backbone.sync.mostRecentCall.args[2];
			var model_passed = Backbone.sync.mostRecentCall.args[1];
			
			callbacks_passed.success();
			expect(type_passed_on_callback).toBe("block");
			expect(model_passed_on_callback).toBe(model);
			expect(model_passed.get("blocked")).toBe(true);
			
			model.block(false);
			callbacks_passed = Backbone.sync.mostRecentCall.args[2];
			model_passed = Backbone.sync.mostRecentCall.args[1];
			
			callbacks_passed.success();
			expect(type_passed_on_callback).toBe("unblock");
			expect(model_passed.get("blocked")).toBe(false);
		});
		
		it("checks for edit permision if auth namespace setted", function(){
			
			window.auth = new Auth();
			spyOn($, "ajax");
			var model = new BaseModel({id:1});
			model.set_auth_namespace("UsersDomain::");
			
			var auth_error_triggered = false;
			this.bus.on("authorization:error", function(){auth_error_triggered = true;});
			
			model.block();
			expect($.ajax).wasNotCalled();
			expect(auth_error_triggered).toBe(true);	
			
			auth.add_permission("UsersDomain::block");
			
			auth_error_triggered = false;
			model.block();
			expect($.ajax).toHaveBeenCalled();
			expect(auth_error_triggered).toBe(false);	
		});
	});
	
	describe("fetch", function(){
		
		beforeEach(function(){
			this.server = sinon.fakeServer.create();
		});

		afterEach(function() {
            this.server.restore();
		});
		
		it("calls Backbone.Model.prototype.fetch with model success_callback and error_callback and fetch as event type", function(){
			
			spyOn(Backbone.Model.prototype, "fetch");
			var model = new BaseModel({"id":"1"});
			
			spyOn(model, "fetch").andCallThrough();
			
			var type_passed_on_callback;
			spyOn(model, "success_callback").andCallFake(function(type){type_passed_on_callback = type;});
			
			model.fetch({myOption:"value"});
			
			var callbacks_passed = Backbone.Model.prototype.fetch.mostRecentCall.args[0];
			
			callbacks_passed.success();
			expect(type_passed_on_callback).toBe("fetch");			
			expect(callbacks_passed.is_model).toBe(true);
			expect(callbacks_passed.myOption).toBe("value");

		});
		
		it("parses correctly the request response for fetch", function(){
			
			var model = new BaseModel({id:1});
			
			this.server.respondWith("POST", "",
							[200, {"Content-Type": "application/json"},
                            '{"data":{"id":1,"name":"Jon", "surname":"Snow"}, "errors":[]}']);
							
							
			model.fetch();
			this.server.respond();
			
			expect(model.get("name")).toBe("Jon");
			expect(model.get("surname")).toBe("Snow");				
		});
		
		it("checks for get permision if auth namespace setted", function(){
			
			window.auth = new Auth();
			spyOn($, "ajax");
			var model = new BaseModel({id:1});
			model.set_auth_namespace("UsersDomain::");
			
			var auth_error_triggered = false;
			this.bus.on("authorization:error", function(){auth_error_triggered = true;});
			
			model.fetch();
			expect($.ajax).wasNotCalled();
			expect(auth_error_triggered).toBe(true);	
			
			auth.add_permission("UsersDomain::get");
			
			auth_error_triggered = false;
			model.fetch();
			expect($.ajax).toHaveBeenCalled();
			expect(auth_error_triggered).toBe(false);
		});
	});

    describe("DataTypes", function(){
    
        it("transforms input data with associated datatypes", function(){
            var model = new BaseModel({id:1});
            model.data_types.date = DateType;
			
			this.server.respondWith("POST", "",
							[200, {"Content-Type": "application/json"},
                            '{"data":{"id":1,"name":"Jon", "date":"1351193389"}, "errors":[]}']);
							
			model.fetch();
			this.server.respond();

			expect(model.get("name")).toBe("Jon");
			expect(model.get("date")).toBe("25/10/2012");

        });

        it("transforms output data with associated datatypes", function(){
            var model = new BaseModel({id:1});
            model.data_types.date = DateType;

            model.set("name", "Jon");
            model.set("date", "10/10/2012");

            spyOn(Backbone.Model.prototype, "save");
            spyOn(DateType, "output").andCallThrough();

            model.save();

            expect(DateType.output).toHaveBeenCalledWith("10/10/2012");
            var expected_date = model.get("date")+"";
            
            expect(expected_date.match(/\d{10}/)).toNotBe(null);

        });

        it("transforms output data on add event", function(){

			var model = new BaseModel({id:1, status:1});
			model.data_types.status = BooleanType;

			model.trigger("add");

			expect(model.get("status")).toBe(true);

        });

    });
});
