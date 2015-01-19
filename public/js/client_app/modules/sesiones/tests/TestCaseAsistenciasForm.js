describe("AsistenciasForm", function() {
	
	it("has a non default template", function() {
	
		var form = new AsistenciasForm();
		expect(form.template).toNotBe("default");

	});

	it("resubscribes to got:template event and triggers a can:render event", function(){

		var form = new AsistenciasForm();

		var event_triggered = false;
		form.on("can:render", function(){
			event_triggered = true;
		});

		form.trigger("got:template");

		expect(event_triggered).toBe(true);

	});

	it("parses values correctly", function() {
		
		var form = new AsistenciasForm();
		form.set_template(get_testing_template());
		form.render_template();

		var values = form.get_values();

		expect(values[5][2]).toEqual({estado:"1", observaciones:"una observacion"});
		expect(values[5][3]).toEqual({estado:"2", observaciones:""});

	});

	function get_testing_template()
	{
		return "<form action='#'>"+
			"<div class='asistencia'>"+
				"<select name='estado'>"+
					"<option selected='selected' value='1'></option>"+
					"<option value='2'></option>"+
				"</select>"+
				"<textarea type='text' name='observaciones'>una observacion</textarea>"+
				"<input type='hidden' name='alumno' value='2'>"+
				"<input type='hidden' name='sesion' value='5'>"+
			"</div>"+
			"<div class='asistencia'>"+
				"<select name='estado'>"+
					"<option value='1'></option>"+
					"<option selected='selected' value='2'></option>"+
				"</select>"+
				"<textarea type='text' name='observaciones'></textarea>"+
				"<input type='hidden' name='alumno' value='3'>"+
				"<input type='hidden' name='sesion' value='5'>"+
			"</div>"+
		"</form>";
	}

});