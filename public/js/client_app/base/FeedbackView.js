var FeedbackView = BaseView.extend({

	template : "public/templates/feedback_view.html",

	initialize: function(options)
	{
		BaseView.prototype.initialize.call(this, options);

		$(window).on("scroll", $.proxy(function(){this.set_position();}, this));
		$(window).on("resize", $.proxy(function(){this.set_position();}, this));
		$(this.el).addClass("custom-feedback");
	},

	render_template: function()
	{
		$(this.el).fadeIn(1);
		BaseView.prototype.render_template.call(this);
		this.set_position();

		setTimeout($.proxy(function(){
			$(this.el).fadeOut();
		},this), 2000);
	},

	set_position: function()
	{
		var window_width = $(window).width();
		var element_width = $(this.el).width();
		
		var center_position = (window_width / 2) - (element_width / 2);
		
		var scroll_top = $(window).scrollTop();
		$(this.el).css("left", center_position);
		$(this.el).css("top", scroll_top+10);
	}
});