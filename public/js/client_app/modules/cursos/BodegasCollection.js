var BodegasCollection = BaseCollection.extend({

	initialize: function()
	{
		BaseCollection.prototype.initialize.call(this);
		this.namespace = "cursos";
	},

	fetch: function(options) 
	{
		if(options === undefined) options = {};

		options.alternate_url = "get_bodegas";
		BaseCollection.prototype.fetch.call(this, options);
	}

});