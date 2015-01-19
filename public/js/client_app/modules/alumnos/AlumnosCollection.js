var AlumnosCollection = BaseCollection.extend({

	initialize: function()
	{
		BaseCollection.prototype.initialize.call(this);
		this.namespace = "alumnos";
	}
});