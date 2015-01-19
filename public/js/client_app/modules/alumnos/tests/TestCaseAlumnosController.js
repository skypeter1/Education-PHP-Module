function prepare_mocked_model_for(controller, data)
{
  if(data === undefined) data = {};

  var mock = new controller.model(data);
  spyOn(controller, "model").andReturn(mock);
  return mock;
}

describe("AlumnosController", function(){

  it("has alumnos namespace and Alumno as his model", function() {

    var controller = new AlumnosController(new BaseRouter());
    expect(controller.namespace).toBe("alumnos");

    var expected_model = new controller.model();
    expect(expected_model instanceof Alumno).toBe(true);

  });

  it("has AlumnosForm as his form", function() {

    var controller = new AlumnosController(new BaseRouter());

    expect(controller.form instanceof AlumnosForm).toBe(true);

  });

  it("has AlumnosTable as his list", function() {

    var controller = new AlumnosController(new BaseRouter());

    expect(controller.list instanceof AlumnosTable).toBe(true);

  });

  it("has AlumnosCollection as his collection", function() {

    var controller = new AlumnosController(new BaseRouter());

    expect(controller.collection instanceof AlumnosCollection).toBe(true);

  });

  it("executes render_form on form can:render event", function(){

    var controller = new AlumnosController(new BaseRouter());
    spyOn(controller, "render_form");

    controller.form.trigger("got:template");
    expect(controller.render_form).toHaveBeenCalled();

  });

  it("fetch pac_clients list and renders the form on render form", function(){
    var controller = new AlumnosController(new BaseRouter());

    expect(controller.pac_clients instanceof PacClientsCollection).toBe(true);
    spyOn(controller.pac_clients, "fetch");

    controller.render_form();
    expect(controller.pac_clients.fetch).toHaveBeenCalled();

    spyOn(controller.form, "set_pac_clients");
    spyOn(controller.form, "render_template");

    controller.pac_clients.trigger("fetch:success", {data:{list:"list"}});

    expect(controller.form.set_pac_clients).toHaveBeenCalledWith("list");
    expect(controller.form.render_template).toHaveBeenCalled();
  });

  it("creates a new route on the router", function(){

    var controller = new AlumnosController(new BaseRouter());

    var alumno_id_passed;
    controller.bus.on("alumnos:route:matricula", function(alumno_id){
      alumno_id_passed = alumno_id;
    });

    Backbone.history.loadUrl("alumnos/matricula/1");

    expect(alumno_id_passed).toBe("1");

  });

  it("renders form_matricula on controller.matricula", function(){

    var controller = new AlumnosController(new BaseRouter());
    spyOn(controller.form_matriculas, "render");
    spyOn(controller, "view");

    controller.matricula("1");

    expect(controller.form_matriculas.render).toHaveBeenCalled();
    expect(controller.view).toHaveBeenCalledWith(controller.form_matriculas);
    expect(controller.current_alumno_id).toBe("1");
  });

  it("subscribes to a matriculas route event", function(){

    var controller = new AlumnosController(new BaseRouter());
    spyOn(controller, "matricula");

    controller.bus.trigger("alumnos:route:matricula");
    expect(controller.matricula).toHaveBeenCalled();
  });

  it("fetches cursos on form_matriculas can:render event and sets alumno to form_matriculas template value on success", function(){

    var controller = new AlumnosController(new BaseRouter());
    var mocked_model = prepare_mocked_model_for(controller);
    controller.current_alumno_id = "2";

    var id_passed;
    spyOn(mocked_model, "fetch").andCallFake(function(){id_passed = this.get("id");});

    controller.form_matriculas.trigger("got:template");
    expect(mocked_model.fetch).toHaveBeenCalled();
    expect(id_passed).toBe("2");

    spyOn(controller.cursos, "fetch");
    mocked_model.trigger("alumnos:fetch:success", mocked_model);

    expect(controller.form_matriculas.template_values.alumno).toEqual(mocked_model.toJSON());
    expect(controller.cursos.fetch).toHaveBeenCalled();
  });

  it("sets cursos to form and calls matriculas fetch on cursos fetch:success", function(){

    var controller =  new AlumnosController(new BaseRouter());
    spyOn(controller.matriculas, "fetch");
    spyOn(controller.form_matriculas, "set_cursos");


    controller.current_alumno_id = "1";

    controller.cursos.trigger("fetch:success", {data:{list:"cursos"}});

    expect(controller.matriculas.fetch).toHaveBeenCalledWith(controller.current_alumno_id);
    expect(controller.form_matriculas.set_cursos).toHaveBeenCalledWith("cursos");
  });

  it("sets matriculas to form template values on matriculas fetch:success and renders form", function(){

    var controller = new AlumnosController(new BaseRouter());
    spyOn(controller.form_matriculas, "render_template");

    controller.matriculas.trigger("fetch:success", {data:"matriculas"});

    expect(controller.form_matriculas.template_values.matriculas).toBe("matriculas");
    expect(controller.form_matriculas.render_template).toHaveBeenCalled();

  });

  it("saves matriculas via alumnos model on form matriculas submit event", function(){

    var controller = new AlumnosController(new BaseRouter());	
    var mock_model = prepare_mocked_model_for(controller);
    spyOn(mock_model, "save_matriculas");

    controller.form_matriculas.trigger("submit", "data");

    spyOn(controller.router, "navigate");
    mock_model.trigger("alumnos:save:success");

    expect(mock_model.save_matriculas).toHaveBeenCalledWith({matriculas: "data"});

    var args_for_navigate = controller.router.navigate.mostRecentCall.args;
    expect(controller.router.navigate).toHaveBeenCalled();
    expect(args_for_navigate[0]).toBe("alumnos");
    expect(args_for_navigate[1]).toBe(true);
  });

});


