var TableFooter = BaseView.extend({
	
	template:"public/templates/table_footer.html",
	
	events:{
		"click a.limit":"limit"
	},
	
	limit: function(event)
	{
		event.preventDefault();
		var limit = $(event.currentTarget).attr("data"); 
		this.trigger("table:limit", limit);
		this.set_status(limit);
	},
	
	set_status: function(status)
	{
		this.status = status;
		this.switch_status();
	},
	
	render_template: function()
	{
		BaseView.prototype.render_template.call(this);
		this.switch_status();
		this.show_active_options();
	},
	
	switch_status: function()
	{
		if($(this.el).children() === 0) return;
		
		$(this.el).find(".active").removeClass("active");
		$(this.el).find("[data='"+this.status+"']").parent().addClass("active");
	},
	
	set_number_of_entries: function(number)
	{
		this.template_values.number_of_entries = number;
		this.template_values.show_label = "";
		if(number > 50)
					this.template_values.show_label = "Mostrar:";
	},
	
	show_active_options: function()
	{
		var number_of_entries = this.template_values.number_of_entries;
		var options = $(this.el).find("[data]");
		
		$.each(options, $.proxy(function(index, option){
			
			if($(options[index-1]).attr("data") < number_of_entries)
			{
				$(options[index-1]).parent().removeClass("hidden");
				$(option).parent().removeClass("hidden");
			}
			
		}, this));
	}
	
});
