var TableControls = BaseView.extend({
	
	template:"public/templates/table_controls.html",
	
	className:"table_controls_container",
	
	events:{
		"click button.refresh":"refresh",
		"click a.new":"new_event"
	},
	
	initialize: function(options)
	{
		BaseView.prototype.initialize.call(this, options);
		if(this.template_values.can_create === undefined)
		{
			this.template_values.can_create = true;
		}
		
		this.no_url = false;
	},
	
	no_url_mode: function()
	{
		this.no_url = true;
	},
	
	refresh: function(event)
	{
		event.preventDefault();
		this.trigger("ui:refresh");
	},
	
	new_event: function(event)
	{
		if(this.modal_mode || this.no_url)
		{
			event.preventDefault();
			this.trigger("ui:new");
		}
	}
	
});
