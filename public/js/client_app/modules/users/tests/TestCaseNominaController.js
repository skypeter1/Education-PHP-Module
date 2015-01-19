describe("TestCaseNominaController", function(){

  it("creates and subscribes to users-report route", function() {

    var controller = new NominaController(new BaseRouter());

    spyOn(controller, "index");

    Backbone.history.loadUrl("users-nomina");

    expect(controller.index).toHaveBeenCalled();

  });

  it("should fetch the report on index and pass the list view to view method", function() {

    var controller = new NominaController(new BaseRouter());
    spyOn(controller.collection, "fetch_nomina");
    spyOn(controller, "view");
    controller.index();

    expect(controller.collection.fetch_nomina).toHaveBeenCalled();
    expect(controller.view).toHaveBeenCalledWith(controller.list);

  });

  it("should render report on collection fetch_success", function() {

    var controller = new NominaController(new BaseRouter());
    spyOn(controller.list, "render");

    controller.collection.trigger("fetch:success", {data:{}});

    expect(controller.list instanceof NominaTable).toBe(true);
    expect(controller.list.render).toHaveBeenCalled();

  });

});
