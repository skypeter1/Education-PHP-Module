var RolesForm = BaseForm.extend({

	template:"public/templates/roles_form.html",

  initialize: function(options)
  {
    BaseView.prototype.initialize.call(this, options);
    this.resubscribe_template_event();
    this.template_values.username = "";
    var roles = [];
    if(auth.check(["Administrador"])){
      roles.push({label: "Administrador", value: "Administrador"});
    }
    roles.push({label: "Director", value: "Director"});
    roles.push({label: "Counter", value:"Counter"});

    this.template_helpers = {};
    this.template_helpers.roles = roles;
  }

});
