var NominaController;
(function(){
    
  NominaController = function(router)
  {
    BaseController.call(this, router);
    this.set_up_cursos();
    this.set_up_profesores();   
    this.set_up_routes(); 
    this.set_up_collection();
    this.set_up_list();
  };
 
  NominaController.prototype = new BaseController();
  NominaController.prototype.constructor = NominaController;

  NominaController.prototype.index = function(){
            
    this.set_up_cursos();
    this.set_up_profesores();   
                                 
    this.collection.fetch_nomina('set_nomina');    
    this.view(this.list); 
    
    $("#profesor").val(-1); 
    $("#identificador").val(-1); 
    $("#fecha_desde_field").val(''); 
    $("#fecha_hasta_field").val('');   
       
  }; 
        
  NominaController.prototype.set_up_list = function(){
    this.list = new NominaTable({collection:this.collection});
  };

  NominaController.prototype.set_up_collection = function(){
    this.collection = new NominaCollection();
    this.collection.on("fetch:success", $.proxy(function(){
      this.list.render();
    }, this));
  };

  NominaController.prototype.set_up_cursos = function(){
    this.collection_cursos = new CursosCollection();
    this.collection_cursos.set_order('identificador', 'asc');

    this.collection_cursos.on("fetch:success", $.proxy(function(){
      this.list.search_form.template_values.cursos = this.collection_cursos.toJSON();
    }, this));

    this.collection_cursos.fetch_report();
  };

  NominaController.prototype.set_up_profesores = function(){
    var profesores = new ProfesoresCollection();
 
    profesores.set_order('name', 'asc');
    //profesores.set_limit(5000);
                    
    profesores.on("fetch:success", $.proxy(function(response) {
      this.list.search_form.template_values.profesores = this.set_profesores_ordered(response.data.list);
    }, this));

    profesores.fetch();
  };

  NominaController.prototype.set_profesores_ordered = function(profesores)
  {
    var options = [];
    $.each(profesores, $.proxy(function(index, profesor){
      options.push({id:profesor.id, name:profesor.name});
    }, this));

    return options;
  };

  NominaController.prototype.set_up_routes = function(){
    this.router.create_namespaced_route("users-nomina", "users-nomina:route", "users-nomina");
    this.bus.on("users-nomina:route", $.proxy(function(){this.index();}, this));
  };

})();
