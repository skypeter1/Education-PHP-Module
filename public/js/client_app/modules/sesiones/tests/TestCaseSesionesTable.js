describe("TestCaseSesionesTable", function() {

	it("has a non default template", function(){

		var table = new SesionesTable({collection:new BaseCollection()});
		expect(table.template).toNotBe("default");

	});

});