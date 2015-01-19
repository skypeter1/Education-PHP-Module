describe("TestCaseRolesTable", function() {

	it("has a non default template", function(){

		var table = new RolesTable({collection:new BaseCollection()});
		expect(table.template).toNotBe("default");

	});

});