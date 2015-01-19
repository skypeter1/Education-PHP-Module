$(document).ready(function() {

    set_initial_state();

    var router = new BaseRouter();

    var main_container_id = "main_container";

    var errors_controller = new ErrorsController(main_container_id);
    var cursos_controller = new CursosController(router);
    var report_cursos_controller = new ReportController(router);
    var report_nomina_controller = new NominaController(router);
    var alumnos_controller = new AlumnosController(router);
    var alumnos_switch_controller = new AlumnosSwitchController(router);
    var sesiones_controller = new SesionesController(router);
    var users_controller = new UsersController(router);
    var examenes_controller = new ExamenesController(router);
    var pagos_controller = new PagosController(router);
    var notas_grid_controller = new NotasGridController(router);
    var roles_controller = new RolesController(router);

    var asistencia_profesores = new AsistenciaProfesorController(router);
    var asistencia_alumnos = new AsistenciaAlumnosController(router);
    var historico_alumnos = new AlumnosHistoryController(router);

    var loader = new Loader();

    var main_menu = new MainMenu("main_menu");
    main_menu.render();

    Backbone.history.start();

    set_initial_url();

    $('.dropdown-toggle').dropdown()

});


function set_initial_state()
{
    if (document.help_vars.current_user.id == null)
    {
        document.location.href = "login";
        return;
    }

    template_proxy = new TemplateProxy();

    auth = new Auth();
    auth.set_current_user(document.help_vars.current_user);
    auth.add_permission(document.help_vars.user_type);
    auth.add_permission("user_" + document.help_vars.current_user.id);
    if (document.help_vars.current_user.rol == "Administrador")
        auth.add_permission("Administrador");
    if (document.help_vars.current_user.rol == "Director")
        auth.add_permission("Director");
    if (document.help_vars.current_user.rol == "Counter")
        auth.add_permission("Counter");

    auth.add_permission(document.help_vars.current_user.rol);

    $.each(document.help_vars.user_permissions, function(permission, has_permission) {
        if (has_permission)
        {
            auth.add_permission(permission);
        }
    })
}

function set_initial_url()
{
    if (document.location.hash != "")
        return false;

    if (document.help_vars.current_user.rol == "profesor")
    {
        document.location.href = "#sesiones";
        return false;
    }

    document.location.href = "#cursos";

}
