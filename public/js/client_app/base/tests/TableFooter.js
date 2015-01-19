describe("TableFooter", function(){
	
	it("has public/templates/table_footer.html as a default template", function(){
		
		var view = new TableFooter();
		expect(view.template).toBe("public/templates/table_footer.html");
	});
	
	it("has click events for the limit buttons, that triger limit function", function(){
		
		var view = new TableFooter();
		expect(view.events["click a.limit"]).toBe("limit");
		
	});
	
	it("function limit trigers a local event table:limit with the evenet element data", function(){
		
		var view = new TableFooter();
		
		var received_data = 0;
		view.on("table:limit", function(data){
			received_data = data;
		});
		
		spyOn(view, "set_status");
		
		var mock_event = {currentTarget:$("<a data='50'></a>")};
		mock_event.preventDefault = function(){};
		
		spyOn(mock_event, "preventDefault");
		
		view.limit(mock_event);
		
		expect(received_data).toBe('50');
		expect(view.set_status).toHaveBeenCalledWith('50');
		expect(mock_event.preventDefault).toHaveBeenCalled();
	});
	
	it("sets the active class to the option matching the status and unsets the others", function(){
		
		var view = new TableFooter();
		view.set_status("50");
		view.set_template('<li><a href="#" data="50" class="limit">50</a></li><li><a href="#" data="100" class="limit">100</a></li>');
		
		view.render_template();
		expect($(view.el).find("[data='50']").parent().hasClass("active")).toBe(true);
		
		view.set_status("100");
		expect($(view.el).find("[data='50']").parent().hasClass("active")).toBe(false);
		expect($(view.el).find("[data='100']").parent().hasClass("active")).toBe(true);
	});
	
	it("actives pagination levels based on number_of_entries value", function(){
		
		var view = new TableFooter();
		view.set_number_of_entries(55);
		view.set_template('<li><a href="#" data="50" class="limit">50</a></li><li class="hidden"><a href="#" data="100" class="limit">100</a></li><li class="hidden"><a href="#" data="200" class="limit">200</a></li>');
		
		view.render_template();
		
		expect($(view.el).find("[data='100']").parent().hasClass("hidden")).toBe(false);
		expect($(view.el).find("[data='200']").parent().hasClass("hidden")).toBe(true);
	});
	
	it("shows Mostrar label if number_of_entries is greater than minimum option", function(){
		
		var view = new TableFooter();
		view.set_number_of_entries(50);
		view.set_template('<li><a href="#" data="50" class="limit">50</a></li><li class="hidden"><a href="#" data="100" class="limit">100</a></li><li class="hidden"><a href="#" data="200" class="limit">200</a></li>');
		
		expect(view.template_values.show_label).toBe("");
		
		view.set_number_of_entries(55);
		expect(view.template_values.show_label).toBe("Mostrar:");	
	});	
});
