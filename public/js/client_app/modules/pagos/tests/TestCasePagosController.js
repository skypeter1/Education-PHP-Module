describe("PagosController", function() {

  it("creates and subscribes to pagos route", function() {

    var controller = new PagosController(new BaseRouter());

    spyOn(controller, "index");

    Backbone.history.loadUrl("pagos");

    expect(controller.index).toHaveBeenCalled();

  });

  it("renders form on index", function(){

    var controller = new PagosController(new BaseRouter());
    spyOn(controller.form, "render");
    spyOn(controller, "view");

    controller.index();

    expect(controller.form.render).wasCalled();
    expect(controller.view).wasCalledWith(controller.form);

  });

  it("fetches profesores on form can:render and sets_profesores on fetch:success", function() {

    var controller = new PagosController(new BaseRouter());
    spyOn(controller.form, "set_profesores");
    spyOn(controller.form, "set_bodegas");
    spyOn(controller.form, "render_template");
    spyOn(controller.profesores, "fetch");
    spyOn(controller.bodegas, "fetch");
    spyOn(controller.products, "fetch_for_pagos");

    controller.form.trigger("can:render");
    expect(controller.profesores.fetch).wasCalled();

    controller.profesores.trigger("fetch:success", {data:{list:"profesores"}});
    expect(controller.form.set_profesores).wasCalledWith("profesores");
    expect(controller.bodegas.fetch).wasCalled();

    controller.bodegas.trigger("fetch:success", {data:{list:"bodegas"}});
    expect(controller.form.set_bodegas).wasCalledWith("bodegas");
    expect(controller.products.fetch_for_pagos).wasCalled();

    controller.products.trigger("fetch:success", {data:{list:"bodegas"}});
    expect(controller.form.render_template).wasCalled();

  });

  it("fetches sesiones for profesor selected on form profesor:change event", function() {

    var controller = new PagosController(new BaseRouter());
    spyOn(controller.sesiones, "fetch");
    spyOn(controller.form, "render_template");

    controller.form.trigger("profesor:change", "2");
    expect(controller.form.template_values.profesor).toEqual("2");
    expect(controller.sesiones.fetch).wasCalled();

    controller.sesiones.models.push(new BaseModel({"sesiones": "sesiones"}));
    controller.sesiones.trigger("fetch:success", {data:{list:[{"sesiones":"sesiones"}]}});
    expect(controller.form.template_values.sesiones).toEqual([{"sesiones":"sesiones"}]);
    expect(controller.form.render_template).wasCalled();

  });

  it("save_pagos on form submit", function() {

    var controller = new PagosController(new BaseRouter());
    var mocked_model = prepare_mocked_model_for(controller);
    spyOn(mocked_model, "save_pagos");

    controller.form.trigger("submit", {sesiones:["sesion1", "sesion2"]});
    expect(mocked_model.save_pagos).wasCalledWith({sesiones:["sesion1", "sesion2"]});

  });

  function prepare_mocked_model_for(controller, data)
  {
    if(data === undefined) data = {};

    var mock = new controller.model(data);
    spyOn(controller, "model").andReturn(mock);
    return mock;
  }

});
