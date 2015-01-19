var AlumnosForm = BaseForm.extend({
    template: "public/templates/alumnos_form.html",
    events: _.extend({
        "change #cliente_pac_field": "client_changed"

    }, BaseForm.prototype.events),
    initialize: function(options)
    {
        BaseView.prototype.initialize.call(this, options);
        this.resubscribe_template_event();
        this.pac_clients = undefined;
    },
    fecha_changed: function()
    {
        var fecha = $(this.el).find("#fecha_nacimiento_field").val();
        fecha = fecha.split("/");
        var current_year = new XDate();
        var birth_date = new XDate(fecha[2], fecha[1], fecha[0]);
        var age = parseInt(birth_date.diffYears(current_year), 10);
        $(this.el).find("input#edad_field").val(age);
    },
    client_changed: function()
    {
        var client_id = $(this.el).find("#cliente_pac_field").val();
        var client_selected = this.pac_clients.get(client_id);

        if (client_selected === undefined)
            return false;

        $(this.el).find("[name='celular']").val(client_selected.get("celular"));
        $(this.el).find("[name='direccion']").val(client_selected.get("direccion"));
        $(this.el).find("[name='email']").val(client_selected.get("email"));
        $(this.el).find("[name='telefono']").val(client_selected.get("telefono"));
    },
    render_template: function()
    {
        BaseForm.prototype.render_template.call(this);
        $(this.el).find("#fecha_nacimiento_field").change($.proxy(this.fecha_changed, this));
    },
    set_pac_clients: function(clients)
    {
        this.pac_clients = new PacClientsCollection(clients);

        var transformed = [];

        $.each(clients, function(index, client) {
            transformed[index] = {label: client.nombre, value: client.id};
        });

        this.template_values.pac_clients = transformed;
    }

});
