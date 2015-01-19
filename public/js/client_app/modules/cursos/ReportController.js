var ReportController;
(function(){

  ReportController = function(router)
  {
    BaseController.call(this, router);
    this.set_up_routes();
    this.set_up_collection();
    this.set_up_list();
  };

  ReportController.prototype = new BaseController();
  ReportController.prototype.constructor = ReportController;

  ReportController.prototype.index = function(){
    this.collection.fetch_report();
    this.view(this.list);
  };

  ReportController.prototype.set_up_list = function(){
    this.list = new ReportTable({collection:this.collection});
  };

  ReportController.prototype.set_up_collection = function(){
    this.collection = new CursosCollection();
    this.collection.on("fetch:success", $.proxy(function(){
      var cursos = this.collection.toJSON();
      this.list.search_form.template_values.cursos = this.collection.toJSON();
      this.list.search_form.template_values.profesores = this.get_profesores_from_cursos(cursos);
      this.list.search_form.template_values.nombres = this.get_nombres_from_cursos(cursos);
      this.list.search_form.template_values.sucursales = this.get_sucursales_from_cursos(cursos);
      this.list.search_form.template_values.horarios = this.get_horarios_from_cursos(cursos);
      this.list.render();
    }, this));
  };

  ReportController.prototype.get_horarios_from_cursos = function(cursos)
  {
    var horarios = {};
    $.each(cursos, function(index, curso){
      var value = curso.hora_inicio+","+curso.hora_fin;
      var label = curso.hora_inicio+" - "+curso.hora_fin;
      horarios[value] = label;
    });
    return horarios;
  };

  ReportController.prototype.get_sucursales_from_cursos = function(cursos)
  {
    var sucursales = {};
    $.each(cursos, function(index, curso){
      sucursales[curso.sucursal] = curso.sucursal;
    });
    return sucursales;
  };

  ReportController.prototype.get_nombres_from_cursos = function(cursos)
  {
    var nombres = {};
    $.each(cursos, function(index, curso){
      nombres[curso.nombre] = curso.nombre;
    });
    return nombres;
  };

  ReportController.prototype.get_profesores_from_cursos = function(cursos)
  {
    var profesores = {};
    $.each(cursos, function(index, curso){
      profesores[curso.profesor.id] = curso.profesor;
    });
    return profesores;
  };
  
  ReportController.prototype.set_up_routes = function(){
    this.router.create_namespaced_route("cursos-report", "cursos-report:route", "cursos-report");
    this.bus.on("cursos-report:route", $.proxy(function(){this.index();}, this));
  };

})();
