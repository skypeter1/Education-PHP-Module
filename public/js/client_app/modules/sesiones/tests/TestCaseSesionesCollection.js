describe("SesionesCollection", function() {

	it("has sesiones as his namespace", function() {
		
		var collection = new SesionesCollection();
		expect(collection.namespace).toEqual("sesiones");

	});

});