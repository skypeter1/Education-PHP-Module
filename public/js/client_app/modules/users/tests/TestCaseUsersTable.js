describe("TestCaseUsersTable", function() {

	it("has a non default template", function(){

		var table = new UsersTable({collection:new BaseCollection()});
		expect(table.template).toNotBe("default");

	});

});