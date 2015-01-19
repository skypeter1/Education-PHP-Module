describe("BooleanType", function(){
	
	it("expect a 'on' or 1 string outputs true", function(){

		var value = "on";
		expect(BooleanType.output(value)).toBe(true);

		var value = 1;
		expect(BooleanType.output(value)).toBe(true);

		var value = "1";
		expect(BooleanType.output(value)).toBe(true);

		var value = "true";
		expect(BooleanType.output(value)).toBe(true);

	});

	it("expect different from 'on' or 1 string outputs false", function(){

		var value = null;
		expect(BooleanType.output(value)).toBe(false);

		var value = undefined;
		expect(BooleanType.output(value)).toBe(false);

		var value = "perro";
		expect(BooleanType.output(value)).toBe(false);

		var value = 5;
		expect(BooleanType.output(value)).toBe(false);

	});

	it("expect a false input if value equals 0", function(){
		
		var value = 0;
		expect(BooleanType.input(value)).toBe(false);

	});

	it("expect a true input if value equals 1", function(){

		var value = 1;
		expect(BooleanType.input(value)).toBe(true);

		var value = 2;
		expect(BooleanType.input(value)).toBe(false);

	});

});