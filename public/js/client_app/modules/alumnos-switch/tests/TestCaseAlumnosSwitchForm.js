describe("AlumnosSwitchForm", function() {
	
	it("has a non default template", function() {
		
		var  form = new AlumnosSwitchForm();

		expect(form.template).toNotBe("default");

	});

	it("has events for both cursos selects", function(){

		var form = new AlumnosSwitchForm();
		expect(form.events["change #curso_left_field"]).toBe("cursos_change");

	});

	it("triggers left_cursos_change event on left_cursos_change", function() {

		var form = new AlumnosSwitchForm();
		var template = "<form><input id='curso_left_field' value='old_left_curso'><input id='curso_right_field' value='old_right_curso'></input></form>";
		form.set_template(template);
		form.render_template();

		var left_curso_expected;
		var right_curso_expected;

		form.on("cursos:changed", function(left_curso, right_curso){
			left_curso_expected = left_curso;
			right_curso_expected = right_curso;
		});

		$(form.el).find("#curso_left_field").val("new_curso");
		$(form.el).find("#curso_left_field").trigger("change");

		expect(left_curso_expected).toBe("new_curso");
		expect(right_curso_expected).toBe("old_right_curso");

	});

	it("transforms cursos to a label:value object on set_cursos", function() {
		
		var form = new AlumnosSwitchForm();
		var cursos = [{"identificador":"1", "nombre":"curso1", "id":1, "fecha_inicio":0, bodega_nombre:"bodega1","profesor":{"name":"name1"}}, {"identificador":"2", "nombre":"curso2", "id":2, "fecha_inicio":0, bodega_nombre:"bodega2","profesor":{"name":"name2"}}];
		form.set_cursos(cursos);

		expect(form.template_values.cursos[0].label).toBe("1 - bodega1 - curso1 - name1 - 1969-12-31");
		expect(form.template_values.cursos[0].value).toBe(1);
		expect(form.template_values.cursos[1].label).toBe("2 - bodega2 - curso2 - name2 - 1969-12-31");
		expect(form.template_values.cursos[1].value).toBe(2);

	});

	it("passes correct values on submit", function(){

		var form = new AlumnosSwitchForm();
		form.set_template(get_testing_template());
		form.render_template();

		var values = form.get_values();

		expect(values["1"]).toEqual(["1","2","3"]);
		expect(values["3"]).toEqual(["4","5","6"]);

	});

	function get_testing_template(){

		return "<form>"+
			"<select id='curso_left_field'>"+
				"<option value='1' selected='selected'></option>"+
				"<option value='2'></option>"+
			"</select>"+
			"<select id='curso_right_field'>"+
				"<option value='3' selected='selected'></option>"+
				"<option value='5'></option>"+
			"</select>"+
			"<select id='alumnos_left_field' multiple='multiple'>"+
				"<option value='1'></option>"+
				"<option value='2'></option>"+
				"<option value='3'></option>"+
			"</select>"+
			"<select id='alumnos_right_field' multiple='multiple'>"+
				"<option value='4'></option>"+
				"<option value='5'></option>"+
				"<option value='6'></option>"+
			"</select>"+
		"</form>";
	}

});
