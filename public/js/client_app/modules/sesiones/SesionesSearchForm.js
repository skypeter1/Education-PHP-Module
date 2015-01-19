var SesionesSearchForm = SearchForm.extend({

  template: "public/templates/sesiones_search_form.html",

  events:_.extend({
    "click .estado_off": "set_estado_off",
    "click .estado_on": "set_estado_on",
    "click .pagado_on": "set_pagado_on",
    "keyup input[name='search']": "filter_data"
  }, BaseForm.prototype.events),

  initialize: function(options)
  {
    SearchForm.prototype.initialize.call(this, options);

    if ( this.template_values.can_create === undefined )
    {
      this.template_values.can_create = true;
    }

    this.template_values.label = options.values.label;
    this.template_values.url = options.values.url;

    this.no_url = false;
  },

  set_estado_off: function ( event )
  {
    var input = $(this.el).find("input[name='estado_off']"),
      icon = $(this.el).find("i[data-icon='estado_off']"),
      value = parseInt(input.val()) ? false : true;

    input.val( value ? 1 : 0 );
    icon.attr('class', ( value ? 'icon-ok-circle' : 'icon-remove-circle' ) + ' icon-white');
  },

  set_estado_on: function ( event )
  {
    var input = $(this.el).find("input[name='estado_on']"),
      icon = $(this.el).find("i[data-icon='estado_on']"),
      value = parseInt(input.val()) ? false : true;

    input.val( value ? 1 : 0 );
    icon.attr('class', ( value ? 'icon-ok-circle' : 'icon-remove-circle' ) + ' icon-white');
  },

  set_pagado_on: function ( event )
  {
    var input = $(this.el).find("input[name='pagado_on']"),
      icon = $(this.el).find("i[data-icon='pagado_on']"),
      value = parseInt(input.val()) ? false : true;

    input.val( value ? 1 : 0 );
    icon.attr('class', ( value ? 'icon-ok-circle' : 'icon-remove-circle' ) + ' icon-white');
  },

  filter_data: function(event)
  {
    var search_term = $(this.el).find("input[name='search']").val();

    $(this.el).parent().find("[data-entry]").attr('class', '');

    var unmatched_containers = $(this.el).parent().find("[data-entry]").filter(function(){
      return !new RegExp(search_term, "i").test($.trim($(this).attr("data-entry")));
    });

    unmatched_containers.attr("class", "none");
  }

});
