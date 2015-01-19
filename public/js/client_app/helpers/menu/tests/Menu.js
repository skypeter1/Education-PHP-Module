describe("Menu", function(){
	
	
	beforeEach(function(){
		
		setFixtures("<div id='fixture_container'></div>");
		
		this.view1 = new BaseView();
		this.view2 = new BaseView();
		
		this.bus = EventBus;
	});
	
	it("renders all added views on render and attaches them on menu container", function(){	
		var menu = new Menu("fixture_container");
		
		spyOn(this.view1, "render");
		spyOn(this.view2, "render");
		
		spyOn(this.view1, "atach");
		spyOn(this.view2, "atach");
		
		menu.add_view(this.view1);
		menu.add_view(this.view2);	
		
		menu.render();
		
		expect(this.view1.render).toHaveBeenCalled();
		expect(this.view2.render).toHaveBeenCalled();
		
		expect(this.view1.atach).toHaveBeenCalledWith($("#fixture_container"));
		expect(this.view2.atach).toHaveBeenCalledWith($("#fixture_container"));
	});
	
	it("actives and deactives views on passed bus event", function(){
		
		var menu = new Menu("fixture_container");
		
		this.view1.set_template("<a><i></i></a>");
		this.view2.set_template("<a><i class='icon-black'></i></a>");
		
		menu.add_view(this.view1, "view_event_1");
		menu.add_view(this.view2, "view_event_2");		
				
		this.bus.trigger("view_event_1");
	
		spyOn(this.view1, "render").andCallFake(function(){
			this.render_template();
		});
		
		spyOn(this.view2, "render").andCallFake(function(){
			this.render_template();
		});
	
		menu.render();
		
		expect($(this.view1.el).hasClass("active")).toBe(true);
		
		this.bus.trigger("view_event_2");
		
		expect($(this.view2.el).hasClass("active")).toBe(true);
		
		expect($(this.view1.el).hasClass("active")).toBe(false);		
		
	});
});
