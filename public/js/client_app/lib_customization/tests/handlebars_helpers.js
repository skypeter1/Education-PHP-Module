describe("Handlebars helpers", function() {

	describe("draw_select_options", function() {

		beforeEach(function(){
			this.helper = Handlebars.helpers.draw_select_options;
		})

		it("returns html options string with value and label bassed on value:label object type", function(){

			var options = [{label:"label1", value:"value1"}, {label:"label2", value:"value2"}];

			var selected_value = "value2";

			var html_options = this.helper(options, selected_value);

			var test_select = $("<select>"+html_options+"</select>");

			var select_options = $(test_select).find("option");

			expect($(select_options[0]).val()).toBe("value1");
			expect($(select_options[0]).html()).toBe("label1");

			expect($(select_options[1]).val()).toBe("value2");
			expect($(select_options[1]).html()).toBe("label2");

			expect(test_select.val()).toBe("value2");
		});

	});

	describe("translate_date_for_calendar", function() {

		beforeEach(function(){
			this.helper = Handlebars.helpers.translate_date_for_calendar;
		})

		it("returns blank string if blank string passed or undefined", function() {
		  
			var transformed_date = this.helper(undefined);
			expect(transformed_date).toBe("");

			var transformed_date = this.helper("");
			expect(transformed_date).toBe("");

		});

		it("translates any Xdate parseable date to yyyy-MM-dd format", function() {
			
			var date = "18/05/1984";
			var transformed_date = this.helper(date);
			expect(transformed_date.toString()).toBe("1984-05-18");

		});

	});

	describe("toJSON", function() {
		
		beforeEach(function(){
			this.helper = Handlebars.helpers.toJSON;			
		});

		it("transforms an object into a json string", function() {
			
			var object = {key:"value"};
			var json = this.helper(object);

			expect(json.string).toEqual("{\"key\":\"value\"}");

		});

	});

});