describe("CursosTable", function() {
	
	it("has a template diferent to default", function() {
		
		var table = new CursosTable({collection:new BaseCollection()});
		expect(table.template).toNotBe("default");

	});

	it("pases to parent, options control_values.label and url", function(){

		var table = new CursosTable({collection:new BaseCollection()});
		expect(table.controls.template_values.label).toNotBe("");
		expect(table.controls.template_values.url).toBe("#cursos/new");

	});

});