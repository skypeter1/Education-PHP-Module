var EmptyModel = BaseModel.extend({

	initialize:function(attributes)
	{
		BaseModel.prototype.initialize.call(this, attributes);
		this.data_types = {};
		this.data_types.fecha = DateType;
	}

});