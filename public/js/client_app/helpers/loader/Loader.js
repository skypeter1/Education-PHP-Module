var Loader;
(function(){
	
    var current_requests = 0;

	Loader = function()
	{
		this.bus = EventBus;
		this.element = $("<span id='app_loader' class='label label-warning' style='display:none;position:absolute;z-index:9999'>Cargando...</span>");
		this.element.appendTo($(document.body));
		
		this.bus.on("request:started", $.proxy(this.start_loader, this));
		
		this.bus.on("request:finished", $.proxy(this.stop_loader, this));
		
		this.set_position();
		
		$(window).on("scroll", $.proxy(function(){this.set_position();}, this));
		$(window).on("resize", $.proxy(function(){this.set_position();}, this));	
	};
	
	Loader.prototype.start_loader = function()
	{
		this.element.css("display", "block");
		current_requests++;
	};
	
	Loader.prototype.stop_loader = function()
	{
		current_requests--;
		if(current_requests === 0 || current_requests < 0)
		{
			current_requests = 0;
			this.element.css("display", "none");
		}
			
	};
	
	Loader.prototype.set_position = function()
	{
		var window_width = $(window).width();
		var element_width = this.element.width();
		
		var center_position = (window_width / 2) - (element_width / 2);
		
		var scroll_top = $(window).scrollTop();
		this.element.css("left", center_position);
		this.element.css("top", scroll_top);
	};
	
}.call(this));
