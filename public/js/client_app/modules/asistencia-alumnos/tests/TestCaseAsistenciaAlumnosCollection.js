describe("AsistenciaAlumnosCollection", function() {
	
	it("has sesiones as his namespace", function() {
		
		var collection = new AsistenciaAlumnosCollection();
		expect(collection.namespace).toEqual("sesiones");

	});

	it("passes to Backbone.collection.fetch get_asistencia_alumnos as alternate url", function(){

		var collection = new AsistenciaAlumnosCollection();

		spyOn(Backbone.Collection.prototype, "fetch");
		collection.fetch();

		var arguments_passed = Backbone.Collection.prototype.fetch.mostRecentCall.args;

		expect(arguments_passed[0].alternate_url).toBe("get_asistencia_alumnos");

	});

});