var NotasCollection = BaseCollection.extend({

	initialize: function()
	{
		BaseCollection.prototype.initialize.call(this);
		this.namespace = "examenes";
	},

	fetch: function(examen) 
	{
		if(this.can("search"))
		{
			var options = {};
			options.success = $.proxy(this.fetch_success, this);
			options.alternate_url = "get_notas";
			options.data = {data:JSON.stringify({examen:examen})};
			Backbone.Collection.prototype.fetch.call(this, options);
		}
		else
			this.bus.trigger("authorization:error");
	}
	
});