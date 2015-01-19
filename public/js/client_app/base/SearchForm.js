var SearchForm = BaseForm.extend({

  template:"public/templates/search_form.html",

  transform_dates : true,

  initialize: function()
  {
    BaseForm.prototype.initialize.call(this, {namespace:"search"});
  },

  submit: function()
  {
    var values = this.get_values();

    var search_term = values.search;

    if(this.transform_dates && search_term.match(/\d\d\/\d\d\/\d\d\d\d/))
      search_term = new XDate(search_term).getTimestamp();

    this.trigger("submit", search_term);
    this.set_status(values.search);
  },

  set_status: function(search_term)
  {
    this.search_term = search_term;
    this.render_status();
  },

  render_template: function()
  {
    if(!this.rendered)
      BaseForm.prototype.render_template.call(this);

    this.rendered = true;
    this.render_status();
  },

  render_status: function()
  {
    if(this.search_term !== undefined)
      $(this.el).find("[name='search']").val(this.search_term);
  }
});
