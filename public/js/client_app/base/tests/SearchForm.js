describe("SearchForm", function(){
	
	it("has public/templates/search_form.html as a default template", function(){
		
		var form = new SearchForm();
		expect(form.template).toBe("public/templates/search_form.html");
		
	});
	
	it("has search as form_id", function(){
		
		var form = new SearchForm();
		expect(form.namespace).toBe("search");
		
	});
	
	
	it("triggers submit event on submit with the search value", function(){
		
		var form = new SearchForm();
		form.set_template("<form><input name='search' value='search term'></form>");
		form.render_template();
		
		var search_term = "";
		form.on("submit", function(search){
			search_term = search;
		});
		
		spyOn(form, "set_status");
		
		$(form.el).find("form").trigger("submit");
		
		expect(search_term).toBe("search term");
		expect(form.set_status).toHaveBeenCalledWith("search term");
	});
	
	it("sets the search string to search input on set_status", function(){
		
		var form = new SearchForm();
		form.set_template("<form><input name='search' value=''></form>");
		
		form.set_status("search_term");
		
		form.render_template();
		
		expect($(form.el).find("[name='search']").val()).toBe("search_term");
		
		form.set_status("search_term2");
		
		expect($(form.el).find("[name='search']").val()).toBe("search_term2");
		
	});
	
	it("prevents multiple renders", function(){
		
		var form = new SearchForm();
		spyOn(BaseForm.prototype, "render_template");
		
		form.render_template();
		form.render_template();
		
		expect(BaseForm.prototype.render_template.callCount).toBe(1);
	});

	it("transforms to timestamp if date detected", function() {
		
		var form = new SearchForm();
		form.set_template("<form><input name='search' value='01/12/2012'></form>");
		form.render_template();

		var search_term = "";
		form.on("submit", function(search){
			search_term = search;
		});

		$(form.el).find("form").trigger("submit");

		var expected = new XDate("01/12/2012").getTimestamp();

		expect(search_term).toEqual(expected);
		expect($(form.el).find("input").val()).toEqual("01/12/2012");

	});
});
