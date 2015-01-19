describe("Validator", function(){
	
	
	it("validates 2 values are the same", function(){
		
		var validation = Validator.same_values("value", "value");
		expect(validation).toBe(true);
		
		validation = Validator.same_values("value", "different_value");
		expect(validation).toBe(false);
		
	});
	
	it("validates time strings", function(){
		
	});	
		
	it("validates cedula", function(){

		var invalid_cedula = "asdasd";
		var validation = Validator.cedula(invalid_cedula);
		expect(validation).toBe(false);
		
		invalid_cedula = "9710034065";
		validation = Validator.cedula(invalid_cedula);
		expect(validation).toBe(false);
		
		invalid_cedula = "1780034065";
		validation = Validator.cedula(invalid_cedula);
		expect(validation).toBe(false);
		
		invalid_cedula = "171003406";
		validation = Validator.cedula(invalid_cedula);
		expect(validation).toBe(false);
		
		var valid_cedula = "1710034065";
		validation = Validator.cedula(valid_cedula);
		expect(validation).toBe(true);
	});

	it("validates integers", function(){

		var invalid = "9,9123";
		var validation = Validator.integer(invalid);
		expect(validation).toBe(false);

		invalid = "19.9876";
		validation = Validator.integer(invalid);
		expect(validation).toBe(false);

		invalid = "invalid integer";
		validation = Validator.integer(invalid);
		expect(validation).toBe(false);

		invalid = "19.98,76.987";
		validation = Validator.integer(invalid);
		expect(validation).toBe(false);

		var valid = "1987";
		validation = Validator.integer(valid);
		expect(validation).toBe(true);

		valid = "";
		validation = Validator.integer(valid);
		expect(validation).toBe(true);

	});

	it("validates floats", function(){

		var invalid = "9,9123";
		var validation = Validator.floats(invalid);
		expect(validation).toBe(false);

		var valid = "19.9876";
		validation = Validator.floats(valid);
		expect(validation).toBe(true);

		invalid = "invalid floats";
		validation = Validator.floats(invalid);
		expect(validation).toBe(false);

		invalid = "19.9876.987";
		validation = Validator.floats(invalid);
		expect(validation).toBe(false);

		valid = "1987";
		validation = Validator.floats(valid);
		expect(validation).toBe(true);

		valid = "";
		validation = Validator.floats(valid);
		expect(validation).toBe(true);

	});
});
