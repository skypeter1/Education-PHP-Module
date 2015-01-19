var BaseRouter = Backbone.Router.extend({

	bus:EventBus,
	
	routes: {"":""},
	
	create_namespaced_route: function(route, event_name, namespace)
	{
		this.route(route, event_name, $.proxy(function(){
			var args = Array.prototype.slice.call(arguments);
		    args.unshift(event_name);
			this.bus.trigger.apply(this.bus, args);
			this.bus.trigger(namespace+":section");
		},this));
	},
	
	create_crud_for: function(namespace)
	{
		this.create_namespaced_route(namespace, namespace+":route:index", namespace);
		this.create_namespaced_route(namespace+"/new", namespace+":route:new", namespace);
		this.create_namespaced_route(namespace+"/edit/:id", namespace+":route:edit", namespace);
		this.create_namespaced_route(namespace+"/show/:id", namespace+":route:show", namespace);
	}
	
});
