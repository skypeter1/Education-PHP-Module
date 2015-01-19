describe("BodegasCollection", function() {

	it("has cursos as his namespace", function(){

		var collection = new BodegasCollection();
		expect(collection.namespace).toBe("cursos");

	});

	it("passes to Backbone.collection.fetch get_bodegas as alternate url", function(){

		var collection = new BodegasCollection();

		spyOn(Backbone.Collection.prototype, "fetch");
		collection.fetch();

		var arguments_passed = Backbone.Collection.prototype.fetch.mostRecentCall.args;

		expect(arguments_passed[0].alternate_url).toBe("get_bodegas");

	});

});