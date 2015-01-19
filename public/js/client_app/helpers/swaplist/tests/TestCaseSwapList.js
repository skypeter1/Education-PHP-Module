describe("SwapList", function() {
	

	beforeEach(function(){

		setFixtures("<select class='multiple select1' multiple='multiple'></select><select class='multiple select2' multiple='multiple'></select>");
		this.left_select = $(".select1")[0];
		this.right_select = $(".select2")[0];

		$("<option value='1'></option><option value='2'></option>").appendTo(this.left_select);
		$("<option value='3'></option><option value='4'></option>").appendTo(this.right_select);

	});

	it("returns a swap_list object with left_select and right select as expected", function(){

		var swap_list = $(".multiple").swap_list();

		expect(swap_list.left_select).toBe(this.left_select);
		expect(swap_list.right_select).toBe(this.right_select);

	});

	it("swaps from right select to left on double click", function(){

		var swap_list = $(".multiple").swap_list();
		var option = $("select option[value='4']");

		var option_parent = get_parent(option);
		expect(option_parent).toBe(this.right_select);

		double_click_option(option);

		option_parent = get_parent(option);
		expect(option_parent).toBe(this.left_select);

	});

	it("swaps from left select to right on double click", function(){

		var swap_list = $(".multiple").swap_list();
		var option = $("select option[value='1']");
		
		var option_parent = get_parent(option);
		expect(option_parent).toBe(this.left_select);

		double_click_option(option);

		option_parent = get_parent(option);
		expect(option_parent).toBe(this.right_select);
	});

	it("creates buttons to move multiple options to one select to another", function(){

		var swap_list = $(".multiple").swap_list();
		$(this.left_select).find("option").attr("selected", "selected");
		$("a.left_to_right").trigger("click");

		expect(get_parent($("option[value='1']"))).toBe(this.right_select);
		expect(get_parent($("option[value='2']"))).toBe(this.right_select);

		$("a.right_to_left").trigger("click");

		expect(get_parent($("option[value='1']"))).toBe(this.left_select);
		expect(get_parent($("option[value='2']"))).toBe(this.left_select);

	});

	it("don't swap if option already exists in left_select", function() {

		var swap_list = $(".multiple").swap_list();
		$("<option value='2'>repeated value</option>").appendTo(this.right_select);

		var repeated_values;
		EventBus.on("swap_list:repeated:values", function(values){
			repeated_values = values;
		});

		$(this.right_select).find("option").attr("selected", "selected");
		$("a.right_to_left").trigger("click");

		expect(repeated_values).toEqual(["repeated value"]);

		expect($(this.right_select).find("option").length).toBe(1);
		expect($(this.right_select).find("option").val()).toBe("2");

		$(this.right_select).find("option").trigger("dblclick");

		expect($(this.right_select).find("option").length).toBe(1);
		expect($(this.right_select).find("option").val()).toBe("2");

	});

	it("don't swap if option already exists in right_select", function() {

		var swap_list = $(".multiple").swap_list();
		$("<option value='4'>repeated option 2</option>").appendTo(this.left_select);

		var repeated_values;
		EventBus.on("swap_list:repeated:values", function(values){
			repeated_values = values;
		});

		$(this.left_select).find("option").attr("selected", "selected");
		$("a.left_to_right").trigger("click");

		expect(repeated_values).toEqual(["repeated option 2"]);

		expect($(this.left_select).find("option").length).toBe(1);
		expect($(this.left_select).find("option").val()).toBe("4");

		$(this.left_select).find("option").trigger("dblclick");

		expect($(this.left_select).find("option").length).toBe(1);
		expect($(this.left_select).find("option").val()).toBe("4");

	});

	function get_parent(element)
	{
		return $(element).parent("select")[0];
	}

	function double_click_option(option)
	{
		$(option).attr("selected", "selected");
		$(option).trigger("dblclick");
	}

});