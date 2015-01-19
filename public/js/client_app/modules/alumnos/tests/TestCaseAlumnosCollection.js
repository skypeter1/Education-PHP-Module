describe("AlumnosCollection", function() {

	it("has alumnos as his namespace", function() {
		
		var collection = new AlumnosCollection();

		expect(collection.namespace).toBe("alumnos");

	});

});