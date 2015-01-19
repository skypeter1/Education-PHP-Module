describe("BaseView", function() {

	beforeEach(function() {
		this.bus = EventBus;
		var values = {'name':'John'};
		this.view = new BaseView({'values':values});
	});
	
	afterEach(function(){
		this.bus.off();
	});
	
	it('has default as a template', function(){
		var view = new BaseView();
		expect(view.template).toBe("default");
	});
	
	it('accepts template as an option', function(){
		var view = new BaseView({template:"another_template"});
		expect(view.template).toBe("another_template");
	});

	describe("Rendering", function() {

		it("returns the view object", function() {
			expect(this.view.render()).toEqual(this.view);
		});

		it("produces blank with no template", function() {
			this.view.render_template();
			expect(this.view.el.innerHTML).toEqual('');
		});
		
		it("resubscribe to got:template on resubscribe_template_event", function(){

			var form = new BaseForm();

			var event_triggered = false;
			form.on("can:render", function(){
				event_triggered = true;
			});

			form.resubscribe_template_event();

			form.trigger("got:template");

			expect(event_triggered).toBe(true);

		});
		
		it("ask for his template to TemplateProxy and triggers a local view event when completed", function() {
			var got_template_event_triggered;

			spyOn(this.view.template_proxy, "get").andCallFake($.proxy(function(){
				this.view.template_proxy.trigger("template:default:complete", "expected_template");
			}, this));
			
			spyOn(this.view, "set_template");

			this.view.on("got:template", function(){
				got_template_event_triggered = true;
			});
			
			this.view.request_template();
			
			expect(this.view.template_proxy.get).toHaveBeenCalledWith("default");
			expect(this.view.set_template).toHaveBeenCalledWith("expected_template");
			expect(got_template_event_triggered).toBe(true);
			
		});
		
		it("set_template_file() subscribes to template proxy event and sets this.template", function(){
			this.view.set_template_file("test.html");
			
			expect(this.view.template).toBe("test.html");
			
			spyOn(this.view, "set_template");
			this.view.template_proxy.trigger("template:test.html:complete");
			expect(this.view.set_template).toHaveBeenCalled();
		});
		
		it("renders the template on view got:template event", function() {
			
			spyOn(this.view, "request_template");
			this.view.render();
			expect(this.view.request_template).toHaveBeenCalled();
			
			this.view.set_template("<h1>{{name}}</h1>");
			this.view.trigger("got:template");
			
			expect($(this.view.el)).toHaveHtml("<h1>John</h1>");
			
		});
		
		it("ataches the base element on pased container", function(){
			
			this.fixture_id = "main_container";
			setFixtures("<div id='"+this.fixture_id+"'></div>");
			var fixture_container = $("#"+this.fixture_id);
			
			this.view.atach(fixture_container);
			
			expect(fixture_container.children()).toBe(this.view.el);
		});
		
		it("detaches base element on detach and removes inner html", function(){
			
			this.fixture_id = "main_container";
			setFixtures("<div id='"+this.fixture_id+"'></div>");
			this.view.render();
			$(this.view.el).appendTo("#"+this.fixture_id);
			spyOn($.fn, 'remove');
			this.view.detach();
			
			expect($.fn.remove).toHaveBeenCalled();
		});

		it("merges template_helpers with template values on render_template", function() {
			
			var form = new BaseForm();
			form.set_template("<form></form>");

			form.template_helpers.test = "test";
			form.template_values.key = "value";

			form.render_template();

			expect(form.template_values).toEqual({key:"value", test:"test"});

		});
		
	});
});
