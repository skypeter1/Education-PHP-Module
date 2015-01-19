describe("TestCaseUser", function() {

	it("has users as namespace", function(){

		var model = new User();
		expect(model.namespace).toBe("users");

	});

});