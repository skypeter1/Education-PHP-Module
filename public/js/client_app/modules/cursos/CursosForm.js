var CursosForm = BaseForm.extend({

  template:"public/templates/cursos_form.html",

  events: _.extend({

    "click .select_profesor" : "select_profesor_event",
    "change #producto_pac_field" : "producto_pac_changed_event"

  }, BaseForm.prototype.events),

  initialize: function(options)
  {
    BaseForm.prototype.initialize.call(this, options);
    this.resubscribe_template_event();
    this.template_helpers.can_modify_hours = true;
  },

  producto_pac_changed_event: function(event)
  {
    var value = $("#producto_pac_field").val();
    var label = $("#producto_pac_field option[value='"+value+"']").text();

    var labels = label.split(" - ");

    label = "";
    if(labels.length == 2)
      label = labels[0];

    $("input[name='sucursal']").val(label);
  },

  select_profesor_event: function(event)
  {
    event.preventDefault();
    this.select_profesor();
  },

  select_profesor: function() 
  {
    this.trigger("select:profesor");
  },

  set_pac_products: function(products)
  {
    var transformed = [];

    $.each(products, function(index, object){

      transformed[index] = {label:object.nombre_bodega+" - "+object.nombre, value:object.id+"-"+object.id_bodega};

    });

    this.template_helpers.pac_products = transformed;
  },

  set_values: function(values)
  {
    this.template_values = values; 
  },

  set_bodegas: function(bodegas)
  {
    this.template_helpers.bodegas = this.to_select_options(bodegas);
  },

  set_profesores: function(profesores)
  {

    var transformed = [];

    $.each(profesores, function(index, object){

      transformed[index] = {label:object.name, value:object.id};

    });

    this.template_helpers.profesores = transformed;
  },

  to_select_options: function(collection)
  {
    var transformed = [];

    $.each(collection, function(index, object){

      transformed[index] = {label:object.nombre, value:object.id};

    });

    return transformed;
  },

  render_template: function()
  {
    var estado_options = [];
    estado_options.push({label:"Prematricula", value:'Prematricula'});		
    estado_options.push({label:"Cursando", value:'Cursando'});		
    estado_options.push({label:"Terminado", value:'Terminado'});		

    this.template_values.is_admin = auth.check(["Administrador"]);
    this.template_values.is_admin_director = auth.check(["Director"]);
 
    this.template_helpers.estados = estado_options;

    BaseForm.prototype.render_template.call(this);
    this.template_helpers.can_modify_hours = true;
  }

});
