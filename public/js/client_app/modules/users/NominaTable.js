var NominaTable = TableView.extend({

  template: 'public/templates/nomina_table.html',

  initialize: function ()
  {
    TableView.prototype.initialize.call(this);

    this.controls.add_permission(false);
    this.footer.add_permission(false);

    this.search_form.off('submit');

    this.search_form.on('submit', $.proxy(function (search) {
      this.collection.remove_filter('fecha_desde');
      if (search.fecha_desde !== undefined && search.fecha_desde !== '')
        this.collection.add_filter('fecha_desde', search.fecha_desde, 'EQUALS');

      this.collection.remove_filter('fecha_hasta');
      if (search.fecha_hasta !== undefined && search.fecha_hasta !== '')
        this.collection.add_filter('fecha_hasta', search.fecha_hasta, 'EQUALS');

      this.collection.remove_filter('identificador');
      if (search.identificador !== undefined && search.identificador !== '') {
        this.collection.add_filter('identificador', search.identificador, 'LIKE');
        this.collection.add_filter('identificador', search.identificador, 'LIKE');
      }

      this.collection.remove_filter('profesor');
      if (search.profesor && search.profesor !== '')
        this.collection.add_filter('profesor', search.profesor, 'EQUALS');

      this.collection.remove_filter('detailed');
      this.collection.add_filter('detailed', search.detailed, 'EQUALS');

      this.collection.remove_filter('export_to_csv');
      this.collection.add_filter('export_to_csv', search.export_to_csv, 'EQUALS');

      this.collection.fetch_nomina();
    }, this));
  },

  set_up_controls: function (options) {
    var control_values = {};
    if (options && options.control_values)
      control_values = options.control_values;

    this.controls = new TableControls({values: control_values});
    this.search_form = new NominaSearchForm();
    this.footer = new TableFooter();
  }

});
