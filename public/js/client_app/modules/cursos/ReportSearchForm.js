var ReportSearchForm = SearchForm.extend({
	
	template:"public/templates/report_search_form.html",
	
	submit: function()
	{
		var values = this.get_values();

		this.trigger("submit", values);
		this.set_status(values.search);
	}
	
});
