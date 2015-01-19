function prepare_mocked_model_for(controller, data)
{
  if(data === undefined) data = {};

  var mock = new controller.model(data);
  spyOn(controller, "model").andReturn(mock);
  return mock;
}

describe("TestCaseSesionesController", function() {

  it("has sesiones as his namespace", function(){

    var controller = new SesionesController(new BaseRouter());
    expect(controller.namespace).toBe("sesiones");

  });

  it("sets Sesione:: as his auth namespace", function(){

    spyOn(CrudController.prototype, "set_auth_namespace");
    var controller = new SesionesController(new BaseRouter());

    expect(CrudController.prototype.set_auth_namespace).toHaveBeenCalledWith("Sesion::");

  });

  it("has Sesione as his model", function(){

    var controller = new SesionesController(new BaseRouter());

    var controller_model = new controller.model();
    expect(controller_model instanceof Sesion).toBe(true);
  });

  it("has SesionesForm as his form", function(){

    var controller = new SesionesController(new BaseRouter());
    expect(controller.form instanceof SesionesForm).toBe(true);
  });

  it("has SesionesTable as his list", function(){

    var controller = new SesionesController(new BaseRouter());
    expect(controller.list instanceof SesionesTable).toBe(true);
  });

  it("fetches cursos and profesores on form can:render event", function(){

    var controller = new SesionesController(new BaseRouter());
    spyOn(controller.profesores, "fetch");

    controller.form.trigger_can_render();
    expect(controller.profesores.fetch).wasCalled();

  });

  it("renders form on profesores fetch success", function() {

    var controller = new SesionesController(new BaseRouter());
    spyOn(controller.form, "set_profesores");
    spyOn(controller.form, "render_template");

    document.help_vars.current_user = {"rol":"profesor", "id":"12"};
    controller.profesores.trigger("fetch:success", {data:{list:"cursos"}});

    expect(controller.form.set_profesores).wasCalledWith("cursos");
    expect(controller.form.template_values.profesor).toEqual({id:"12"});
    expect(controller.form.render_template).wasCalled();


    controller.form.template_values.profesor = {id:"2"};
    document.help_vars.current_user = {"rol":"profesor", "id":"12"};
    controller.profesores.trigger("fetch:success", {data:{list:"cursos"}});

    expect(controller.form.template_values.profesor).toEqual({id:"2"});

  });

  it("prevents edit a validated sesion if user is a profesor", function(){

    var controller = new SesionesController(new BaseRouter());
    spyOn(controller.form, "render");
    spyOn(controller.form, "set_values");

    document.help_vars.current_user = {"rol":"profesor", "id":"12"};
    var model = new controller.model({id:"1", estado:1});
    controller.edit_form(model);

    expect(controller.form.render).wasNotCalled();
    expect(controller.form.set_values).wasNotCalled();

  });

  it("creates a new route on the router for asistencia", function(){

    var controller = new SesionesController(new BaseRouter());

    spyOn(controller, "asistencia");
    Backbone.history.loadUrl("sesiones/asistencia/12/15");

    var passed_args = controller.asistencia.mostRecentCall.args;

    expect(passed_args[1]).toBe("12");
    expect(passed_args[0]).toBe("15");

  });

  it("sets curso filter to alumnos on asistencia", function() {

    var controller = new SesionesController(new BaseRouter());

    spyOn(controller.asistencias_form, "render");
    spyOn(controller, "view");
    spyOn(controller.alumnos, "add_filter");

    controller.asistencia(21, 18);

    var args_for_filter = controller.alumnos.add_filter.mostRecentCall.args;
    expect(args_for_filter[0]).toEqual("curso");
    expect(args_for_filter[1]).toEqual(21);
    expect(args_for_filter[2]).toEqual("EQUALS");

    expect(controller.asistencias_form.template_values.sesion).toEqual(18);

    expect(controller.asistencias_form.render).wasCalled();
    expect(controller.view).wasCalledWith(controller.asistencias_form);

  });

  it("fetches asistencias on form_asistencia can:render", function(){

    var controller = new SesionesController(new BaseRouter());
    spyOn(controller.asistencias, "fetch");

    controller.asistencias_form.trigger("can:render");

    expect(controller.asistencias.fetch).wasCalled();

  });

  it("fetches alumnos on asistencias fetch success", function() {

    var controller = new SesionesController(new BaseRouter());
    spyOn(controller.alumnos, "fetch");

    controller.asistencias.trigger("fetch:success", {data:{collection:"asistencias"}});

    expect(controller.alumnos.fetch).wasCalled();
    expect(controller.asistencias_form.template_values.asistencias).toBe("asistencias");

  });

  it("renders asistencias_form on alumnos fetch success", function(){

    var controller = new SesionesController(new BaseRouter());
    spyOn(controller.asistencias_form, "render_template");
    controller.asistencias_form.template_values.asistencias = [];


    controller.alumnos.trigger("fetch:success", {data:{list:["alumnos"]}});

    expect(controller.asistencias_form.template_values.alumnos).toEqual(["alumnos"]);
    expect(controller.asistencias_form.render_template).wasCalled();
  });

  it("saves_asistencia on asistencias_form submit", function() {

    var controller = new SesionesController(new BaseRouter());
    var mock_model = prepare_mocked_model_for(controller);

    spyOn(mock_model, "save_asistencia");
    spyOn(controller.router, "navigate");

    controller.asistencias_form.trigger("submit", "data");
    expect(mock_model.save_asistencia).wasCalledWith("data");

    mock_model.trigger(controller.namespace+":save:success");

    expect(controller.router.navigate).wasCalled();

  });

  it("implements CursosModalSelection", function() {

    spyOn(SesionesController.prototype, "set_up_cursos_modal_selection");

    var controller = new SesionesController(new BaseRouter());

    expect(SesionesController.prototype.set_up_cursos_modal_selection).wasCalled();
  });

  it("should search by default current profesor on index", function(){
    var controller = new SesionesController(new BaseRouter());
    document.help_vars = {current_user:{rol:"profesor", name: "profesor_name"}};
    spyOn(CrudController.prototype, "index").andCallFake(function(){
      expect(controller.list.search_form.search_term).toBe("profesor_name");
      var expected_filter = {'property':"GLOBAL",'pattern':"profesor_name",'method':"LIKE"};
      expect(controller.list.collection.status.filters[0]).toEqual(expected_filter);
    });

    controller.index();
  });

  it("should search nothing by default if user is not profesor", function(){
    var controller = new SesionesController(new BaseRouter());
    document.help_vars = {current_user:{rol:"not profesor", name: "profesor_name"}};
    spyOn(CrudController.prototype, "index").andCallFake(function(){
      expect(controller.list.search_form.search_term === undefined).toBe(true);
      expect(controller.list.collection.status.filters === undefined).toBe(true);
    });

    controller.index();
  });

});


