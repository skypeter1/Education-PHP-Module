var ReportTable = TableView.extend({

  template:"public/templates/report_cursos_table.html",

  initialize: function()
  {
    TableView.prototype.initialize.call(this);
    
    this.controls.add_permission(false);
    this.footer.add_permission(false);

    this.off("ui:order");
    this.on("ui:order", $.proxy(function(property, direction){
      $(this.el).empty();
      this.collection.set_order(property, direction);
      this.collection.fetch_report();
    }, this));
    
    this.search_form.off("submit");
    this.search_form.on("submit", $.proxy(function(search){

      this.collection.remove_filter("identificador");
      if(search.identificador !== undefined && search.identificador !== "")
        this.collection.add_filter("identificador", search.identificador, "EQUALS");

      this.collection.remove_filter("mes");
      if(search.mes && search.mes !== "")
        this.collection.add_filter("mes", search.mes, "EQUALS");

      this.collection.remove_filter("profesor");
      if(search.profesor && search.profesor !== "")
        this.collection.add_filter("profesor", search.profesor, "EQUALS");

      this.collection.remove_filter("nombre");
      if(search.nombre && search.nombre !== "")
        this.collection.add_filter("nombre", search.nombre, "EQUALS");

      this.collection.remove_filter("sucursal");
      if(search.sucursal && search.sucursal !== "")
        this.collection.add_filter("sucursal", search.sucursal, "EQUALS");

      this.collection.remove_filter("estado");
      if(search.estado && search.estado !== "")
        this.collection.add_filter("estado", search.estado, "EQUALS");

      this.filter_horario(search); 

      this.collection.add_filter("GLOBAL", search.search, "LIKE");
      this.collection.fetch_report();

    }, this));
  },

  filter_horario: function(search)
  {
      this.collection.remove_filter("hora_inicio");
      this.collection.remove_filter("hora_fin");

      if(search.horario && search.horario !== "")
      {
        var inicio_fin = search.horario.split(",");
        this.collection.add_filter("hora_inicio", inicio_fin[0], "EQUALS");
        this.collection.add_filter("hora_fin", inicio_fin[1], "EQUALS");
      }
  },

  set_up_controls: function(options)
  {
    var control_values = {};
    if(options && options.control_values)
      control_values = options.control_values;

    this.controls = new TableControls({values:control_values});
    this.search_form = new ReportSearchForm();
    this.footer = new TableFooter();
  }

});
