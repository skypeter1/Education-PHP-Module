var UsersForm = BaseForm.extend({

	template:"public/templates/users_form.html",

	events: _.extend({
		"change #proveedor_pac_field": "proveedor_change"
	}, BaseForm.prototype.events),

	proveedor_change: function(e)
	{
		var name = $(this.el).find("#proveedor_pac_field option:selected").text();
		$(this.el).find("#name_field").val(name);
	},

	initialize: function(options)
	{
		BaseForm.prototype.initialize.call(this, options);
		this.resubscribe_template_event();
	},

	set_proveedores: function(proveedores)
	{
		var transformed = [];
		$.each(proveedores, function(index, proveedor){
			transformed.push({value:proveedor.id, label:proveedor.nombre});
		});

		this.template_values.proveedores = transformed;
	},

	get_values: function()
	{
		var result = BaseForm.prototype.get_values.call(this);
		delete result["retype-password"];

		return result;
	}

});