describe("Auth", function() {
	it("returns false on check of non existant permission", function(){
		window.auth = new Auth();
		expect(auth.check(["non_existant_permision"])).toBe(false);
	});
	
	it("returns true on check of existant permission", function(){
		window.auth = new Auth();
		auth.add_permission("existant permission");
		expect(auth.check(["existant permission"])).toBe(true);
	});
	
	it("returns true on check of 1 existant permission and non existant one", function(){
		window.auth = new Auth();
		auth.add_permission("existant permission");
		expect(auth.check(["non_existant", "existant permission"])).toBe(true);
	});
	
	it("returns true on empty array of permissions", function(){
		window.auth = new Auth();
		expect(auth.check([])).toBe(true);
	});
});
