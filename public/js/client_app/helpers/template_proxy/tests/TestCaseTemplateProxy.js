describe("TestCase TemplateProxy", function(){
	
	beforeEach(function(){
		this.server = sinon.fakeServer.create();
		this.bus = EventBus;
		
		document.help_vars = {};
		document.help_vars.base_url = "http://www.server.com";
		
	});
	
    afterEach(function() {
        this.server.restore();
        this.bus.off();
    });
	
	it("implements backbone events", function(){

		var proxy = new TemplateProxy();

		var event_launched = false;
		proxy.on("test_event", function(){
			event_launched = true;
		});
		proxy.trigger("test_event");

		expect(event_launched).toBe(true);
	});
	
	it("requests for a template given a path and triggers template:PATH_NAME:complete", function(){
		
		var proxy = new TemplateProxy();
		
		this.server.respondWith("GET", "",
						[200, {"Content-Type": "text/html"},'default']);
		
		var expected_template = "";
		this.bus.on("template:/views/default:complete", function(response){
			expected_template = response;
		});
		
		var local_event_expected_template = "";
		proxy.on("template:/views/default:complete", function(response){
			local_event_expected_template = response;
		});
		
		proxy.get("/views/default");
		this.server.respond();
		
		expect(expected_template).toBe("default");
		expect(local_event_expected_template).toBe("default");		
		
		spyOn($, "ajax");
		
		expected_template = "";
		proxy.get("/views/default");		
		expect(expected_template).toBe("default");
		expect($.ajax.callCount).toBe(0);
	});
	
	it("can be setted preloaded templates", function() {
	
		var proxy = new TemplateProxy();
		var default_template = "<h1>default</h1>";
		
		proxy.set_template("default_proxy", default_template);
		
		var expected_template;
		this.bus.on("template:default_proxy:complete", function(response){
			expected_template = response;
		});
		
		proxy.get("default_proxy");
		
		expect(expected_template).toBe(default_template);
	});
});
