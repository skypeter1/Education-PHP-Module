(function($){  
	$.fn.swap_list = function() {  

		var left_select = this[0];
		var right_select = this[1];

		var SwapList = function(left_select, right_select)
		{
			this.left_select = left_select;
			this.right_select = right_select;
			this.create_buttons();
			this.set_up_events();
		};

		SwapList.prototype = {

			set_up_events: function()
			{
				$(this.right_select).delegate("option", "dblclick", $.proxy(right_to_left, this));
				$(this.left_select).delegate("option", "dblclick", $.proxy(left_to_right, this));

				this.buttons_container.find("a.left_to_right").on("click", $.proxy(left_to_right, this));
				this.buttons_container.find("a.right_to_left").on("click", $.proxy(right_to_left, this));
			},

			create_buttons: function()
			{
				this.buttons_container = $("<div class='switch_buttons'><a href='#' class='left_to_right icon-forward'></a><a href='#' class='right_to_left icon-backward'></a></div>");
				$(this.left_select).after(this.buttons_container);
			}
		};

		function left_to_right(event)
		{
			event.preventDefault();
			move_to_target(this.right_select, this.left_select);
		}

		function right_to_left(event)
		{
			event.preventDefault();
			move_to_target(this.left_select, this.right_select);
		}

		function move_to_target(target, origin)
		{
			var target_options = get_target_option_values(target);
			var options_to_move = $(origin).find("option:selected").filter(function(index, option){
				return ($.inArray($(option).val(), target_options) == -1);
			});

			check_for_repeated_options(target, origin);

			options_to_move.appendTo(target);
		}

		function check_for_repeated_options(target, origin)
		{
			var target_options = get_target_option_values(target);
			var repeated_options = $(origin).find("option:selected").filter(function(index, option){
				return ($.inArray($(option).val(), target_options) != -1);
			});

			var repeated_labels = [];

			$.each(repeated_options, function(index, option){
				repeated_labels.push($(option).html());
			});

			if(repeated_labels.length > 0) EventBus.trigger("swap_list:repeated:values", repeated_labels);
		}

		function get_target_options(target)
		{
			return $(target).find("option");
		}

		function get_target_option_values(target)
		{
			var values = [];
			$.each(get_target_options(target), function(index, option){
				values.push($(option).val());
			});

			return values;
		}

		return new SwapList(left_select, right_select);

	};  
})(jQuery); 