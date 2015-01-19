var BaseController;
(function(){

    var container_id = "main_container";

    BaseController = function(router)
	{
		this.router = router;
		this.container = $("#"+container_id);
		this.bus = EventBus;
		this.modal_mode = false;
		this.modal_id = "modal_"+Math.floor((Math.random()*1000000)+1); 
		this.modal_container = $("<div id="+this.modal_id+" class='modal custom-modal' data-dynamic='true'><button type='button' class='close' data-dismiss='modal' aria-hidden='true'>&times;</button></div>");
	};

	BaseController.prototype.options = {
		container_id:"main_container"
	};

	BaseController.prototype.as_modal = function(as_modal)
	{
		if(as_modal === undefined)
			this.modal_mode = true;
		else
			this.modal_mode = as_modal;
	};

	BaseController.prototype.modal = function(view, modal_options, as_modal)
	{
		if(as_modal === undefined) as_modal = true;
			
		$(this.modal_container).modal(modal_options);
		ViewSwitcher.load(view, this.modal_id);
		
		view.as_modal(as_modal);
	};
	
	BaseController.prototype.close_modal = function()
	{
		$(this.modal_container).modal("hide");
	};

	BaseController.prototype.view = function(view)
	{	
		if(this.modal_mode) 
		{
			this.modal(view);
			return;
		}	
		
		if($('#'+this.modal_id))
			$('#'+this.modal_id).modal("hide");
		
		ViewSwitcher.load(view, this.container.attr('id'));
	};
	
})();
