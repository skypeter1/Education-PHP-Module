var MainMenu;
(function(){

  MainMenu = function(container_id)
  {
    Menu.call(this, container_id);
    this.set_up();
    var template_proxy = new TemplateProxy();
    template_proxy.get(MenuItem.prototype.template);
  };

  MainMenu.prototype = new Menu();
  MainMenu.prototype.constructor = MainMenu;

  MainMenu.prototype.set_up = function()
  {

    var cursos = new MenuItem({values:{url:"#cursos", icon:"icon-pencil", label:"Cursos"}});
    this.add_view(cursos, "cursos:section");

    if(auth.check(["Administrador", "Director", "Counter"])){
      var cursos_report = new MenuItem({values:{url:"#cursos-report", icon:"icon-pencil", label:"Reporte Cursos"}});
      this.add_view(cursos_report, "cursos-report:section");

      var alumnos = new MenuItem({values:{url:"#alumnos", icon:"icon-user", label:"Alumnos"}});
      this.add_view(alumnos, "alumnos:section");

      var alumnos_switch = new MenuItem({values:{url:"#alumnos-switch", icon:"icon-user", label:"Mover alumnos"}});
      this.add_view(alumnos_switch, "alumnos-switch:section");
    }

    if(auth.check(["Administrador", "Director"])){
      var users = new MenuItem({values:{url:"#users", icon:"icon-user", label:"Profesores"}});
      this.add_view(users, "users:section");

      var users_nomina = new MenuItem({values:{url:"#users-nomina", icon:"icon-pencil", label:"Nómina Profesores"}});
      this.add_view(users_nomina, "users-nomina:section");
    }

    if(auth.check(["Administrador"])){
      var roles = new MenuItem({values:{url:"#roles", icon:"icon-user", label:"Roles"}});
      this.add_view(roles, "roles:section");
    } 

    if(auth.check(["Administrador", "Director", "profesor"])){
      var sesiones = new MenuItem({values:{url:"#sesiones", icon:"icon-time", label:"Sesiones"}});
      this.add_view(sesiones, "sesiones:section");

      var examenes = new MenuItem({values:{url:"#examenes", icon:"icon-th-list", label:"Actividades"}});
      this.add_view(examenes, "examenes:section");
    }

    if(auth.check(["Administrador"])){      
      var pagos = new MenuItem({values:{url:"#pagos", icon:"icon-envelope", label:"Pagos"}});
      this.add_view(pagos, "pagos:section");
    }
  };

})();
