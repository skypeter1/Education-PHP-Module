describe("BaseListView", function() {

	beforeEach(function() {
		
		this.entry1 = new Backbone.Model({id:1});
		this.entry2 = new Backbone.Model({id:2});
		this.entry3 = new Backbone.Model({id:3});
		
		this.collection = new Backbone.Collection([this.entry1, this.entry2, this.entry3]);
	});

	it("extends from BaseView", function(){
		var view = new BaseListView();
		expect(view instanceof BaseView).toBe(true);
	});
	
	it("accepts a collection option and saves it on this.collection", function(){
		var view = new BaseListView({collection:this.collection});
		expect(view.collection).toBe(this.collection);
	});
	
	it("adds the collection object representation to to the template values passed on render template", function(){
		var view = new BaseListView({values:{"test":"test_value"}, collection:this.collection});
		view.set_template("template");
		spyOn(view, "renderer");
		
		view.render_template();
		
		var passed_values = view.renderer.mostRecentCall.args[0];
		
		expect(passed_values.test).toBe("test_value");
		expect(passed_values.collection[0].id).toBe(1);
		expect(passed_values.collection[1].id).toBe(2);
		expect(passed_values.collection[2].id).toBe(3);		
		
	});
		
});
