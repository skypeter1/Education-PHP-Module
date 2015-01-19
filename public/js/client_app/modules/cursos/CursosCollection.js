var CursosCollection = BaseCollection.extend({

  initialize: function ()
  {
    BaseCollection.prototype.initialize.call(this);
    this.namespace = "cursos";
  },

  fetch_report: function ()
  {
    if(this.can("search"))
    {
      var options = {};
      //this.set_limit(5000);
      options = this.add_status_to_options(options);
      options.success = $.proxy(this.fetch_success, this);
      options.alternate_url = "get_report";
      Backbone.Collection.prototype.fetch.call(this, options);
    }
    else
      this.bus.trigger("authorization:error");
  }

});
