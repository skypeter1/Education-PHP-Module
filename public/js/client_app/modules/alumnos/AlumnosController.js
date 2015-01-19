var AlumnosController;
(function() {

    AlumnosController = function(router)
    {
        CrudController.call(this, "alumnos", router);
        this.form.on("got:template", $.proxy(function() {
            this.render_form();
        }, this));
        this.set_up_pac_clients();
        this.set_up_matriculas();
        this.set_up_cursos();
        this.subscribe_to_custom_routes();
    };

    AlumnosController.prototype = new CrudController();
    AlumnosController.prototype.constructor = AlumnosController;

    AlumnosController.prototype.matricula = function(alumno_id)
    {
        this.current_alumno_id = alumno_id;
        this.form_matriculas.render();
        this.view(this.form_matriculas);
    };

    AlumnosController.prototype.set_up_model = function()
    {
        this.model = Alumno.extend();
    };

    AlumnosController.prototype.set_up_form = function()
    {
        this.form = new AlumnosForm();
    };

    AlumnosController.prototype.set_up_collection = function()
    {
        this.collection = new AlumnosCollection();
    };

    AlumnosController.prototype.set_up_list = function()
    {
        this.list = new AlumnosTable({collection: this.collection});
    };

    AlumnosController.prototype.render_form = function()
    {
        this.pac_clients.fetch();
    };

    AlumnosController.prototype.set_up_pac_clients = function()
    {
        this.pac_clients = new PacClientsCollection();
        this.pac_clients.on("fetch:success", $.proxy(function(response) {

            this.form.set_pac_clients(response.data.list);
            this.form.render_template();

        }, this));
    };

    AlumnosController.prototype.set_up_cursos = function()
    {
        this.cursos = new CursosCollection();
        this.cursos.on("fetch:success", $.proxy(function(response) {
            this.form_matriculas.set_cursos(response.data.list);

            this.matriculas.fetch(this.current_alumno_id);
        }, this));
    };

    AlumnosController.prototype.set_up_matriculas = function()
    {
        this.form_matriculas = new MatriculasForm();
        this.form_matriculas.on("can:render", $.proxy(function() {
            var alumno = new this.model();
            alumno.set("id", this.current_alumno_id);
            alumno.on("alumnos:fetch:success", $.proxy(this.alumno_for_matriculas_fetched, this));
            alumno.fetch();
        }, this));

        this.matriculas = new MatriculasCollection();
        this.matriculas.on("fetch:success", $.proxy(function(response) {
            this.form_matriculas.template_values.matriculas = response.data;
            this.form_matriculas.render_template();

        }, this));

        this.form_matriculas.on("submit", $.proxy(function(matriculas) {
            var alumno = new this.model();
            alumno.on("alumnos:save:success", $.proxy(function() {
                this.router.navigate(this.namespace, true);
            }, this));

            alumno.save_matriculas({matriculas: matriculas});
        }, this));

    };

    AlumnosController.prototype.subscribe_to_custom_routes = function()
    {
        this.router.create_namespaced_route("alumnos/matricula/:id", "alumnos:route:matricula", "alumnos");
        this.bus.on("alumnos:route:matricula", $.proxy(function(alumno_id) {
            this.matricula(alumno_id);
        }, this));
    };

    AlumnosController.prototype.alumno_for_matriculas_fetched = function(model)
    {
        this.form_matriculas.template_values.alumno = model.toJSON();
        //this.cursos.add_filter("estado", "Terminado", "NOT EQUALS");
        this.cursos.fetch();
    };

})();
