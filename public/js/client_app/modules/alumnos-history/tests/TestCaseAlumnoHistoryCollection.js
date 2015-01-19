describe("AlumnosHistoryCollection", function() {
	
	it("has alumnos as his namespace", function() {
		
		var collection = new AlumnosHistoryCollection();
		expect(collection.namespace).toEqual("alumnos");

	});

	it("passes to Backbone.collection.fetch get_alumnos_history as alternate url", function(){

		var collection = new AlumnosHistoryCollection();

		spyOn(Backbone.Collection.prototype, "fetch");
		collection.fetch();

		var arguments_passed = Backbone.Collection.prototype.fetch.mostRecentCall.args;

		expect(arguments_passed[0].alternate_url).toBe("get_alumnos_history");

	});

});