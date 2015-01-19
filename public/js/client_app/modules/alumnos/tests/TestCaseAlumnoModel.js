describe("AlumnosModel", function(){

	it("has alumnos as his namespace", function(){

		var model = new Alumno();
		expect(model.namespace).toBe("alumnos");
		
	});

	it("saves alumnos matriculas with save_matriculas alternate_url", function(){

		var matriculas = {"matriculas":[{alumno:"1", curso:"2"}]};
		var model = new Alumno();

		spyOn(Backbone.Model.prototype, "save");
		model.save_matriculas(matriculas);

		var arguments_passed = Backbone.Model.prototype.save.mostRecentCall.args;

		expect(arguments_passed[1].alternate_url).toBe("save_matriculas");
		expect(arguments_passed[0]).toBe(matriculas);

	});
});