describe("BaseRouter", function() {

	beforeEach(function(){
		this.router = new BaseRouter();
        this.bus = EventBus;
		
		try {
			Backbone.history.start({silent:true});
            Backbone.history.stop();
		} catch(e) {}
	});
	
	afterEach(function(){
		this.bus.off();
	});
	
	var load_route = function(route)
	{
		Backbone.history.loadUrl(route);
	};
	
	it("adds a route and prepares it to trigger corresponding bus event", function(){
		
		var route = "some/test/route";
		var event_name = "event_name";
		this.router.create_namespaced_route(route, event_name, "namespace");
		
		var routing_event_triggered = false;
		this.bus.on(event_name, function(){
			routing_event_triggered = true;	
		});
		
		var namespace_event_triggered = false;
		this.bus.on("namespace:section", function(){
			namespace_event_triggered = true;	
		});
		
		load_route(route);
		
		expect(routing_event_triggered).toBe(true);
		expect(namespace_event_triggered).toBe(true);
	});
	
	it("pass route params as event arguments", function(){
		var route = "some/:id/p:test";
		var event_name = "event_name";
		this.router.create_namespaced_route(route, event_name, "namespace");
		
		var first_param = "";
		var second_param = "";
		this.bus.on(event_name, function(id_param, test_param){
			first_param = id_param;
			second_param = test_param;
		});
		
		load_route("some/15/p245");
		
		expect(first_param).toBe("15");
		expect(second_param).toBe("245");
	});
	
	it("creates crud routes given a namespace", function(){
		
		spyOn(this.router, "create_namespaced_route");
		
		var crud_namespace = "test_namespace";
		this.router.create_crud_for(crud_namespace);
		
		expect(this.router.create_namespaced_route.argsForCall[0]).toEqual(["test_namespace", "test_namespace:route:index", "test_namespace"]);
		expect(this.router.create_namespaced_route.argsForCall[1]).toEqual(["test_namespace/new", "test_namespace:route:new", "test_namespace"]);
		expect(this.router.create_namespaced_route.argsForCall[2]).toEqual(["test_namespace/edit/:id", "test_namespace:route:edit", "test_namespace"]);
		expect(this.router.create_namespaced_route.argsForCall[3]).toEqual(["test_namespace/show/:id", "test_namespace:route:show", "test_namespace"]);
	});
	
});
