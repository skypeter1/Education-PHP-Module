describe("TestCaseNominaTable", function() {

  it("has a non default template", function(){

    var table = new NominaTable({collection:new BaseCollection()});
    expect(table.template).toNotBe("default");

  });

});