$.tools.validator.addEffect("custom", function(errors, event) {
 
	$.each(errors, function(index, error) {

		var container = $(error.input).parents(".control-group");
		container.find("span.help-inline").remove();
		
		/*$.each(error.messages, function(index, message){
			$("<span class='help-inline'>"+message+"</span>").appendTo(container);
		})*/

	});
 
// the effect does nothing when all inputs are valid
}, function(inputs)  {
 
	$.each(inputs, function(index, input){
		var container = $(input).parents(".control-group");
		container.find("span.help-inline").remove();
	})

});