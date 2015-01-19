Handlebars.registerHelper('draw_select_options', function(options, option_selected) {

    var result = "";
    $.each(options, function(index, option){
        var selected = "";
        if(option_selected == option.value) selected = 'selected="selected"';
        result += '<option '+selected+' value="'+option.value+'">'+option.label+'</option>';
    });
    return new Handlebars.SafeString(result);
});


Handlebars.registerHelper('translate_date_for_calendar', function(date) {

    if(date === undefined || date == "") return "";

	var date = new XDate(date);

	var result = date.toString("yyyy-MM-dd");
	
    return new Handlebars.SafeString(result);
});

Handlebars.registerHelper("object_each", function(obj, fn) {
    var buffer = "",
        key;
 
    for (key in obj) {
        if (obj.hasOwnProperty(key)) {
            buffer += fn({key: key, value: obj[key]});
        }
    }
 
    return buffer;
});

Handlebars.registerHelper('draw_checked', function(current_id, values_to_check) {

    var result = "";

    if($.inArray(current_id, values_to_check) != -1)
    {
        result = "checked='checked'";
    }

    return new Handlebars.SafeString(result);
});

Handlebars.registerHelper('timestamp_to_string', function(timestamp) {

    if(timestamp === undefined || timestamp == "") return "";

    var date = new XDate(timestamp*1000);

    var result = date.toString("dd/MM/yyyy");

    return new Handlebars.SafeString(result);
});

Handlebars.registerHelper('toJSON', function(object) {

    var result = JSON.stringify(object);
    
    return new Handlebars.SafeString(result);
});

Handlebars.registerHelper('get_notas_class', function(nota) {

    var css = "label-important";
    if(nota <= 80 && nota >= 60) css = "label-warning";
    if(nota >= 80) css = "label-success";
    return new Handlebars.SafeString(css);
});

Handlebars.registerHelper('compare', function(lvalue, rvalue, options) {

    if (arguments.length < 3)
        throw new Error("Handlerbars Helper 'compare' needs 2 parameters");

    operator = options.hash.operator || "==";

    var operators = {
        '==':       function(l,r) { return l == r; },
        '===':      function(l,r) { return l === r; },
        '!=':       function(l,r) { return l != r; },
        '<':        function(l,r) { return l < r; },
        '>':        function(l,r) { return l > r; },
        '<=':       function(l,r) { return l <= r; },
        '>=':       function(l,r) { return l >= r; },
        'typeof':   function(l,r) { return typeof l == r; }
    }

    if (!operators[operator])
        throw new Error("Handlerbars Helper 'compare' doesn't know the operator "+operator);

    var result = operators[operator](lvalue,rvalue);

    if( result ) {
        return options.fn(this);
    } else {
        return options.inverse(this);
    }

});
