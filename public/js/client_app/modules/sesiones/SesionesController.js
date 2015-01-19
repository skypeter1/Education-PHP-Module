var SesionesController;
(function(){

  SesionesController = function(router)
  {
    
      
    CrudController.call(this, "sesiones", router);
    this.set_auth_namespace("Sesion::");

    this.form.on("can:render", $.proxy(function(){
      this.profesores.fetch();
    }, this));

    this.set_up_profesores();
    this.set_up_alumnos();
    this.set_up_asistencias_form();
    this.subscribe_to_custom_routes();
    this.set_up_asistencias();

    this.set_up_cursos_modal_selection();
    this.set_up_profesores_modal();
    this.set_up_events();
  };

  SesionesController.prototype = new CrudController();
  SesionesController.constructor = SesionesController;
  SesionesController.prototype = _.extend(SesionesController.prototype, CursosModalSelection);
  SesionesController.prototype = _.extend(SesionesController.prototype, ProfesoresModalSelectable);

  SesionesController.prototype.index = function()
  {
    if(document.help_vars.current_user.rol == "profesor"){
      this.list.search_form.set_status(document.help_vars.current_user.name);
      this.list.collection.add_filter("GLOBAL", document.help_vars.current_user.name, "LIKE");
    }
    CrudController.prototype.index.call(this);
  };

  SesionesController.prototype.set_up_model = function() 
  {
    this.model = Sesion.extend();
  };

  SesionesController.prototype.set_up_form = function() 
  {
    this.form = new SesionesForm();
  };

  SesionesController.prototype.asistencia = function(curso_id, sesion_id) 
  {

    this.alumnos.add_filter("curso", curso_id, "EQUALS");

    var estado_options = [];
    estado_options.push({label:"Asistio", value:'Asistio'});
    estado_options.push({label:"No asistio", value:'No asistio'});
    estado_options.push({label:"Llego tarde", value:'Llego tarde'});
    estado_options.push({label:"Se fue temprano", value:'Se fue temprano'});

    this.asistencias_form.template_values.estado_options = estado_options;

    this.asistencias_form.template_values.sesion = sesion_id;
    this.asistencias_form.render();
    this.view(this.asistencias_form);

  };

  SesionesController.prototype.edit_form = function(model)
  {
    if(model.get("estado") && document.help_vars.current_user.rol == "profesor")
      return;

    this.form.set_values(model.toJSON());
    this.form.render();
  };

  SesionesController.prototype.set_up_list = function() 
  {    
    this.list = new SesionesTable({collection:this.collection});
    this.list.template_values.is_admin = auth.check(["Administrador", "Director"]);
    this.list.template_values.user_id = document.help_vars.current_user.id;             
  };  
   
  SesionesController.prototype.set_up_collection = function(){
    this.collection = new SesionesCollection();
    this.collection.on("fetch:success", $.proxy(function(){
      this.list.render();
    }, this));
  };

  SesionesController.prototype.set_up_profesores = function() 
  {
    this.profesores = new ProfesoresCollection();
    this.profesores.on("fetch:success", $.proxy(function(response){
      this.form.set_profesores(response.data.list);

      if(this.form.template_values.profesor === undefined && document.help_vars.current_user.rol == "profesor")
        this.form.template_values.profesor = {id:document.help_vars.current_user.id}; 

      this.form.render_template();
    }, this));
  };

  SesionesController.prototype.set_up_alumnos = function() 
  {
    this.alumnos = new AlumnosCollection();
    this.alumnos.on("fetch:success", $.proxy(function(response){

      var alumnos  = response.data.list;
      var asistencias = this.asistencias_form.template_values.asistencias;

      var template_alumnos = this.add_asistencia_info_to_alumnos(alumnos, asistencias);

      this.asistencias_form.template_values.alumnos = template_alumnos;
      this.asistencias_form.render_template();

    }, this));
  };

  SesionesController.prototype.add_asistencia_info_to_alumnos = function(alumnos, asistencias) 
  {
    var template_alumnos = [];

    $.each(alumnos, $.proxy(function(index, alumno){

      $.each(asistencias, $.proxy(function(index, asistencia){

        if(alumno.id === asistencia.alumno)
          {
            alumno.estado = asistencia.estado;
            alumno.observaciones = asistencia.observaciones;
          }

      }, this));

      template_alumnos.push(alumno);

    }, this));

    return template_alumnos;
  };

  SesionesController.prototype.set_up_asistencias_form = function() 
  {
    this.asistencias_form = new AsistenciasForm();
    this.asistencias_form.on("can:render", $.proxy(function(){
      this.asistencias.fetch(this.asistencias_form.template_values.sesion);
    }, this));

    this.asistencias_form.on("submit", $.proxy(function(values){

      var model = new this.model();

      model.on(this.namespace+":save:success", $.proxy(function(){

        this.router.navigate(this.namespace, true);

      }, this));

      model.save_asistencia(values);

    }, this));
  };

  SesionesController.prototype.subscribe_to_custom_routes = function() 
  {

    this.router.create_namespaced_route("sesiones/asistencia/:id/:id", "sesiones:route:asistencia", "sesiones");
    this.bus.on("sesiones:route:asistencia", $.proxy(function(sesion_id, curso_id){this.asistencia(curso_id, sesion_id);}, this));

  };

  SesionesController.prototype.set_up_asistencias = function() 
  {
    this.asistencias = new AsistenciasCollection();
    this.asistencias.on("fetch:success", $.proxy(function(response){

      this.asistencias_form.template_values.asistencias = response.data.collection;
      this.alumnos.fetch();

    }, this));
  };

  SesionesController.prototype.set_up_events = function() 
  {
    this.list.on("sesion:validation", $.proxy(function(id, estado, element){

      var JSON = this.collection.get(id).toJSON();
      delete JSON.profesor_curso;

      var model = new Sesion(JSON);
      model.set("estado", estado);

      model.on("save", $.proxy(function(){

        this.collection.fetch();

      },this));

      model.save();

    },this));
  };

})();
