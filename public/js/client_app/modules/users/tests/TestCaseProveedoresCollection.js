describe("ProveedoresCollection", function() {
	
	it("has users as his namespace", function() {
	
		var collection = new ProveedoresCollection();
		expect(collection.namespace).toEqual("users");

	});

	it("passes to Backbone.collection.fetch get_proveedores as alternate url", function(){

		var collection = new ProveedoresCollection();

		spyOn(Backbone.Collection.prototype, "fetch");
		collection.fetch();

		var arguments_passed = Backbone.Collection.prototype.fetch.mostRecentCall.args;

		expect(arguments_passed[0].alternate_url).toBe("get_proveedores");

	});

});