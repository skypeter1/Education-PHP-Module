describe("Loader", function(){
	
	beforeEach(function(){
		this.bus = EventBus;
		spyOn($.fn, "appendTo");
	});
	
	afterEach(function(){
		this.bus.off();
	});
	
	it("shows the loader element on request:started bus event", function(){
		
		var loader = new Loader();
		expect(loader.element.css("display")).toBe("none");
		this.bus.trigger("request:started");
		expect(loader.element.css("display")).toBe("block");
		
	});
	
	it("hides the loader element on request:finished bus event", function(){
		
		var loader = new Loader();
		loader.element.css("display", "block");
		this.bus.trigger("request:finished");
		expect(loader.element.css("display")).toBe("none");
		
	});
	
	it("only hides the loader on the real last concurrent request:finished", function(){
		
		var loader = new Loader();
		expect(loader.element.css("display")).toBe("none");
		
		this.bus.trigger("request:started");
		this.bus.trigger("request:started");
		expect(loader.element.css("display")).toBe("block");
		
		this.bus.trigger("request:finished");
		expect(loader.element.css("display")).toBe("block");
		
		this.bus.trigger("request:finished");
		expect(loader.element.css("display")).toBe("none");
	});
	
	it("is centered always", function(){
		
		spyOn($.fn, "width").andCallFake(function(){
			if(this[0] == window)
				return 200;
			return 50;	
		});
		
		var loader = new Loader();
		expect(loader.element.css("left")).toBe("75px");
		
	});
	
	it("is always on top", function(){
		
		spyOn($.fn, "scrollTop").andCallFake(function(){
			if(this[0] == window)
				return 200;
		});
		
		var loader = new Loader();
		expect(loader.element.css("top")).toBe("200px");
		
	});
	
	it("reposition the element on scroll or window resize", function(){
		
		var loader = new Loader();
		spyOn(loader, "set_position");
		$(window).trigger("scroll");
		$(window).trigger("resize");	
		
		expect(loader.set_position.callCount).toBe(2);
	});
	
});
