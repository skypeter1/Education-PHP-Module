var NominaSearchForm = SearchForm.extend({

  template: "public/templates/nomina_form.html",

  events:_.extend({
    "click .export_csv": "export_csv_event",
    "keyup input[name='search']": "filter_data"
  }, BaseForm.prototype.events),
    
  submit: function ()
  {
    var values = this.get_values();
   
    if (values.fecha_desde && values.fecha_hasta){
        this.trigger("submit", values);
        this.set_status(values.search);
    }else{
        alert ("Por favor ingrese un rango de fechas..");
    }    
        
  },

  export_csv_event: function(event){
    event.preventDefault();
    var values = this.get_values();
      
    if (values.fecha_desde && values.fecha_hasta){
        values.export_to_csv = 1;
 
        var form_export = $(this.el).parent().find('#nomina_export'),
          input_profesor = $(this.el).parent().find('#nomina_export_profesor'),
          input_identificador = $(this.el).parent().find('#nomina_export_identificador'),
          input_fecha_desde = $(this.el).parent().find('#nomina_export_fecha_desde'),
          input_fecha_hasta = $(this.el).parent().find('#nomina_export_fecha_hasta'),
          input_search = $(this.el).parent().find('#nomina_export_search'),
          input_detailed = $(this.el).parent().find('#nomina_export_detailed'),
          input_export_to_csv = $(this.el).parent().find('#nomina_export_export_to_csv');

        input_profesor.val(values.profesor);
        input_identificador.val(values.identificador);
        input_fecha_desde.val(values.fecha_desde);
        input_fecha_hasta.val(values.fecha_hasta);
        input_search.val(values.search);
        input_detailed.val(values.detailed);
        input_export_to_csv.val(values.export_to_csv);

        form_export.submit();
    }else{
        alert ("Por favor ingrese un rango de fechas.."); 
    }

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
