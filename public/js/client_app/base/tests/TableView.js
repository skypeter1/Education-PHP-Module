describe("TableView", function(){
	
	it("extends from BaseListView", function(){
		var view = new TableView({collection : new BaseCollection()});
		expect(view instanceof BaseListView).toBe(true);
	});
	
	it("accepts controls_values for TableControls values", function(){
		
		var view = new TableView({control_values:{"key":"value"}, collection : new BaseCollection()});
		expect(view.controls.template_values.key).toBe("value");
		
	});
	
	it("has row_dbl_click_event function for tbody tr", function(){
		var view = new TableView({collection : new BaseCollection()});
		expect(view.events["dblclick tbody tr"]).toBe("row_dbl_click_event");
	});
	
	it("has delete_event function for a.delete selector", function(){
		var view = new TableView({collection : new BaseCollection()});
		expect(view.events["click a.delete"]).toBe("delete_event");
	});
	
	it("has order_event function for a.order selector", function(){
		var view = new TableView({collection : new BaseCollection()});
		expect(view.events["click a.order"]).toBe("order_event");
	});
	
	it("has block_event function for a.block selector", function(){
		var view = new TableView({collection : new BaseCollection()});
		expect(view.events["click a.block0"]).toBe("block_event");
	});
	
	it("has unblock_event function for a.block selector", function(){
		var view = new TableView({collection : new BaseCollection()});
		expect(view.events["click a.block1"]).toBe("unblock_event");
	});
	
	it("has edit function for a.edit selector", function(){
		var view = new TableView({collection : new BaseCollection()});
		expect(view.events["click a.edit"]).toBe("edit_event");
	});
	
	it("has row_selected function for tr.selectable", function(){
		var view = new TableView({collection : new BaseCollection()});
		expect(view.events["click a.select"]).toBe("row_selected");
	});
	
	it("searches for a.edit selector on the row and if exists triggers click event on it when row_dbl_click_event", function(){
		
		var view = new TableView({collection : new BaseCollection()});
		
		var fake_event = {stopPropagation: function(){}};
		spyOn(fake_event, "stopPropagation");
		
		view.row_dbl_click_event(fake_event);
		expect(fake_event.stopPropagation).toHaveBeenCalled();	
	});
	
	it("triggers ui:row:selection with corresponding model", function(){
		
		var view = new TableView({collection : new BaseCollection()});
		var model = new BaseModel({id:6});
		view.collection.add(model);
		
		var expected_model;
		view.on("ui:row:selection", function(model){expected_model = model;});
		
		view.as_modal();
		var fakeEvent = {};
		fakeEvent.preventDefault = function(){};
		fakeEvent.currentTarget = $("<div data='6'></div>");
		spyOn(fakeEvent, "preventDefault");
		
		view.row_selected(fakeEvent);
		expect(fakeEvent.preventDefault).toHaveBeenCalled();
		expect(expected_model).toBe(model);
		
	});
	
	it("triggers ui:edit with id being edited on edit_event function if table showing as modal", function(){
		
		var view = new TableView({collection : new BaseCollection()});
		var id_being_edited = false;
		view.on("ui:edit", function(id){id_being_edited = id;});
		
		view.edit_event();
		expect(id_being_edited).toBe(false);
		
		view.as_modal();
		var fakeEvent = {};
		fakeEvent.preventDefault = function(){};
		fakeEvent.currentTarget = $("<div data='5'></div>");
		spyOn(fakeEvent, "preventDefault");
		
		view.edit_event(fakeEvent);
		expect(fakeEvent.preventDefault).toHaveBeenCalled();
		expect(id_being_edited).toBe("5");		
		
	});
	
	it("triggers ui:refresh on controls triggers it", function(){
			
		var view = new TableView({collection : new BaseCollection()});
		var refresh_event_triggered = false;
		view.on("ui:refresh", function(){refresh_event_triggered = true;});
		
		view.controls.trigger("ui:refresh");
		
		expect(refresh_event_triggered).toBe(true);
	});
	
	it("triggers ui:new on controls triggers it", function(){
			
		var view = new TableView({collection : new BaseCollection()});
		var event_triggered = false;
		view.on("ui:new", function(){event_triggered = true;});
		
		view.controls.trigger("ui:new");
		
		expect(event_triggered).toBe(true);
	});
	
	it("triggers local ui:unblock event on unblock_event with id of target element event data attr as param", function(){
		
		var view = new TableView({values:{id:'5'},collection : new BaseCollection()});
		var fake_event = {};
		fake_event.preventDefault = function(){};
		fake_event.currentTarget = $("<div data='5'></div>");
		
		var id_to_unblock = false;
		view.on("ui:unblock", function(id){
			id_to_unblock = id;
		});
		
		spyOn(fake_event, "preventDefault");
		
		view.unblock_event(fake_event);
		
		expect(fake_event.preventDefault).toHaveBeenCalled();
		expect(id_to_unblock).toBe("5");
	});
	
	it("triggers local ui:block event on block_event with id of target element event data attr as param", function(){
		
		var id_to_block = false;

		var view = new TableView({values:{id:'5'},collection : new BaseCollection()});
		var fake_event = {};
		fake_event.preventDefault = function(){};
		fake_event.currentTarget = $("<div data='5'></div>");
		
		
		view.on("ui:block", function(id){
			id_to_block = id;
		});
		
		spyOn(fake_event, "preventDefault");
		
		view.block_event(fake_event);
		
		expect(fake_event.preventDefault).toHaveBeenCalled();
		expect(id_to_block).toBe("5");
	});
	
	it("triggers local ui:delete event on delete_event with id of target element event data attr as param", function(){
		
		var view = new TableView({values:{id:'5'},collection : new BaseCollection()});
		var fake_event = {};
		fake_event.preventDefault = function(){};
		fake_event.currentTarget = $("<div data='5'></div>");
		
		var id_to_delete = false;
		view.on("ui:delete", function(id){
			id_to_delete = id;
		});
		
		spyOn(fake_event, "preventDefault");
		
		view.delete_event(fake_event);
		
		expect(fake_event.preventDefault).toHaveBeenCalled();
		expect(id_to_delete).toBe("5");	
	});
	
	it("triggers ui:order on order:event with property and order type, switching order types between calls", function(){
		
		var view = new TableView({values:{id:'5'},collection : new BaseCollection()});
		var fake_event = {};
		fake_event.preventDefault = function(){};
		fake_event.currentTarget = $("<div data='name'></div>");
		spyOn(view.collection, "fetch");
		
		var property_to_order;
		var order_type = "";
		view.on("ui:order", function(property, type){
			property_to_order = property;
			order_type = type;
		});
		
		spyOn(fake_event, "preventDefault");
		
		view.order_event(fake_event);
		
		expect(fake_event.preventDefault).toHaveBeenCalled();
		expect(property_to_order).toBe("name");
		expect(order_type).toBe("asc");
		
		fake_event.currentTarget = $("<div data='name' order-type='asc'></div>");
		view.order_event(fake_event);
		expect(order_type).toBe("desc");
		
		fake_event.currentTarget = $("<div data='name' order-type='desc'></div>");
		view.order_event(fake_event);
		expect(order_type).toBe("asc");
	});
	
	it("sets to the collection the new order and forces a fetch on ui:order", function(){
		var view = new TableView({collection : new BaseCollection()});
		spyOn(view.collection, "set_order");
		spyOn(view.collection, "fetch");
		
		view.trigger("ui:order", "name", "desc");
		
		expect(view.collection.set_order).toHaveBeenCalledWith("name", "desc");
		expect(view.collection.fetch).toHaveBeenCalled();
	});
	
	it("sets class and data order type on set_order_status", function(){
		
		var view = new TableView({collection : new BaseCollection()});
		view.set_template("<div class='order' data='name'></div><div class='order' data='surname'></div>");
		view.set_order_status("name", "desc");
		view.render_template();
		
		var element = $(view.el).find("[data='name']");
		var element_data = element.attr("order-type");
		
		expect(element_data).toBe("desc");
		expect(element.hasClass("order-desc")).toBe(true);
		
		
		view.collection.status.order = {field:"surname", direction:"asc"};
		view.render_template();
		
		var element_surname = $(view.el).find("[data='surname']");
		var element_surname_data = element_surname.attr("order-type");
		
		expect(element_surname_data).toBe("asc");
		expect(element_surname.hasClass("order-desc")).toBe(false);
		expect(element_surname.hasClass("order-asc")).toBe(true);
		
		expect(element_data).toBe("desc");
		expect(element.hasClass("order-desc")).toBe(false);
	});
	
	it("calls subViews render on render", function(){
		
		var view = new TableView({collection : new BaseCollection()});
		spyOn(view.controls, "render");
		spyOn(view.footer, "render");
		spyOn(view.search_form, "render");
		spyOn(BaseListView.prototype, "render");
		view.render();
		
		expect(view.controls.render).toHaveBeenCalled();
		expect(view.footer.render).toHaveBeenCalled();
		expect(view.search_form.render).toHaveBeenCalled();		
		expect(BaseListView.prototype.render).toHaveBeenCalled();
		
	});
	
	it("injects el_container and all subviews on atach", function(){
		
		var fixture_id = "fixture_id";
		setFixtures("<div id='"+fixture_id+"'></div>");
		var fixture_container = $("#"+fixture_id);
		
		var view = new TableView({collection : new BaseCollection()});
		view.atach(fixture_container);
		
		var container_has_been_injected_on_the_dom = $(view.el_container).parent().length > 0;
		expect(container_has_been_injected_on_the_dom).toBe(true);
		
		var controls_has_been_injected_on_the_dom = $(view.controls.el).parent().length > 0;
		expect(controls_has_been_injected_on_the_dom).toBe(true);
		
		var footer_has_been_injected_on_the_dom = $(view.footer.el).parent().length > 0;
		expect(footer_has_been_injected_on_the_dom).toBe(true);
		
		var search_form_has_been_injected_on_the_dom = $(view.search_form.el).parent().length > 0;
		expect(search_form_has_been_injected_on_the_dom).toBe(true);
	});
	
	it("detaches el_container on detach", function(){
		
		var fixture_id = "fixture_id";
		setFixtures("<div id='"+fixture_id+"'></div>");
		var fixture_container = $("#"+fixture_id);
		
		var view = new TableView({collection : new BaseCollection()});
		view.atach(fixture_container);
		view.detach();
		
		expect(view.el_container.parent().length).toBe(0);
		
	});
	
	
	it("sets to the collection the limit pagination on footer table:limit event and calls collection fetch", function(){
		var view = new TableView({collection : new BaseCollection()});
		view.collection.set_limit = function(){};
		spyOn(view.collection, "set_limit");
		spyOn(view.collection, "fetch");
		
		view.footer.trigger("table:limit", 25);
		
		expect(view.collection.set_limit).toHaveBeenCalledWith(25);
		expect(view.collection.fetch).toHaveBeenCalled();
	});
	
	it("adds to the collection the global search filter on searchform submit event and calls collection fetch", function(){
		var view = new TableView({collection : new BaseCollection()});
		view.collection.add_filter = function(){};
		spyOn(view.collection, "add_filter");
		spyOn(view.collection, "fetch");
		
		view.search_form.trigger("submit", "search_term");
		
		expect(view.collection.add_filter).toHaveBeenCalledWith("GLOBAL", "search_term", "LIKE");
		expect(view.collection.fetch).toHaveBeenCalled();
	});
	
	it("sets a limit to the collection, and sets the same limit to the footer status", function(){
		var view = new TableView({collection : new BaseCollection()});
		
		expect(view.collection.status.paginator.page_size).toBe(50);
		expect(view.footer.status).toBe(50);
	});
	
	it("sets number of entries value on table Footer on collection fetch:success event", function(){
		
		var view = new TableView({collection : new BaseCollection()});
		spyOn(view.footer, "set_number_of_entries");
		
		view.collection.trigger("fetch:success", {data:{list:[], number_of_entries:5}});
		
		expect(view.footer.set_number_of_entries).toHaveBeenCalledWith(5);	
	});
	
	it("sets as modal the controls on view as modal", function(){
		
		var view = new TableView({collection : new BaseCollection()});
		spyOn(view.controls, "as_modal");
		
		view.as_modal();
		expect(view.controls.as_modal).toHaveBeenCalledWith(true);
	});
	
	it("sets no_url flag to true on no_url_mode", function(){
		
		var table = new TableView({collection : new BaseCollection()});
		expect(table.no_url).toBe(false);
		
		table.no_url_mode();
		expect(table.no_url).toBe(true);
		
	});
	
	it("prevents edit url and triggers ui:edit event with the id on no_url_mode", function(){
		
		var table = new TableView({collection : new BaseCollection()});
		var fake_event = {preventDefault:function(){}, current_target:""};
		table.no_url_mode();
		var id_expected;
		table.on("ui:edit", function(edit_id){
			id_expected = edit_id;
		});
		spyOn($.fn, "attr").andCallFake(function(){return "2";});
		spyOn(fake_event, "preventDefault");
		table.edit_event(fake_event);
		
		expect(fake_event.preventDefault).toHaveBeenCalled();
		expect(id_expected).toBe("2");
		
	});
});
