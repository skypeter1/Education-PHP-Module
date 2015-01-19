var SesionesTable = TableView.extend({

  template: 'public/templates/sesiones_table.html',

  initialize: function ()
  { 
    this.collection.add_filter('estado', 0, 'EQUALS');      
      
    var options = {};
    options.control_values  = {"label":"Nueva sesion", "url":"#sesiones/new"};
    TableView.prototype.initialize.call(this, options);
 
    this.controls.add_permission(false); 
    this.search_form.off('submit');
    this.search_form.on('submit', $.proxy(function (search) {
        
          
      var values = this.search_form.get_values(); 

      this.collection.remove_filter('estado');
      this.collection.remove_filter('pagado'); 
      
      
     if ( parseInt(values.estado_off) === 0 && values.estado_on == 1 && values.pagado_on == 1 ) {
         this.collection.add_filter('estado', 1, 'EQUALS');    
      }else if ( parseInt(values.estado_off) === 1 && values.estado_on == 1 ) {
         this.collection.remove_filter('estado');
         this.collection.remove_filter('pagado'); 
  
       }else if ( parseInt(values.estado_off) === 1 && values.estado_on !== 1 ) {
        this.collection.add_filter('estado', 0, 'EQUALS');
      }
      else if ( parseInt(values.estado_on) === 1 && values.estado_off !== 1 ) {
        this.collection.add_filter('estado', 1, 'EQUALS');
      }
 
      if ( parseInt(values.pagado_on) === 1 ) {
        this.collection.add_filter('pagado', 1, 'EQUALS');
      }

      this.collection.fetch_sessions();

    }, this));
    
           
  },   
  
  set_up_controls: function (options) {
      
    var control_values = {};
    if (options && options.control_values)
      control_values = options.control_values;

    this.controls = new TableControls();
    this.search_form = new SesionesSearchForm({values: control_values});
    this.footer = new TableFooter();
  }

});
