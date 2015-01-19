describe("PacClientsCollection", function() {

	it("has alumnos as his namespace", function(){

		var collection = new PacClientsCollection();
		expect(collection.namespace).toBe("alumnos");

	});

	it("passes to Backbone.collection.fetch get_pac_clients as alternate url", function(){

		var collection = new PacClientsCollection();

		spyOn(Backbone.Collection.prototype, "fetch");
		collection.fetch();

		var arguments_passed = Backbone.Collection.prototype.fetch.mostRecentCall.args;

		expect(arguments_passed[0].alternate_url).toBe("get_pac_clients");

	});

});