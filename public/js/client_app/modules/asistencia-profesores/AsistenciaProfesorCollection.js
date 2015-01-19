var AsistenciaProfesorCollection = BaseCollection.extend({

	initialize: function()
	{
		BaseCollection.prototype.initialize.call(this);
		this.namespace = "sesiones";
	},

	fetch: function(profesor) 
	{
		if(this.can("search"))
		{
			var options = {};
			options.success = $.proxy(this.fetch_success, this);
			options.alternate_url = "get_asistencia_profesores";
			options.data = {data:JSON.stringify({profesor:profesor})};
			Backbone.Collection.prototype.fetch.call(this, options);
		}
		else
			this.bus.trigger("authorization:error");
	}

});