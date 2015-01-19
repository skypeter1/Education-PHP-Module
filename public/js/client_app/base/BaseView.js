var BaseView = Backbone.View.extend({

  template:"default",

  renderer:undefined,

  initialize: function(options)
  {
    this.template_values = {};

    this.template_proxy = new TemplateProxy();

    if(options && options.values)
      this.template_values = options.values;

    if(options && options.template)
      this.template = options.template;	

    this.set_template_file(this.template);

    this.bus = EventBus;

    this.permissions = [];

    this.on("got:template", $.proxy(this.render_template, this));

    this.modal_mode = false;
  },

  add_permission: function(permission)
  {
    this.permissions.push(permission);
  },

  set_template_file: function(template_file)
  {
    this.template = template_file;

    this.template_proxy.on("template:"+this.template+":complete", $.proxy(function(template){
      this.set_template(template);
      this.trigger("got:template");
    },this));
  },

  set_template: function(template)
  {
    this.renderer = Handlebars.compile(template);
  },

  request_template: function()
  {
    this.template_proxy.get(this.template);
  },

  render_template: function()
  {	
    if(!this.can_render()) return false;

    var output = "";

    if(this.renderer)
      output = this.renderer(this.template_values);

    $(this.el).html(output);
  },

  render : function() {

    this.request_template();

    return this;
  },

  detach: function()
  {
    $(this.el).detach();
    this.remove_inner_elements();
  },

  remove_inner_elements: function()
  {
    $(this.el).children().remove();
  },

  atach: function(container)
  {
    $(this.el).appendTo(container);
  },

  as_modal: function(as_modal)
  {
    if(as_modal === undefined) as_modal = true;
    this.modal_mode = as_modal;
  },

  delegate_events: function()
  {
    this.delegateEvents();
  },

  resubscribe_template_event: function()
  {
    this.off("got:template");
    this.on("got:template", $.proxy(function(){
      this.trigger_can_render();
    }, this));
  },

  trigger_can_render: function()
  {
    this.trigger("can:render");
  },

  can_render: function()
  {
    if(typeof auth == "undefined")
      return true;

    if(typeof auth != "undefined" && auth.check(this.permissions))
      return true;

    return false;	
  }
});
