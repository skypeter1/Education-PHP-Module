var Pago = BaseModel.extend({
	
        initialize: function(attributes)
	{
		BaseModel.prototype.initialize.call(this, attributes);
		this.namespace = "sesiones";
	}, 
           
	save_pagos: function(pagos)
	{
		if(this.can("create"))
		{
			var options = {success: $.proxy(this.success_callback, this, "save")};

			options.alternate_url = "save_pagos";

			this.transform_output_data();
			Backbone.Model.prototype.save.call(this, pagos, options);
		}
		else
			this.bus.trigger("authorization:error");
	} 

});