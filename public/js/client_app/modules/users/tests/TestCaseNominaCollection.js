describe("NominaCollection", function() {
	
	it("has users as his namespace", function() {
	
		var collection = new NominaCollection();
		expect(collection.namespace).toEqual("users");

	});

	it("passes to Backbone.collection.fetch get_nomina as alternate url", function(){

		var collection = new NominaCollection();

    spyOn(Backbone.Collection.prototype, "fetch");
    collection.fetch_nomina();

    var arguments_passed = Backbone.Collection.prototype.fetch.mostRecentCall.args;

    expect(arguments_passed[0].alternate_url).toBe("get_nomina");

	});

});