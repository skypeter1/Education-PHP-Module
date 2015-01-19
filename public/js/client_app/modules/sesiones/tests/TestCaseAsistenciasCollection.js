describe("AsistenciasCollection", function() {

	it("has alumnos as his namespace", function(){

		var collection = new AsistenciasCollection();
		expect(collection.namespace).toBe("sesiones");

	});

	it("passes to Backbone.collection.fetch get_asistencia as alternate url", function(){

		var collection = new AsistenciasCollection();

		spyOn(Backbone.Collection.prototype, "fetch");
		collection.fetch();

		var arguments_passed = Backbone.Collection.prototype.fetch.mostRecentCall.args;

		expect(arguments_passed[0].alternate_url).toBe("get_asistencias");

	});

});