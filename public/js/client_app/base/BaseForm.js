var BaseForm = BaseView.extend({
	
	bus:EventBus,
	
	events: {
		"submit form"         : "submit_event",	
		"click a.cancel"      : "cancel_event",
		"click .save_and_new" : "save_and_new_event",
		"keyup input.masked-time" :"check_time_event"
	},
	
	initialize:function(options)
	{
		BaseView.prototype.initialize.call(this, options);
		if(options && options.namespace)
			this.namespace = options.namespace;
		
		this.no_url = false;
		this.error_view = new ErrorView();
		this.template_helpers = {};
	},

	save_and_new_event: function(event)
	{
		event.preventDefault();
		this.save_and_new();
	},
	
	check_time_event: function(event)
	{
		var input = event.currentTarget;
		var value = $(input).val();

		if(value.match(/^2[5-9].*/))
		{
			$(input).unmask();
			$(input).val("2400");
			$(input).mask("Hn:Nn");
		}	
		
	}, 

	save_and_new: function()
	{
		this.submit(true);
	},

	no_url_mode: function()
	{
		this.no_url = true;
	},
	
	cancel_event: function(event)
	{
		if(this.modal_mode || this.no_url)
		{
			event.preventDefault();
			this.trigger("cancel");
		}
	},
	
	set_values: function(values)
	{
		this.template_values = values; 
	},
	
	render_template: function()
	{
		this.template_values = _.extend(this.template_values, this.template_helpers);
		BaseView.prototype.render_template.call(this);
		$(this.el).find("[type=date]").attr("autocomplete", "off");
		$(this.el).find("[type=date]").dateinput({trigger:true, lang: "es", format:"dd/mm/yyyy", firstDay: 1, selectors: true, yearRange:[-80, 5]});
		$(this.el).find("form").validator(this.get_validator_options());
		$($(this.el).find("input, select")[0]).focus();
		$(this.el).find("select.searchable").searchable({maxMultiMatch: 500});

		var time_inputs = $(this.el).find(".masked-time");
		time_inputs.mask("Hn:Nn");
	},
	
	submit_event: function(e)
	{
		e.preventDefault();
		this.submit();
	},

	submit: function(save_and_new)
	{
		if(this.validate_form())
		{
			var values = this.get_values();
			this.bus.trigger(this.namespace+":form:submit", values, save_and_new);
			this.trigger("submit", values, save_and_new);
            return true;
		}	
	
        this.focus_first_error_field();
	},

	focus_first_error_field: function()
	{
		var error_field = $($(this.el).find("div.error")[0]);
		error_field.find("input").focus();
	},
	
	validate_form: function()
	{
		var form_validator = $(this.el).find("form").data("validator");
		return form_validator.checkValidity();
	},
	
	get_values: function()
	{
		var fields = $(this.el).find("form :not(.ignore)").serializeArray();
		fields = this.add_unchecked_checkboxes(fields);
		
        var result = {};
		
		$.each(fields, $.proxy(function(index, field){
			
			result = this.extract_field_value(field, result);

        }, this));

        result = this.add_json_fields(result);
	
		return result;
	},

	add_json_fields: function(fields) 
	{
		var json_fields = $(this.el).find("input.json");

		$.each(json_fields, $.proxy(function(index, field){
			
			fields[$(field).attr("name")] = $.parseJSON($(field).val());

		}, this));

		return fields;
	}, 

	add_unchecked_checkboxes: function(fields)
	{

		var selector = "input[type='checkbox']:not(:checked)";
		$(this.el).find(selector).each(function(index, input){

			fields.push({name:$(input).attr("name"), value:0});
			
		});

		return fields;

	},

    extract_field_value:  function(field, result) 
    {
        if(this.parse_object_format(field.name))
            return this.extract_object_value(field, result);

        result[field.name] = field.value;
        
        return result;
    },
	
	extract_object_value: function(field, result)
	{
        var matchObject = this.parse_object_format(field.name); 
		var objectName = matchObject[1];
		var keyName = matchObject[2];	
	
		if(!result[objectName])
            result[objectName] = {};
	    
        result[objectName][keyName] = field.value;
		
        return result;
	},
	
	parse_object_format: function(field_name)
	{
		return field_name.match(/(.*)\[(.*)\]/);
	},
	
	render_errors: function(errors)
	{
		this.error_view.template_values = {errors:errors};
		this.error_view.render();	
		$(this.el).before($(this.error_view.el));
	},
	
	clear_errors: function()
	{
		if(!this.error_view) return;
		this.error_view.template_values = {errors:[]};
		this.error_view.detach();
	},
	
	detach: function()
	{
		if(this.error_view)
			$(this.error_view.el).detach();
		BaseView.prototype.detach.call(this);
	},
	
	validation_fail: function(event, validations)
	{	
		$.each(validations, function(index, validation){
			$(validation.input).parents(".control-group").removeClass("success");
			$(validation.input).parents(".control-group").addClass("error");
        });
	},
	
	validation_success: function(event, validations)
	{	
		$.each(validations, function(index, input){
			$(input).parents(".control-group").removeClass("error");
			$(input).parents(".control-group").addClass("success");
        });
	},
	
	get_validator_options: function()
	{
		var validator_options = {};
		validator_options.inputEvent = "blur";
		validator_options.formEvent = null;
		validator_options.effect = 'custom';
		validator_options.lang = 'es';		
		validator_options.onFail = $.proxy(this.validation_fail, this);
		validator_options.onSuccess = $.proxy(this.validation_success, this);
		return validator_options;
	}
	
});
