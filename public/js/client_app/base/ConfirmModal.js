var ConfirmModal = BaseView.extend({
	
	template: "public/templates/confirm_modal.html",
	
	events:{
		"click a.execute":"execute_action",
		"click a.close_modal":"close"
	},
	
	action:function(){},
	
	execute_action: function(event)
	{
		if(event)
			event.preventDefault();
		
		this.action();
		this.close(event);
	},
	
	close: function(event)
	{
		if(event)
			event.preventDefault();
			
		$(this.el).modal("hide");
	},
	
	set_action: function(action)
	{
		this.action = action;
	},
	
	confirm: function(message, action)
	{
		this.action = action;
		this.template_values.message = message;
		this.render();
		
		$(this.el).modal();
	}
	
});