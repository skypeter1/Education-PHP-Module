describe("BaseForm", function() {

	beforeEach(function() {
		
		this.form = new BaseForm({namespace:"test_id"});
		this.form.ignore = [];
		var template = "<form><label>Text</label><input name='text' value='text_value' /></form>";
		this.form.set_template(template);
		this.bus = EventBus;
		
		this.fixture_id = "main_container";
		setFixtures("<div id='"+this.fixture_id+"'></div>");
		this.fixture_container = $("#"+this.fixture_id);
	
        spyOn($, "ajax");
		
	});

	afterEach(function(){
        this.bus.off();	
	});
	
	it("adds to template_values the attributes of model passed on set_model", function(){
		var model = new Backbone.Model({"test_key":"test_value"});
		this.form.set_values(model.toJSON());
		expect(this.form.template_values).toEqual(model.toJSON());
	});
	
	it("sets no_url flag to true on no_url_mode()", function(){
		
		var form = new BaseForm();
		expect(form.no_url).toBe(false);
		
		form.no_url_mode();
		expect(form.no_url).toBe(true);
	});
	
	it("prevents cancel event and triggers cancel event on no_url_mode", function(){
		
		var form = new BaseForm();
		form.no_url_mode();
		var fake_event = {preventDefault:function(){}};
		spyOn(fake_event, "preventDefault");
		
		var cancel_event_triggered = false;
		form.on("cancel", function(){cancel_event_triggered = true;});
		
		form.cancel_event(fake_event);
		
		expect(fake_event.preventDefault).toHaveBeenCalled();
		expect(cancel_event_triggered).toBe(true);
	});
	
	describe("Rendering", function() {
		
		it("returns the view object", function() {
			expect(this.form.render()).toEqual(this.form);
		});
		
		it("has his own ErrorView object", function() {
			expect(this.form.error_view instanceof ErrorView).toBe(true);
		});
		
		it("renders errors on top of the form", function() {
			
			$(this.form.el).appendTo(this.fixture_container);
			spyOn(this.form.error_view, "render").andCallThrough();
			this.form.render_errors(["first error", "second error"]);
			
			var template_error_values = this.form.error_view.template_values.errors;
			
			expect(template_error_values).toEqual(["first error", "second error"]);
			expect(this.form.error_view.render).toHaveBeenCalled();
			expect($(this.form.error_view.el).parent()).toBe(this.fixture_container);
			
		});
		
		it("has a method to clear errors", function(){
			this.form.render_errors(["first error", "second error"]);
			
			spyOn(this.form.error_view, "detach");
			
			this.form.clear_errors();
			var template_error_values = this.form.error_view.template_values.errors;
			
			expect(template_error_values).toEqual([]);
			expect(this.form.error_view.detach).toHaveBeenCalled();
		});
		
		it("detaches form element and error_view element on detach", function(){

			$(this.form.el).appendTo(this.fixture_container);
			this.form.render_errors(["first error", "second error"]);
			
			this.form.detach();
			
			var form_element_has_been_detached = ($(this.form.el).parent().length === 0);
			expect(form_element_has_been_detached).toBe(true);
			
			var errors_element_has_been_detached = ($(this.form.error_view.el).parent().length === 0);
			expect(errors_element_has_been_detached).toBe(true);
			
		});
		
		it("set up validation plugin on render_template", function(){
			spyOn($.fn, "validator");
			this.form.render_template();
			expect($.fn.validator).toHaveBeenCalled();
		});
		
		it("set up calendars on render_template", function(){
			
			var template = "<form><label>date</label><input id='test_input' name='date' type='date' /></form>";
			this.form.set_template(template);
			
			var input_enhanced;
			spyOn($.fn, "dateinput").andCallFake(function(){
				input_enhanced = this;
			});
			
			this.form.render_template();

			expect(input_enhanced.attr("id")).toBe("test_input");
		});
		
	});
	
	describe("Events", function(){
		
		var submit_form = function(form)
		{
			$(form.el).children().trigger("submit");
		};
		
		it("trigger bus event form_id:form:submit and submit event on form submit", function() {
			
			var value_from_event = {};
			this.bus.on("test_id:form:submit", function(value){
				value_from_event = value;
			});
			
			var value_from_local_event = {};
			this.form.on("submit", function(value){
				value_from_local_event = value;
			});
			
			var input_value = "text_value";
			
			var template = "<form><label>Text</label><input name='text' value='"+input_value+"' /></form>";
			this.form.set_template(template);
			this.form.render_template();
			
			//fake validation
			$(this.form.el).find("form").data("validator", {checkValidity:function(){return true;}});
			
			submit_form(this.form);
			
			expect(value_from_event.text).toBe(input_value);
			expect(value_from_local_event.text).toBe(input_value);			
			
		});
		
		it("has click a.cancel event on cancel_event", function(){
			
			var form = new BaseForm();
			expect(form.events["click a.cancel"]).toBe("cancel_event");
			
		});
		
		it("triggers cancel on cancel event if modal_mode true", function(){
			
			var form = new BaseForm();
			var event_triggered = false;
			form.on("cancel", function(){event_triggered = true;});
			
			form.cancel_event();
			expect(event_triggered).toBe(false);
			
			var fake_event = {};
			fake_event.preventDefault = function(){};
			spyOn(fake_event, "preventDefault");
			
			form.as_modal();
			form.cancel_event(fake_event);
			expect(event_triggered).toBe(true);
			expect(fake_event.preventDefault).toHaveBeenCalled();	
		});

		it("has click .save_and_new event", function() {

			var form = new BaseForm();
			expect(form.events["click .save_and_new"]).toBe("save_and_new_event");

			var mock_event = {preventDefault:function(){}};
			spyOn(mock_event, "preventDefault");
			spyOn(form, "save_and_new");

			form.save_and_new_event(mock_event);
			expect(mock_event.preventDefault).toHaveBeenCalled();
			expect(form.save_and_new).toHaveBeenCalled();

		});

		it("triggers submit on save_and_new with a true second parameter", function(){

			var form = new BaseForm();

			var template = "<form><label>Text</label><input name='text' value='' /></form>";
			form.set_template(template);
			form.render_template();
			$(form.el).find("form").data("validator", {checkValidity:function(){return true;}});

			var actual_values;
			var actual_save_and_new_flag;
			form.on("submit", function(actual_values, save_and_new){
				actual_save_and_new_flag = save_and_new;
			});

			form.save_and_new();

			expect(actual_save_and_new_flag).toBe(true);

		});
	
	});

	describe("Value parsing", function(){
		
		it("groups in an object fields with a name like objectName[key]", function(){
			
			var input_value = "text_value";
			var input_value2 = "text_value2";
			var input_value3 = "text_value3";	
			
			var template = "<form><label>Text</label><input name='object1[key1]' value='"+input_value+"' /><input name='object1[key2]' value='"+input_value2+"' /><input name='object2[key1]' value='"+input_value3+"' /></form>";
			this.form.set_template(template);
			this.form.render_template();
			
			var values = this.form.get_values();
			
			expect(values["object1[key1]"]).toBe(undefined);
			
            expect(values.object1.key1).toBe("text_value");
			expect(values.object1.key2).toBe("text_value2");
			
			expect(values.object2.key1).toBe("text_value3");
		});
		
		it('ignores fields with class=ignore on form serialization', function(){
			
			var template = "<form><label>Text</label><input name='search' value='' class='ignore' /><input name='something' value='value' /></form>";
			this.form.set_template(template);
			this.form.render_template();
			
			var values = this.form.get_values();
			
			expect(values.search).toBe(undefined);
			expect(values.something).toBe("value");
		});
		
		it('returns an empty string if a date input has no date slected', function(){
			var template = "<form><label>Text</label><input name='date' type='date' value='' /></form>";
			this.form.set_template(template);
			this.form.render_template();
			
			var values = this.form.get_values();
			expect(values.date).toBe("");
		});
		

		it("returns also non checked checkboxes with value = 0", function(){

			var template = "<form><input name='text' type='text' value='value' /><input type='checkbox' name='checkbox' value='1' /></form>";
			this.form.set_template(template);
			this.form.render_template();

			var values = this.form.get_values();
			expect(values.text).toBe("value");
			expect(values.checkbox).toBe(0);

		});

		it("returns an object if field has json class and value is a json", function() {
			
			var template = "<form><input type='hidden' class='json' value='{\"id\":1}' name='object'></form>";
			var form = new BaseForm();
			form.set_template(template);
			form.render_template();

			var values = form.get_values();

			expect(values.object).toEqual({id:1});

		});

	});
});
