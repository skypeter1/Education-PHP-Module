var BaseListView = BaseView.extend({
	
	render_template: function()
	{
		this.template_values.collection = this.collection.toJSON();
		BaseView.prototype.render_template.call(this);
	}

});