var Menu;
(function(){
	
	var views = [];
	
	Menu = function(container_id)
	{
		this.container = $("#"+container_id);
		this.bus = EventBus;
		this.views = [];
	};
	
	Menu.prototype.add_view = function(view, event_to_active)
	{
		if(event_to_active !== undefined)
		{
			this.bus.on(event_to_active, $.proxy(this.active_view, this, view));
		}
		
		views.push(view);
		this.views.push(view);
	};
	
	Menu.prototype.render = function()
	{
		$.each(this.views, $.proxy(function(index, view){this.render_view(view);}, this));
	};
	
	Menu.prototype.render_view = function(view)
	{
		view.render();
		view.atach(this.container);
	};
	
	Menu.prototype.unactive_all_views = function()
	{
		$.each(views, $.proxy(function(index, view){
			
			$(view.el).removeClass("active");
			
		}, this));
	};

	Menu.prototype.active_view = function(view)
	{		
		this.unactive_all_views();
		
		$(view.el).addClass("active");
	};
	
})();
