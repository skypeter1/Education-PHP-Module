describe("TestCaseRolesController", function() {

  it("has roles as his namespace", function(){

    var controller = new RolesController(new BaseRouter());
    expect(controller.namespace).toBe("roles");

  });

  it("sets Rol:: as his auth namespace", function(){

    spyOn(CrudController.prototype, "set_auth_namespace");
    var controller = new RolesController(new BaseRouter());

    expect(CrudController.prototype.set_auth_namespace).toHaveBeenCalledWith("Rol::");

  });

  it("has Rol as his model", function(){

    var controller = new RolesController(new BaseRouter());

    var controller_model = new controller.model();
    expect(controller_model instanceof Rol).toBe(true);
  });

  it("has RolesForm as his form", function(){

    var controller = new RolesController(new BaseRouter());
    expect(controller.form instanceof RolesForm).toBe(true);
  });

  it("has RolesTable as his list", function(){

    var controller = new RolesController(new BaseRouter());
    expect(controller.list instanceof RolesTable).toBe(true);
  });

  it("executes render_form on form can:render event", function(){

    var controller = new RolesController(new BaseRouter());
    spyOn(controller, "render_form");

    controller.form.trigger("got:template");
    expect(controller.render_form).toHaveBeenCalled();

  });

  it("fetch pac_users options and renders the form on render form", function(){
    var controller = new RolesController(new BaseRouter());

    expect(controller.pac_users instanceof PacUsersCollection).toBe(true);

    spyOn(controller.pac_users, "fetch");
    controller.render_form();
    expect(controller.pac_users.fetch).toHaveBeenCalled();

    spyOn(controller.form, "render_template");

    controller.pac_users.trigger("fetch:success", {data:{list:"list"}});

    expect(controller.form.template_values.pac_users).toBe("list");
    expect(controller.form.render_template).toHaveBeenCalled();
  });

});
