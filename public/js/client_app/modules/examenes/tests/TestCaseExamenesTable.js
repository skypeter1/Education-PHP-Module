describe("TestCaseExamenesTable", function() {

	it("has a non default template", function(){

		var table = new ExamenesTable({collection:new BaseCollection()});
		expect(table.template).toNotBe("default");

	});

});