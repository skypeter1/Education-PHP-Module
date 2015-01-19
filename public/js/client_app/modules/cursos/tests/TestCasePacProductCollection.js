describe("PacProductCollection", function() {

	it("has cursos as his namespace", function(){

		var collection = new PacProductCollection();
		expect(collection.namespace).toBe("cursos");

	});

	it("passes to Backbone.collection.fetch get_pac_products as alternate url", function(){

		var collection = new PacProductCollection();

		spyOn(Backbone.Collection.prototype, "fetch");
		collection.fetch();

		var arguments_passed = Backbone.Collection.prototype.fetch.mostRecentCall.args;

		expect(arguments_passed[0].alternate_url).toBe("get_pac_products");

	});

});