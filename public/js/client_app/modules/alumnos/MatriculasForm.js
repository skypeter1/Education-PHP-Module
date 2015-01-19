var MatriculasForm = BaseForm.extend({
    template: "public/templates/matriculas_form.html",
    events: _.extend({
        "keyup input[name='search_field']": "filter_cursos"

    }, BaseForm.prototype.events),
    initialize: function(options)
    {
        BaseView.prototype.initialize.call(this, options);
        this.resubscribe_template_event();
    },
    get_values: function()
    {
        var fields = $(this.el).find("form input[type='checkbox']:checked");
        var alumno = $(this.el).find("input[name='alumno']").val();

        var result = {};
        result[alumno] = [];

        $.each(fields, function(index, field) {
            result[alumno].push($(field).val());
        });

        return result;
    },
    filter_cursos: function(event)
    {
        $(this.el).find("[search]").css("display", "table-row");

        var search_term = $(this.el).find("input[name='search_field']").val();
        var unmatched_containers = $(this.el).find("[search]").filter(function() {
            return !new RegExp(search_term, "i").test($.trim($(this).attr("search")));
        });

        unmatched_containers.css("display", "none");

    },
    set_cursos: function(cursos)
    {
        var opened_cursos = [];
        var closed_cursos = [];

        $.each(cursos, function(index, curso) {
            if (curso.estado != "Terminado")
                opened_cursos.push(curso);
            else
                closed_cursos.push(curso);
        });

        this.template_values.opened_cursos = opened_cursos;
        this.template_values.closed_cursos = closed_cursos;
    }

});
