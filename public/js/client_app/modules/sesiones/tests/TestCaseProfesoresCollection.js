describe("ProfesoresCollection", function() {
	
	it("it has users as his namespace", function() {

		var collection = new ProfesoresCollection();
		expect(collection.namespace).toEqual("users");

	});

});