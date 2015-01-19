describe("NotasGridView", function() {
	
	it("has a non default template", function() {
		
		var view = new NotasGridView();
		expect(view.template).toNotEqual("default");

	});

	it("disables buttons if total percent > 100", function(){

		var view = get_rendered_view();
		$(view.el).find("[name='Categoria 1']").val("26").trigger("keyup");
		
		expect($(view.el).find(".total_percent span").text()).toEqual("101");
		expect($(view.el).find(".btn-primary").hasClass("disabled")).toBe(true);
		expect($(view.el).find(".btn-primary").hasClass("save")).toBe(false);
		/*expect($(view.el).find(".btn-success").hasClass("disabled")).toBe(true);
		expect($(view.el).find(".btn-success").hasClass("close_curso")).toBe(false);*/

		$(view.el).find("[name='Categoria 1']").val("25").trigger("keyup");
		
		expect($(view.el).find(".total_percent span").text()).toEqual("100");
		expect($(view.el).find(".btn-primary").hasClass("disabled")).toBe(false);
		expect($(view.el).find(".btn-primary").hasClass("save")).toBe(true);
		/*expect($(view.el).find(".btn-success").hasClass("disabled")).toBe(false);
		expect($(view.el).find(".btn-success").hasClass("close_curso")).toBe(true);*/

	});

	it("disables cerrar curso button if tolta percent != 100", function() {

		var view = get_rendered_view();
		$(view.el).find("[name='Categoria 1']").val("25").trigger("keyup");

		expect($(view.el).find(".btn-success").hasClass("disabled")).toBe(false);
		expect($(view.el).find(".btn-success").hasClass("close_curso")).toBe(true);

		$(view.el).find("[name='Categoria 1']").val("24").trigger("keyup");
		expect($(view.el).find(".btn-success").hasClass("disabled")).toBe(true);
		expect($(view.el).find(".btn-success").hasClass("close_curso")).toBe(false);

		$(view.el).find("[name='Categoria 1']").val("26").trigger("keyup");
		expect($(view.el).find(".btn-success").hasClass("disabled")).toBe(true);
		expect($(view.el).find(".btn-success").hasClass("close_curso")).toBe(false);

	});

	it("calculates nota final on any peso pct changes", function() {
		
		var view = get_rendered_view();

		$(view.el).find("[name='Categoria 1']").trigger("keyup");
		var alumnos = $(view.el).find("tr.alumno");

		var nota_final_alumno1 = $(alumnos[0]).find("td.nota_final span").text();
		var nota_final_alumno2 = $(alumnos[1]).find("td.nota_final span").text();
 
		expect(nota_final_alumno1).toEqual("64.3");
		expect(nota_final_alumno2).toEqual("70.9");

	});

	it("triggers save:pesos on save_event", function() {
		
		var view = get_rendered_view();
		
		var actual_values;
		view.on("save:pesos", $.proxy(function(values){
			actual_values = values;
		}, this));

		var fake_event = {preventDefault:function(){}};
		spyOn(fake_event, "preventDefault");

		view.save_event(fake_event);

		expect(fake_event.preventDefault).wasCalled();

		var pesos = actual_values.pesos;
		expect(pesos).toEqual({"Categoria 1": "25", "Categoria 2": "25", "Categoria 3": "50"});
	});

	it("returns an object ready to save with curso, alumno, nota format", function() {
		
		var view = get_rendered_view();

		var notas = view.get_notas_finales();

		expect(notas[0]).toEqual({curso:"2", alumno:"5", nota:"64.3"});
		expect(notas[1]).toEqual({curso:"2", alumno:"25", nota:"70.9"});

	});


function get_rendered_view()
{
	var view = new NotasGridView();
	view.set_template(get_testing_grid());
	view.render_template();
	return view;
}

function get_testing_grid()
{
	return "<table>"+
	"<button class='btn btn-primary'>Guardar pesos</button>"+
	"<button class='btn btn-success'>Cerrar curso</button>"+
	"<input type='hidden' name='curso' value='2'>"+
	"<thead>"+
		"<tr>"+
			"<th>Alumnos</th>"+
			"<th><input class='peso' name='Categoria 1' value='25'>Prueba 1</th>"+
			"<th><input class='peso' name='Categoria 2' value='25'>Prueba 2</th>"+
			"<th><input class='peso' name='Categoria 3' value='50'>Prueba 3</th>"+
			"<th class='total_percent'>Nota final (<span>100</span> %)</th>"+
		"</tr>"+
	"</thead>"+
	"<tbody>"+
		"<tr class='alumno'>"+
			"<td class='alumno' data='5'>Alumno 1</td>"+
			"<td><span class='nota' name='Categoria 1' >60</span><span name='Categoria 1' class='nota' >88</span></td>"+
			"<td><span class='nota' name='Categoria 2' >15</span><span name='Categoria 2' class='nota' >43</span></td>"+
			"<td><span class='nota' name='Categoria 3' >99</span><span name='Categoria 3' class='nota' >55</span></td>"+
			"<td class='nota_final'><span></span></td>"+
		"</tr>"+
		"<tr class='alumno'>"+
			"<td class='alumno' data='25'>Alumno 2</td>"+
			"<td><span class='nota' name='Categoria 1' >50</span><span class='nota' name='Categoria 1' >100</span></td>"+
			"<td><span class='nota' name='Categoria 2' >34</span><span class='nota' name='Categoria 2' >99</span></td>"+
			"<td><span class='nota' name='Categoria 3' >76</span><span class='nota' name='Categoria 3' >66</span></td>"+
			"<td class='nota_final'><span></span></td>"+
		"</tr>"+
	"</tbody>"+
"</table>";


}

});