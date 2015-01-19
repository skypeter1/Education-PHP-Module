describe("TableControls", function(){
	
	it("has public/templates/table_controls.html as a default template", function(){
		
		var view = new TableControls();
		expect(view.template).toBe("public/templates/table_controls.html");
		
	});
	
	it("has click button.refresh event to trigger refresh function", function(){
		
		var view = new TableControls();
		expect(view.events["click button.refresh"]).toBe("refresh");
		
	});
	
	it("has click a.new event to trigger new_event function", function(){
		
		var view = new TableControls();
		expect(view.events["click a.new"]).toBe("new_event");
		
	});
	
	it("triggers ui:new event on new_event and prevents default event if modal_mode true", function(){
		var view = new TableControls();
		
		var event_triggered = false;
		view.on("ui:new", function(){event_triggered = true;});
		
		view.new_event();
		expect(event_triggered).toBe(false);
		
		view.as_modal();
		
		var fake_event = {};
		fake_event.preventDefault = function(){};
		spyOn(fake_event, "preventDefault");
		
		view.new_event(fake_event);
		expect(event_triggered).toBe(true);
		expect(fake_event.preventDefault).toHaveBeenCalled();
	});
	
	it("triggers a local ui:refresh event on refresh", function(){
		
		var view = new TableControls();
		
		var event_triggered = false;
		view.on("ui:refresh", function(){
			event_triggered = true;
		});
		
		var fake_event = {preventDefault: function(){}};
		
		view.refresh(fake_event);
		
		expect(event_triggered).toBe(true);
		
	});
	
	it("has can_create template_value defaulted to true", function(){
		var view = new TableControls({template_values:{"url":"url"}});
		
		expect(view.template_values.can_create).toBe(true);
	});
	
	
	it("sets no_url flag to true on no_url_mode", function(){
		
		var view = new TableControls({template_values:{"url":"url"}});
		expect(view.no_url).toBe(false);
		
		view.no_url_mode();
		expect(view.no_url).toBe(true);		
	});
	
	it("prevents new entry url and triggers ui:new on no_url_mode", function(){
		
		var view = new TableControls({template_values:{"url":"url"}});
		view.no_url_mode();
		var fake_event = {preventDefault:function(){}};
		spyOn(fake_event, "preventDefault");
		
		var event_triggered = false;
		view.on("ui:new", function(){event_triggered = true;});
		
		view.new_event(fake_event);
		
		expect(fake_event.preventDefault).toHaveBeenCalled();
		expect(event_triggered).toBe(true);
		
	});
	
});
