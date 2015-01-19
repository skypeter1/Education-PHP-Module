describe("MatriculasForm", function() {
	
	it("has a non default template", function() {
		
		var form = new MatriculasForm();

		expect(form.template).toNotBe("default");

	});

	it("resubscribes to got:template event and triggers a can:render event", function(){

		var form = new MatriculasForm();

		var event_triggered = false;
		form.on("can:render", function(){
			event_triggered = true;
		});

		form.trigger("got:template");

		expect(event_triggered).toBe(true);

	});

	it("parses correctly all cursos checkbox", function(){

		var form = new MatriculasForm();
		var template = "<form><input type='hidden' name='alumno' value='5'><input type='checkbox' value='1'></input><input type='checkbox' value='2'></input><input type='checkbox' value='3'></input></form>";
		form.set_template(template);
		form.render_template();

		$(form.el).find("input[value='1']").attr("checked", "checked");
		$(form.el).find("input[value='2']").attr("checked", "checked");

		var values = form.get_values();

		expect(values["5"].length).toBe(2);

		expect(values["5"][0]).toBe("1");
		expect(values["5"][1]).toBe("2");

	});

	it("test search field", function() {

		var form = new MatriculasForm();
		var template = "<form><input type='text' name='search_field'>"+
		"<input class='control-group' type='checkbox' search='uno' value='1'>"+
		"</input><input class='control-group' type='checkbox' search='dos' value='2'>"+
		"</input><input class='control-group' type='checkbox' search='tres' value='3'></input></form>";

		form.set_template(template);
		form.render_template();

		var search_field = $(form.el).find("input[name='search_field']");
		
		search_field.val('uno');
		search_field.trigger("keyup");

		expect($(form.el).find("input[search='uno']").css('display')).toBe("table-row");
		expect($(form.el).find("input[search='dos']").css('display')).toBe("none");
		expect($(form.el).find("input[search='tres']").css('display')).toBe("none");

		search_field.val('dos');
		search_field.trigger("keyup");

		expect($(form.el).find("input[search='uno']").css('display')).toBe("none");
		expect($(form.el).find("input[search='dos']").css('display')).toBe("table-row");
		expect($(form.el).find("input[search='tres']").css('display')).toBe("none");
	});

});
