var Rol = BaseModel.extend({

	initialize: function(options)
	{
		BaseModel.prototype.initialize.call(this, options);
		this.namespace = "roles";
	}

});
