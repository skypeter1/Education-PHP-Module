var GeneralErrorView = BaseView.extend({
	
	tagName: "div",
	
	className: "modal",
	
	template:"error/modal",
	
	events: {
		"click a.retry":"retry"
	},
	
	initialize: function(options)
	{
		BaseView.prototype.initialize.call(this, options);
		
		var template = '<div class="modal" id="myModal">'+
		  '<div class="modal-header">'+
		    '<h3>{{statusText}} {{status}}</h3>'+
		  '</div>'+
		  '<div class="modal-body">'+
		    '{{responseText}}'+
		  '</div>'+
		  '<div class="modal-footer">'+
		    '<a href="#" class="retry btn btn-primary">{{button_label}}</a>'+	
		  '</div>'+
		'</div>';
		var template_proxy = new TemplateProxy();
		template_proxy.set_template(this.template, template);	
	},
	
	render: function()
	{
		$(this.el).modal({backdrop:"static", keyboard:false});
		BaseView.prototype.render.call(this);
	},
	
	render_template: function()
	{
		BaseView.prototype.render_template.call(this);
		var body = $(this.el).find(".modal-body");
		var html = body.text();
		body.html(html);
	},
	
	retry_function: function(){},
	
	retry: function(event)
	{
		$(this.el).empty();
		$(this.el).modal("hide");
		event.preventDefault();
		this.retry_function();
	}
});
