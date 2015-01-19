var ProveedoresCollection = BaseCollection.extend({

	initialize: function()
	{
		BaseCollection.prototype.initialize.call(this);
		this.namespace = "users";
	},

	fetch: function(options) 
	{
		if(options === undefined) options = {};

		options.alternate_url = "get_proveedores";
		BaseCollection.prototype.fetch.call(this, options);
	}

});