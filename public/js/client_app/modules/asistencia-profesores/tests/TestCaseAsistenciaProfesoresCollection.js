describe("AsistenciaProfesorCollection", function() {
	
	it("has sesiones as his namespace", function() {
		
		var collection = new AsistenciaProfesorCollection();
		expect(collection.namespace).toEqual("sesiones");

	});

	it("passes to Backbone.collection.fetch get_asistencia_profesores as alternate url", function(){

		var collection = new AsistenciaProfesorCollection();

		spyOn(Backbone.Collection.prototype, "fetch");
		collection.fetch();

		var arguments_passed = Backbone.Collection.prototype.fetch.mostRecentCall.args;

		expect(arguments_passed[0].alternate_url).toBe("get_asistencia_profesores");

	});

});