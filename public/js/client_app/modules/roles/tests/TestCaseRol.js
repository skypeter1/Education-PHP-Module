describe("TestCaseRole", function() {

	it("has roles as namespace", function(){

		var model = new Rol();
		expect(model.namespace).toBe("roles");

	});

});
