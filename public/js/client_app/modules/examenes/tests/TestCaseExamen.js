describe("TestCaseExamen", function() {

	it("has examenes as namespace", function(){

		var model = new Examen();
		expect(model.namespace).toBe("examenes");

	});

	it("has fecha as DateType type", function(){

		var model = new Examen();
		expect(model.data_types.fecha).toBe(DateType);
		
	});

	it("saves examenes notas with save_notas alternate_url", function(){

		var notas = {"notas":[{alumno:"1", examen:"2"}]};
		var model = new Examen();

		spyOn(Backbone.Model.prototype, "save");
		model.save_notas(notas);

		var arguments_passed = Backbone.Model.prototype.save.mostRecentCall.args;

		expect(arguments_passed[1].alternate_url).toBe("save_notas");
		expect(arguments_passed[0]).toBe(notas);

	});

});