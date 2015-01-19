describe("ReportController", function(){
  
  it("creates and subscribes to cursos-report route", function() {

    var controller = new ReportController(new BaseRouter());

    spyOn(controller, "index");

    Backbone.history.loadUrl("cursos-report");

    expect(controller.index).toHaveBeenCalled();

  });

  it("should fetch the report on index and pass the list view to view method", function(){

    var controller = new ReportController(new BaseRouter());
    spyOn(controller.collection, "fetch_report");
    spyOn(controller, "view");
    controller.index();

    expect(controller.collection.fetch_report).toHaveBeenCalled();
    expect(controller.view).toHaveBeenCalledWith(controller.list);

  });

  it("should render report on collection fetch_success", function(){
    
    var controller = new ReportController(new BaseRouter());
    spyOn(controller.list, "render");

    controller.collection.trigger("fetch:success", {data:{}});

    expect(controller.list instanceof ReportTable).toBe(true);
    expect(controller.list.render).toHaveBeenCalled();

  });

});
