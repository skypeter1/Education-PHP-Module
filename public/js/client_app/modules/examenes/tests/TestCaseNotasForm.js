
function get_testing_template()
{
	return	"<div class='alumno'>"+
			"<input type='text' name='nota' class='integer' id='nota' value='55'>"+
			"<input type='text' name='observaciones' id='observaciones' value='observaciones'>"+
			"<input type='hidden' value='1' name='alumno'>"+
			"</div>"+
			"<div class='alumno'>"+
			"<input type='text' name='nota' class='integer' id='nota' value='5'>"+
			"<input type='text' name='observaciones' id='observaciones' value='observaciones2'>"+
			"<input type='hidden' value='2' name='alumno'>"+
			"</div>";
}

describe("NotasForm", function() {
	
	it("it has a non default template", function() {

		var form = new NotasForm();
		expect(form.template).toNotEqual("default");

	});

	it("parses values correctly", function() {
		
		var form = new NotasForm();
		form.set_template(get_testing_template());
		form.render_template();

		var examen = 2;
		var values = form.get_values(2);

		expect(values[0]).toEqual({examen:2, alumno:"1", nota:"55", observaciones:"observaciones"});
		expect(values[1]).toEqual({examen:2, alumno:"2", nota:"5", observaciones:"observaciones2"});

	});

	it("adds notas to alumnos array if on set_alumnos", function() {
	
		var form = new NotasForm();
		form.template_values.notas = [	{"alumno":"1","examen":"1","nota":"2","observaciones":"text"},
										{"alumno":"2","examen":"1","nota":"3","observaciones":"text2"}];

		var alumnos = [{id:1}, {id:2}, {id:3}];

		form.set_alumnos(alumnos);

		var transformed_alumnos = form.template_values.alumnos;

		expect(transformed_alumnos[0]).toEqual({id:1, nota: "2", observaciones:"text"});
		expect(transformed_alumnos[1]).toEqual({id:2, nota: "3", observaciones:"text2"});
	});

});
