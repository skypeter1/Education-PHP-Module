describe("ReportTable", function() {

  var table;

  beforeEach(function(){
    table = new ReportTable({collection:new BaseCollection()});
    table.collection.fetch_report = function(){};
    spyOn(table.collection, "fetch_report");
  });

  it("has a template diferent to default", function() {

    expect(table.template).toNotBe("default");

  });

  it("sets identificador filter when identificador setted on search and removes it when not present", function() {
    assert_filter_set_correctly_for("identificador");
  });

  it("sets mes filter when mes setted on search and removes it when not present", function() {
    assert_filter_set_correctly_for("mes");
  });

  it("sets profesor filter when profesor setted on search and removes it when not present", function() {
    assert_filter_set_correctly_for("profesor");
  });

  it("sets nombre filter when nombre setted on search and removes it when not present", function() {
    assert_filter_set_correctly_for("nombre");
  });

  it("sets sucursal filter when sucursal setted on search and removes it when not present", function() {
    assert_filter_set_correctly_for("sucursal");
  });

  it("sets estado filter when estado setted on search and removes it when not present", function() {
    assert_filter_set_correctly_for("estado");
  });

  function assert_filter_set_correctly_for(property){
    var filter = {};
    filter[property] = "test";
    table.search_form.trigger("submit", filter);

    var expected = {'property':property,'pattern':"test",'method':"EQUALS"};
    var actual = table.collection.status.filters[0];
    expect(actual).toEqual(expected);

    table.search_form.trigger("submit", {});
    expect(table.collection.status.filters.length).toBe(1);
    expect(table.collection.fetch_report).toHaveBeenCalled();
  }

});
