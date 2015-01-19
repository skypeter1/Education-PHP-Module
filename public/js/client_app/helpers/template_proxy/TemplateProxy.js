var TemplateProxy;

(function(){
	
    var cache = {};
	
	TemplateProxy = function()
	{
		this.bus = EventBus;
	};
	
	_.extend(TemplateProxy.prototype, Backbone.Events);
	
	TemplateProxy.prototype.get = function(path)
	{
		var url = path;
		
		if(document.help_vars)
			url = document.help_vars.base_url+path;
		
		if(cache[path])
			return emit.call(this, path, cache[path]);
		
        new AppRequest({
			type:"GET",
			dataType:"text",
			url:url,	
			cache:false,
			success: $.proxy(success, this, path)
		});
	};
	
	TemplateProxy.prototype.set_template = function(path, template)
	{
		cache[path] = template;
	};
	
	function success(path, response)
	{
		cache[path] = response;
		emit.call(this, path, response);
	}
	
	function emit(path, template)
	{
		this.bus.trigger("template:"+path+":complete", template);
		this.trigger("template:"+path+":complete", template);		
	}
	
})();
