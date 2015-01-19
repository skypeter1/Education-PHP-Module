describe("NotasCollection", function() {
	
	it("has examenes as his namespace", function() {
		
		var collection  = new NotasCollection();
		expect(collection.namespace).toEqual("examenes"); 

	});

	it("passes to Backbone.collection.fetch get_notas as alternate url", function(){

		var collection = new NotasCollection();

		spyOn(Backbone.Collection.prototype, "fetch");
		collection.fetch();

		var arguments_passed = Backbone.Collection.prototype.fetch.mostRecentCall.args;

		expect(arguments_passed[0].alternate_url).toBe("get_notas");

	});


});