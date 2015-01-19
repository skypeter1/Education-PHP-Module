var MatriculasCollection = BaseCollection.extend({
    initialize: function()
    {
        BaseCollection.prototype.initialize.call(this);
        this.namespace = "alumnos";
    },
    fetch: function(alumno)
    {
        if (this.can("search"))
        {
            var options = {};
            options.success = $.proxy(this.fetch_success, this);
            options.alternate_url = "get_matriculas";
            options.data = {data: JSON.stringify({alumno: alumno})};
            Backbone.Collection.prototype.fetch.call(this, options);
        }
        else
            this.bus.trigger("authorization:error");
    }

});