describe("TestCaseRolesForm", function() {

	it("has a non default template", function(){

		var form = new RolesForm();
		expect(form.template).toNotBe("default");

	});

});