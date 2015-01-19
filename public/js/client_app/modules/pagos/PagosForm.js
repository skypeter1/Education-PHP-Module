var PagosForm = BaseForm.extend({

	template: "public/templates/pagos_form.html",

	events: _.extend({
		"change select#profesor_field": "profesor_change",
		"change select#bodega_field": "bodega_change",
		"keyup input[id='type_search_curso']": "filter_cursos",
    "change input[id='select_all']": "toggle_all_event"
	}, BaseForm.prototype.events),

	initialize: function(options)
	{
		BaseForm.prototype.initialize.call(this, {namespace:"search"});
		BaseView.prototype.initialize.call(this, options);
		this.resubscribe_template_event();
		this.template_helpers = {};
	},

	filter_cursos: function(event)
	{
    var date_ini = new Date(),
      date_end = new Date(),
      search_term = $(this.el).find("input[id='type_search_curso']").val(),
      total_hours = 0;

    $(this.el).find("[data-curso]").attr("class", "");

		var unmatched_containers = $(this.el).find("[data-curso]").filter(function(){ 
			return !new RegExp(search_term, "i").test($.trim($(this).attr("data-curso")));
		});

    var matched_containers = $(this.el).find("[data-curso]").filter(function(){
      return new RegExp(search_term, "i").test($.trim($(this).attr("data-curso")));
    });

		unmatched_containers.attr("class", "none");

    $('#total_sessions').html(matched_containers.length);

    $.each(matched_containers, function(index, item) {
      var h_ini = String($(this).find('td[data-hora-ini]').html()).split(':'),
        h_end = String($(this).find('td[data-hora-end]').html()).split(':');

      date_ini.setHours(h_ini[0]);
      date_ini.setMinutes(h_ini[1]);
      date_ini.setSeconds(0);
      date_ini.setMilliseconds(0);

      date_end.setHours(h_end[0]);
      date_end.setMinutes(h_end[1]);
      date_end.setSeconds(0);
      date_end.setMilliseconds(0);

      var diff_ms = (date_end - date_ini),
        diff_s = Math.round(diff_ms / 1000),
        diff_m = Math.round(diff_s / 60),
        diff_h = Math.round(diff_m / 60);

      total_hours += diff_h;
    });

    $('#total_hours').html(total_hours);
    $(this.el).find('#select_all').prop('checked', false);
    this.toggle_all(false);
	},

  toggle_all_event: function( event )
  {
    var check_all = $(this.el).find('#select_all');
    this.toggle_all(check_all.prop('checked'));
  },

  toggle_all: function ( checked )
  {
    var tr_visible = $('tr[data-curso]').not('.none'),
      checkboxes_all = $(this.el).find(':checkbox');

    checkboxes_all.splice(0, 1);
    checkboxes_all.prop('checked', false);

    $.each( tr_visible, function( key, value ) {
      $(this).find(':checkbox').prop('checked', checked);
    });
  },

	set_profesores: function(profesores){

		var options = [];

		$.each(profesores, $.proxy(function(index, profesor){

			options.push({value:profesor.id, label:profesor.name});

		}, this));

		this.template_values.profesores = options;
	},

	set_bodegas: function(bodegas)
	{
		var options = [];

		$.each(bodegas, $.proxy(function(index, bodega){
			options.push({value: bodega.id, label:bodega.nombre});
		}, this));

		this.template_values.bodegas = options;
	},

	bodega_change: function(event)
	{
		event.preventDefault();
		this.trigger_bodega_change();
	},  

	trigger_bodega_change: function()
	{
		var bodega_id = $(this.el).find("#bodega_field").val();
		this.trigger("bodega:change", bodega_id);
	},

	profesor_change: function(event) 
	{
		event.preventDefault();
		this.trigger_profesor_change();
	},

	trigger_profesor_change: function() 
	{
		var profesor_id = $(this.el).find("#profesor_field").val();
		this.trigger("profesor:change", profesor_id);
	},

	get_values: function()
	{
		var values = {};

		values.profesor = $(this.el).find("#profesor_field").val();
		values.producto = $(this.el).find("#product_field").val();
		values.bodega = $(this.el).find("#bodega_field").val();
		values.search = $(this.el).find("#search_field").val();
		values.sesiones = [];

		$.each($(this.el).find("input[name='sesion']:checked"), function(index, sesion_field){
			values.sesiones.push($(sesion_field).val());
		});

		return values;
	},

	set_productos: function(products)
	{
		var transformed = [];

		$.each(products, function(index, object){
			transformed[index] = {label:object.nombre_bodega+" - "+object.nombre, value:object.id+"-"+object.id_bodega};
		});

		this.template_helpers.productos = transformed;
	},

	set_status: function(search_term)
	{
	    this.search_term = search_term;
	    this.render_status();
	},

	render_status: function()
	{
	    if(this.search_term !== undefined)
	      $(this.el).find("[name='search']").val(this.search_term);
	}
});
