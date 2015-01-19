var User = BaseModel.extend({

	initialize: function(options)
	{
		BaseModel.prototype.initialize.call(this, options);
		this.namespace = "users";
	}

});