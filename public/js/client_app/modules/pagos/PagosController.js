var PagosController;
(function(){

  PagosController = function(router)
  {
    BaseController.call(this, router);
    this.set_up_routes();
    this.set_up_form();
    this.set_up_profesores();
    this.set_up_sesiones();
    this.set_up_model();
    this.set_up_bodegas();
    this.set_up_products();
  };

  PagosController.prototype = new BaseController();
  PagosController.prototype.constructor = PagosController;

  PagosController.prototype.index = function() 
  {  
    this.form.render();
    this.view(this.form);
  };

  PagosController.prototype.set_up_routes = function() 
  {
    this.router.create_namespaced_route("pagos", "pagos:route", "pagos");
    this.bus.on("pagos:route", $.proxy(function(){this.index();}, this));
  };

  PagosController.prototype.set_up_form = function() 
  {
    this.form = new PagosForm();
    this.form.on("can:render", $.proxy(function(){
      this.profesores.fetch();
    }, this));

    this.form.on("profesor:change", $.proxy(function(profesor_id){
      this.form.template_values.profesor = profesor_id;
      this.sesiones.add_filter("profesor", profesor_id, "EQUALS");
      this.sesiones.add_filter("estado", "1", "EQUALS");
      this.sesiones.add_filter("pagado", "0", "EQUALS");
      this.sesiones.fetch();

      $('#total_sessions').html(this.sesiones.length);
    }, this));

    this.form.on("bodega:change", $.proxy(function(bodega_id){

      var products = this.original_products.filter(function(product){
        return product.id_bodega == bodega_id;
      });

      this.form.set_productos(new Backbone.Collection(products).toJSON());

      this.form.template_values.bodega = bodega_id;
      this.sesiones.add_filter("bodega", bodega_id, "EQUALS");
      this.sesiones.fetch();

      $('#total_sessions').html(this.sesiones.length);
    }, this));

    this.form.on("submit", $.proxy(function(values){

      if(values.sesiones.length === 0)
        return;

      var model = new this.model();
      model.on("sesiones:save:success", $.proxy(function(model){

        var values = model.toJSON();

        delete values.sesiones;
        delete values.profesor;

        this.go_to_pac_pagos(values);

      }, this));
      model.save_pagos(values);

    }, this));

  };    

  PagosController.prototype.set_up_profesores = function()
  {
    this.profesores = new ProfesoresCollection();
    this.profesores.set_order('name', 'asc');
    //this.profesores.set_limit(5000);
    this.profesores.on("fetch:success", $.proxy(function(response){

      this.form.set_profesores(response.data.list);
      this.bodegas.fetch();

    }, this));
  };

  PagosController.prototype.set_up_sesiones = function()
  {
    this.sesiones = new SesionesCollection();

    this.sesiones.on("fetch:success", $.proxy(function(response){

      this.form.template_values = _.extend(this.form.template_values, this.form.get_values());
      this.form.template_values.sesiones = this.sesiones.toJSON();
      this.form.render_template();

      this.set_hours_total(this.form.template_values.sesiones);

    }, this));
  };

  PagosController.prototype.set_up_model = function()
  {
    this.model = Pago.extend();
  };

  PagosController.prototype.go_to_pac_pagos = function(pagos_info)
  {
    var url = document.help_vars.base_url+"../orprog/or61fr.php?ID=1172&IDB="+pagos_info.bodega_destino+"&numdoc="+pagos_info.numdoc;
    window.open(url);
    this.sesiones.fetch();
  };

  PagosController.prototype.set_up_bodegas = function()
  {
    this.bodegas = new BodegasCollection();
    this.bodegas.on("fetch:success", $.proxy(function(response){
      this.sesiones.add_filter("bodega", response.data.list[0].id, "EQUALS");
      this.current_bodega = response.data.list[0].id;
      this.products.fetch_for_pagos();
      this.form.set_bodegas(response.data.list);
    }, this));
  };

  PagosController.prototype.set_up_products = function()
  {
    this.products = new PacProductCollection();
    this.products.on("fetch:success", $.proxy(function(response){

      this.original_products = response.data.list;

      var products = new Backbone.Collection(response.data.list).filter($.proxy(function(product){
        return product.get("id_bodega") == this.current_bodega;
      }, this));

      this.form.set_productos(new Backbone.Collection(products).toJSON());
      this.form.render_template();

    }, this));
  };

  PagosController.prototype.set_hours_total = function ( models )
  {
    var date_ini = new Date(),
      date_end = new Date(),
      total_hours = 0;

    $.each(models, function(index, model){
      var h_ini = String(model.hora_inicio).split(':'),
        h_end = String(model.hora_fin).split(':');

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
  };

})();
