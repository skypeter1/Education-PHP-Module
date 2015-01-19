var AlumnosTable = TableView.extend({
    template: "public/templates/alumnos_table.html",
    initialize: function()
    {

        var options = {};
        options.control_values = {"label": "Nuevo alumno", "url": "#alumnos/new"};

        TableView.prototype.initialize.call(this, options);

    }

});