describe("ViewSwitcher", function(){
	
	beforeEach(function(){
		setFixtures('<div id="test_container"></div>');
		setFixtures('<div id="diferent_container"></div>');
		ViewSwitcher.views = {};
	});
	
	it("attaches a view on switch()", function(){
		var view = {};
		view.delegate_events = function(){};
		view.atach = function(container){};
		spyOn(view, 'atach');
		
		ViewSwitcher.load(view, 'test_container');
		
		expect(view.atach).toHaveBeenCalledWith($('#test_container'));
	});
	
	it("dettaches previous view on switch() a view in the same container", function(){
		var first_view = {};
		first_view.delegate_events = function(){};
		first_view.atach = function(){};
		first_view.detach = function(){};


		var second_view = {};
		second_view.delegate_events = function(){};
		second_view.atach = function(){};
		
		spyOn(first_view, 'detach');
		
		ViewSwitcher.load(first_view, 'test_container');
		ViewSwitcher.load(second_view, 'test_container');
		
		expect(first_view.detach.callCount).toBe(1);
	});
	
	it("ataches diferent views on diferent containers without detaching the first one", function(){
		var first_view = {};
		first_view.delegate_events = function(){};
		first_view.atach = function(){};
		first_view.detach = function(){};

		var second_view = {};
		second_view.delegate_events = function(){};
		second_view.atach = function(){};
		
		spyOn(first_view, 'detach');
		
		ViewSwitcher.load(first_view, 'test_container');
		ViewSwitcher.load(second_view, 'diferent_container');
		
		expect(first_view.detach.callCount).toBe(0);
	});
	
	it("does nothing if you re-switch the same view", function(){
		var view = {};
		view.delegate_events = function(){};
		view.atach = function(){};
		view.detach = function(){};

		spyOn(view, 'detach');
		spyOn(view, 'atach');
		
		ViewSwitcher.load(view, 'test_container');
		ViewSwitcher.load(view, 'test_container');
		
		expect(view.atach.callCount).toBe(1);
		expect(view.detach.callCount).toBe(0);
	});
	
	it("does everything if you re-swiching the same view, but in diferent container", function(){
		var view = {};
		view.delegate_events = function(){};
		view.atach = function(){};
		view.detach = function(){};
	
		var otherview = {};
		otherview.delegate_events = function(){};
		otherview.atach = function(){};
		otherview.detach = function(){};
		
		spyOn(view, 'atach');
		spyOn(view, 'detach');

		spyOn(otherview, 'atach');
		spyOn(otherview, 'detach');
		
		ViewSwitcher.load(otherview, 'main_container');
		ViewSwitcher.load(view, 'sub_container');
		ViewSwitcher.load(view, 'main_container');
		
		expect(view.atach.callCount).toBe(2);
		
		expect(otherview.atach.callCount).toBe(1);
		expect(otherview.detach.callCount).toBe(1);
	});
	
	it("atach and detach the view, if you reneder another in the middle, even if its in diferent container", function(){
		var view = {};
		view.delegate_events = function(){};
		view.atach = function(){};
		view.detach = function(){};
		
		var another_view = {};
		another_view.delegate_events = function(){};
		another_view.atach = function(){};
		another_view.detach = function(){};

		
		spyOn(view, 'detach');
		spyOn(view, 'atach');
		
		ViewSwitcher.load(view, 'test_container');
		ViewSwitcher.load(another_view, 'anothe_container');
		ViewSwitcher.load(view, 'test_container');
		
		expect(view.atach.callCount).toBe(2);
		expect(view.detach.callCount).toBe(1);
	});
	
});
