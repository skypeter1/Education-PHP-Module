describe("CursosCollection", function() {

	it("has cursos as his namespace", function() {

		var collection = new CursosCollection();
		expect(collection.namespace).toBe("cursos");

	});

	it("passes to Backbone.collection.fetch get_report as alternate url", function(){

		var collection = new CursosCollection();

		spyOn(Backbone.Collection.prototype, "fetch");
		collection.fetch_report();

		var arguments_passed = Backbone.Collection.prototype.fetch.mostRecentCall.args;

		expect(arguments_passed[0].alternate_url).toBe("get_report");

	});

});
