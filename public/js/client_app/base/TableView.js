var TableView = BaseListView.extend({
	
	events: {
		"click a.delete": "delete_event",
		"click a.order": "order_event",
		"click a.block0": "block_event",
		"click a.block1": "unblock_event",
		"click a.edit": "edit_event",
		"click a.select": "row_selected",
		"dblclick tbody tr": "row_dbl_click_event"
	}, 
	
	initialize:function(options)
	{ 
		BaseListView.prototype.initialize.call(this, options);
		this.set_up_controls(options);
		this.set_up_events();
		//this.collection.set_limit(5000);
		this.footer.set_status(50);
		this.el_container = $("<div></div>");
		$(this.el).appendTo(this.el_container);
		
		this.no_url = false;
	},
	
	row_dbl_click_event: function(event)
	{
		event.stopPropagation();	
		var edit_anchor = $(event.currentTarget).find("a.edit");
		if(edit_anchor.length == 1 && !this.no_url)
			document.location.href = edit_anchor.attr("href");
			
		if(edit_anchor.length == 1 && this.no_url)
			edit_anchor.click();
			
	},
	
	delegate_events: function()
	{
		this.delegateEvents();
		this.controls.delegate_events();
		this.footer.delegate_events();
		this.search_form.delegate_events();		
	},
	
	no_url_mode: function()
	{
		this.no_url = true;
		this.controls.no_url_mode();
	},
	
	set_up_controls: function(options)
	{
		var control_values = {};
		if(options && options.control_values)
			control_values = options.control_values;
			
		this.controls = new TableControls({values:control_values});
		this.search_form = new SearchForm();
		this.footer = new TableFooter();
	},
	
	row_selected: function(event)
	{
		event.preventDefault();
		var id = $(event.currentTarget).attr("data");
		this.trigger("ui:row:selection", this.collection.get(id));
	},
	
	edit_event:function(event)
	{
		if(this.modal_mode || this.no_url)
		{
			event.preventDefault();
			var id = $(event.currentTarget).attr("data");
			this.trigger("ui:edit", id);
		}
	},
	
	unblock_event: function(event)
	{
		event.preventDefault();
		var id = $(event.currentTarget).attr("data");
		this.trigger("ui:unblock", id);
	},
	
	block_event: function(event)
	{
		event.preventDefault();
		var id = $(event.currentTarget).attr("data");
		this.trigger("ui:block", id);
	},
	
	delete_event: function(event)
	{
		event.preventDefault();
		var id = $(event.currentTarget).attr("data");
		this.trigger("ui:delete", id);
	},
	
	order_event: function(event)
	{
		event.preventDefault();
		var property = $(event.currentTarget).attr("data");

		var order_type = "asc";
		var current_order_type = false;
		
		if(current_order_type = $(event.currentTarget).attr("order-type"))
		{
			if(current_order_type == order_type) order_type = "desc";
		}
		
		this.set_order_status(property, order_type);
		this.apply_status();
		this.trigger("ui:order", property, order_type);
	},
	
	set_order_status: function(property, order_type)
	{
		this.order = {};
		this.order.property = property;
		this.order.type = order_type;
	},
	
	apply_status: function()
	{
		if(this.order)
		{
			if(this.last_ordered)
			{
				this.last_ordered.removeClass("order-asc");
				this.last_ordered.removeClass("order-desc");
			}		
			
			var affected_element = $(this.el).find(".order[data='"+this.order.property+"']");
			affected_element.attr("order-type", this.order.type);
			affected_element.addClass("order-"+this.order.type);
			
			this.last_ordered = affected_element;
		}
	},
	
	reset_status: function()
	{
		this.collection.reset_status();
		this.search_form.set_status("");
		this.order = undefined;
	},
	
	render_template: function()
	{
		BaseListView.prototype.render_template.call(this);
		if(this.collection.status.order)
		{
			this.set_order_status(this.collection.status.order.field, this.collection.status.order.direction);
		}
		this.apply_status();
	},
	
	render: function()
	{
		BaseListView.prototype.render.call(this);
		this.controls.render();
		this.search_form.render();
		this.footer.render();
	},
	
	atach: function(container)
	{
		$(this.el_container).appendTo(container);
		
		$(this.search_form.el).prependTo($(this.el_container));
		$(this.controls.el).prependTo($(this.el_container));
		$(this.footer.el).appendTo($(this.el_container));
	},
	
	detach: function()
	{
		$(this.el_container).detach();
		this.remove_inner_elements();
	},
	
	as_modal: function(as_modal)
	{
		if(as_modal === undefined) as_modal = true;
		this.modal_mode = as_modal;
		this.controls.as_modal(as_modal);
	},
	
	set_up_events: function()
	{
		this.footer.on("table:limit", $.proxy(function(limit){
			this.collection.set_limit(limit);
			this.collection.fetch();
		},this));
		
		this.search_form.on("submit", $.proxy(function(search_term){
			this.collection.add_filter("GLOBAL", search_term, "LIKE");
			this.collection.fetch();
		}, this));
		
		this.on("ui:order", $.proxy(function(property, direction){
			$(this.el).empty();
			this.collection.set_order(property, direction);
			this.collection.fetch();
		}, this));
		
		this.collection.on("fetch:success", $.proxy(function(response){
			this.footer.set_number_of_entries(response.data.number_of_entries);
		}, this));
		
		this.controls.on("ui:refresh", $.proxy(function(response){
			this.trigger("ui:refresh");
		}, this));
		
		this.controls.on("ui:new", $.proxy(function(response){
			this.trigger("ui:new");
		}, this));
	}
});
