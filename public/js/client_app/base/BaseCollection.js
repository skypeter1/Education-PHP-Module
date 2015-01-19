var BaseCollection = Backbone.Collection.extend({
  model: BaseModel,

  namespace:"",

  bus:EventBus,

  initialize: function()
  {
    this.status = {};
    this.auth_namespace = undefined;
  },

  set_auth_namespace: function(namespace)
  {
    this.auth_namespace = namespace;
  },

  fetch: function(options) 
  {
    if(this.can("search"))
      {
        if(options === undefined) options = {};
        options = this.add_status_to_options(options);
        options.success = $.proxy(this.fetch_success, this);
        Backbone.Collection.prototype.fetch.call(this, options);
      }
      else
        this.bus.trigger("authorization:error");
  },

  fetch_success: function(collection, response)
  {	
    this.trigger("fetch:success", response);
  },

  parse: function(response, xhr) 
  {
    return response.data.list;
  },

  reset_status: function()
  {
    this.status = {};
  },

  add_filter: function(property, pattern, method)
  {
    if(this.status.filters === undefined) this.status.filters = [];

    this.remove_filter(property);

    this.status.filters.push({'property':property,'pattern':pattern,'method':method});
  },

  remove_filter: function(property)
  {	
    if(this.status.filters === undefined) return;
    this.status.filters = jQuery.grep(this.status.filters, function(filter) {
      return filter.property != property;
    });
  },

  set_limit: function(limit)
  {
    this.status.paginator = {'page_size':limit};
  },

  set_order: function(field, direction)
  {
    this.status.order = {'field':field,'direction':direction};
  },

  add_status_to_options: function(options)
  {
    options.data = {data: JSON.stringify(this.status)};
    return options;
  },

  can: function(permission)
  {
    if(this.auth_namespace === undefined)
      return true;

    if(typeof auth == "undefined")
      return true;

    if(typeof auth != "undefined" && auth.check([this.auth_namespace+permission]))
      return true;

    return false;
  },

  add: function(models, options)
  {
    if(options === undefined)
      options = {};

    options["silent"] = false;
    Backbone.Collection.prototype.add.call(this, models, options);
  }
});
