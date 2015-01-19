var PacClientsCollection = BaseCollection.extend({

	initialize: function()
	{
		BaseCollection.prototype.initialize.call(this);
		this.namespace = "alumnos";
	},

	fetch: function(options) 
	{
		if(options === undefined) options = {};

		options.alternate_url = "get_pac_clients";
		BaseCollection.prototype.fetch.call(this, options);
	}

});