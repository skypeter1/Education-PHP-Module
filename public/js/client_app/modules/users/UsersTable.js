var UsersTable = TableView.extend({

  template:"public/templates/users_table.html",

  initialize: function()
  {
    var options = {};
    options.control_values  = {"label":"Nuevo usuario", "url":"#users/new"};
    TableView.prototype.initialize.call(this, options);
    this.controls.add_permission("Administrador");
    this.template_values.can_edit = auth.check(["Administrador"]);
  }

});
