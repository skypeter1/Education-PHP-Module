var CursosController;
(function () {

    CursosController = function (router) {
        CrudController.call(this, "cursos", router);
        this.form.on("can:render", $.proxy(function () {
            this.render_form();
        }, this));
        this.set_up_pac_products_collection();
        this.set_up_profesores_modal();
    };

    CursosController.prototype = new CrudController();
    CursosController.prototype.constructor = CursosController;

    CursosController.prototype = _.extend(CursosController.prototype, ProfesoresModalSelectable);
 
    CursosController.prototype.set_up_model = function () {
        this.model = Curso.extend({namespace: this.namespace});
    };

    CursosController.prototype.index = function () {
        if (document.help_vars.current_user.rol == "profesor") {
            this.list.search_form.set_status(document.help_vars.current_user.name);
            this.list.collection.add_filter("GLOBAL", document.help_vars.current_user.name, "LIKE");
        } 
     
        CrudController.prototype.index.call(this);
    };

    CursosController.prototype.add = function () {
        this.form.template_values = {};

        this.form.template_values.precio_prematricula = 25;
        this.form.template_values.cupos_minimo = 6;
        this.form.template_values.cupos_maximo = 12;

        this.form.render();
        this.show_form();
    };

    CursosController.prototype.set_up_form = function () {
        this.form = new CursosForm();
    };

    CursosController.prototype.set_up_list = function () {
        this.list = new CursosTable({collection: this.collection});  
        this.list.template_values.is_admin = auth.check(["Administrador", "Director", "Counter"]);
    };          
  
    CursosController.prototype.edit_form = function (model) {
        this.form.set_values(model.toJSON());
        this.form.template_helpers.can_modify_hours = auth.check(["Administrador"]);
        this.form.render();         
    };

    CursosController.prototype.render_form = function () {
        this.pac_products.fetch();
    };

    CursosController.prototype.set_up_pac_products_collection = function () {
        this.pac_products = new PacProductCollection();
        this.pac_products.on("fetch:success", $.proxy(function (response) {
            this.form.set_pac_products(response.data.list);
            this.form.render_template();
        }, this));
    };

    CursosController.prototype.delete_model_error = function (errors, model) {
        if ($.inArray("actividades_or_sesiones_atached", errors) != -1) {
            this.bus.trigger("custom:error", "Para borrar este curso primero debe borrar las actividades o sesiones que tenga asociadas !");
            this.collection.fetch();
        }
    };
})();
