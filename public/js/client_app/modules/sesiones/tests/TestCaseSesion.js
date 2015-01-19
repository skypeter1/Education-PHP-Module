describe("TestCaseSesione", function() {

	it("has sesiones as namespace", function(){

		var model = new Sesion();
		expect(model.namespace).toBe("sesiones");

	});

	it("has fecha as typeDate", function(){

		var model = new Sesion();
		expect(model.data_types.fecha).toBe(DateType);

	});

	it("saves asistencia with save_asistencia alternate_url", function(){

		var asistencia = {"1":["1", "2"]};
		var model = new Sesion();

		spyOn(Backbone.Model.prototype, "save");
		model.save_asistencia(asistencia);

		var arguments_passed = Backbone.Model.prototype.save.mostRecentCall.args;

		expect(arguments_passed[1].alternate_url).toBe("save_asistencia");
		expect(arguments_passed[0]).toBe(asistencia);

	});

});