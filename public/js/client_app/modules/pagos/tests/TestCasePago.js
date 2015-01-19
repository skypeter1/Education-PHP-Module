describe("Pago", function() {
	
	it("has sesiones as his namespace", function() {
		
		var model = new Pago();
		expect(model.namespace).toEqual("sesiones");

	});

	it("saves pagos with save_pagos alternate_url", function(){

		var pagos = {"pagos":[]};
		var model = new Pago();

		spyOn(Backbone.Model.prototype, "save");
		model.save_pagos(pagos);

		var arguments_passed = Backbone.Model.prototype.save.mostRecentCall.args;

		expect(arguments_passed[1].alternate_url).toBe("save_pagos");
		expect(arguments_passed[0]).toBe(pagos);

	});

});