describe("CursosModel", function(){

	it("has cursos as his namespace", function(){

		var model = new Curso();
		expect(model.namespace).toBe("cursos");
		
	});

	it("has fecha_inicio as DateType", function(){

		var model = new Curso();
		expect(model.data_types.fecha_inicio).toBe(DateType);
		
	});
	
	it("splits producto into producto and bodega ids", function(){

		var model = new Curso();
		model.set("producto_pac", "2-1");
		model.transform_output_data();

		expect(model.get("producto_pac")).toBe("2");
		expect(model.get("bodega")).toBe("1");

	});

	it("joins bodega and producto_pac ids into one string on producto_pac property", function(){

		var model = new Curso();
		model.set("producto_pac", "10");
		model.set("bodega", "5");
		model.transform_input_data();

		expect(model.get("producto_pac")).toBe("10-5");

	});

	it("saves cursos matriculas with save_matriculas_by_curso alternate_url", function(){

		var matriculas = {"1":["1", "2"]};
		var model = new Curso();

		spyOn(Backbone.Model.prototype, "save");
		model.save_matriculas_by_curso(matriculas);

		var arguments_passed = Backbone.Model.prototype.save.mostRecentCall.args;

		expect(arguments_passed[1].alternate_url).toBe("save_matriculas_by_curso");
		expect(arguments_passed[0]).toBe(matriculas);

	});

	it("saves pesos with save_pesos alternate_url", function() {
		
		var pesos = {"categoria":"peso", "categoria1":"peso1"};
		var model = new Curso();

		spyOn(Backbone.Model.prototype, "save");
		model.save_pesos(pesos);

		var arguments_passed = Backbone.Model.prototype.save.mostRecentCall.args;

		expect(arguments_passed[1].alternate_url).toBe("save_pesos");
		expect(arguments_passed[0]).toBe(pesos);

	});

	it("saves notas_finales with save_notas_finales alternate_url", function() {
		
		var notas = {"nota":"1", "nota2":"2"};
		var model = new Curso();

		spyOn(Backbone.Model.prototype, "save");
		model.save_notas_finales(notas);

		var arguments_passed = Backbone.Model.prototype.save.mostRecentCall.args;

		expect(arguments_passed[1].alternate_url).toBe("save_notas_finales");
		expect(arguments_passed[0]).toBe(notas);

	});

	it("fetches curso_overview with get_overview as alternate_url", function(){

		var model = new Curso();

		spyOn(Backbone.Model.prototype, "fetch");
		model.get_overview(1);

		var arguments_passed = Backbone.Model.prototype.fetch.mostRecentCall.args;

		expect(arguments_passed[0].alternate_url).toBe("get_overview");

	});

});