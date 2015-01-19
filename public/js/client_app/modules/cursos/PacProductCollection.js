var PacProductCollection = BaseCollection.extend({

	initialize: function()
	{
		BaseCollection.prototype.initialize.call(this);
		this.namespace = "cursos";
	},

	fetch: function(options) 
	{
		if(options === undefined) options = {};

		options.alternate_url = "get_pac_products";
		BaseCollection.prototype.fetch.call(this, options);
	},

	fetch_for_pagos: function(options) 
	{
		if(options === undefined) options = {};

		options.alternate_url = "get_pac_products_for_pagos";
		BaseCollection.prototype.fetch.call(this, options);
	}

});