describe("MatriculasCollection", function() {

	it("has alumnos as his namespace", function(){

		var collection = new MatriculasCollection();
		expect(collection.namespace).toBe("alumnos");

	});

	it("passes to Backbone.collection.fetch get_matriculas as alternate url", function(){

		var collection = new MatriculasCollection();

		spyOn(Backbone.Collection.prototype, "fetch");
		collection.fetch();

		var arguments_passed = Backbone.Collection.prototype.fetch.mostRecentCall.args;

		expect(arguments_passed[0].alternate_url).toBe("get_matriculas");

	});

});