describe("PagosForm", function() {
	
	it("has a non default template", function() {
		
		var form = new PagosForm();

		expect(form.template).toNotEqual("default");

	});

	it("has a change select#profesor_field profesor_change event", function() {
		
		var form = new PagosForm();
		expect(form.events["change select#profesor_field"]).toEqual("profesor_change");

	});

	it("has a change select#bodega_field bodega_change event", function() {
		
		var form = new PagosForm();
		expect(form.events["change select#bodega_field"]).toEqual("bodega_change");

	});

	it("triggers profesor:change event with profesor id on profesor_change", function() {

		var form = new PagosForm();
		var template = "<form><input id='profesor_field' value='2'></input></form>";
		form.set_template(template);
		form.render_template();

		var fake_event = {preventDefault: function(){}};
		spyOn(fake_event, "preventDefault");

		var profesor_id_on_change;
		form.on("profesor:change", function(profesor_id){
			profesor_id_on_change = profesor_id;
		});

		form.profesor_change(fake_event);
		expect(fake_event.preventDefault).wasCalled();

		expect(profesor_id_on_change).toEqual("2");

	});

	it("triggers bodega:change event with bodega id on bodega_change", function() {

		var form = new PagosForm();
		var template = "<form><input id='bodega_field' value='3'></input></form>";
		form.set_template(template);
		form.render_template();

		var fake_event = {preventDefault: function(){}};
		spyOn(fake_event, "preventDefault");

		var bodega_id_on_change;
		form.on("bodega:change", function(bodega_id){
			bodega_id_on_change = bodega_id;
		});

		form.bodega_change(fake_event);
		expect(fake_event.preventDefault).wasCalled();

		expect(bodega_id_on_change).toEqual("3");

	});

	it("resubscribes to got:template event and triggers a can:render event", function(){

		var form = new PagosForm();

		var event_triggered = false;
		form.on("can:render", function(){
			event_triggered = true;
		});

		form.trigger("got:template");

		expect(event_triggered).toBe(true);

	});

	it("transforms profesores to a label:value object on set_profesores", function() {
		
		var form = new PagosForm();
		var profesores = [{id:1, name:"profe1"}, {id:2, name:"profe2"}];

		form.set_profesores(profesores);

		var actual = form.template_values.profesores;

		expect(actual[0]).toEqual({value:1, label:"profe1"});  
		expect(actual[1]).toEqual({value:2, label:"profe2"});  

	});

	it("transforms bodegas to a label:value object on set_bodegas", function() {
		
		var form = new PagosForm();
		var bodegas = [{id:1, nombre:"bodega1"}, {id:2, nombre:"bodega2"}];
		form.set_bodegas(bodegas);
		
		var actual = form.template_values.bodegas;

		expect(actual[0]).toEqual({value:1, label:"bodega1"});
		expect(actual[1]).toEqual({value:2, label:"bodega2"});


	});

	it("parses values correctly", function() {
		
		var form = new PagosForm();
		form.set_template(get_testing_template());
		form.render_template();

		var values = form.get_values();

		expect(values).toEqual({profesor:"2", sesiones:["2", "4"]});
	});

    /**
     * Test Search Field for Cursos
     */
    it("test search field", function() {
        var form = new PagosForm();
        var template = '<form>';

        template += '<input type="text" id="type_search_curso">';

        template += '<input class="control-group" type="checkbox" data-curso="MODULO 1" value="1">';
        template += '<input class="control-group" type="checkbox" data-curso="MODULO 2" value="1">';
        template += '<input class="control-group" type="checkbox" data-curso="MODULO 3" value="1">';
        template += '<input class="control-group" type="checkbox" data-curso="MODULO 4" value="1">';

        template += '</form>';

        form.set_template(template);
        form.render_template();

        var search_field = $(form.el).find("input[id='type_search_curso']");

        // Testing 'key up' search for 'MODULO 3'
        search_field.val('MODULO 3');
        search_field.trigger('keyup');

        expect($(form.el).find("input[data-curso='MODULO 1']").attr('class')).toBe('none');
        expect($(form.el).find("input[data-curso='MODULO 2']").attr('class')).toBe('none');
        expect($(form.el).find("input[data-curso='MODULO 3']").attr('class')).toBe('');
        expect($(form.el).find("input[data-curso='MODULO 4']").attr('class')).toBe('none');

        // Testing 'key up' search for 'MODULO 2'
        search_field.val('MODULO 2');
        search_field.trigger('keyup');

        expect($(form.el).find("input[data-curso='MODULO 1']").attr('class')).toBe('none');
        expect($(form.el).find("input[data-curso='MODULO 2']").attr('class')).toBe('');
        expect($(form.el).find("input[data-curso='MODULO 3']").attr('class')).toBe('none');
        expect($(form.el).find("input[data-curso='MODULO 4']").attr('class')).toBe('none');
    });

	function get_testing_template()
	{

		return "<form>"+
			"<input id='profesor_field' value='2'></input>"+
			"<input type='checkbox' name='sesion' checked='checked' value='2'></input>"+
			"<input type='checkbox' name='sesion' checked='checked' value='4'></input>"+
			"<input type='checkbox' name='sesion' value='5'></input>"+
			"</form>";

	}
	
});

