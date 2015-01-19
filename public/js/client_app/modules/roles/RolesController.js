var RolesController;
(function(){

  RolesController = function(router)
  {
    CrudController.call(this, "roles", router);
    this.set_auth_namespace("Rol::");
    this.form.on("got:template", $.proxy(function(){this.render_form();}, this));
    this.set_up_pac_users();
  };

  RolesController.prototype = new CrudController();

  RolesController.constructor = RolesController;

  RolesController.prototype.render_form = function() 
  {
    this.pac_users.fetch();
  };

  RolesController.prototype.set_up_model = function() 
  {
    this.model = Rol.extend();
  };

  RolesController.prototype.set_up_form = function() 
  {
    this.form = new RolesForm();
  };

  RolesController.prototype.set_up_list = function() 
  {
    this.list = new RolesTable({collection:this.collection});
    this.list.template_values.is_admin = auth.check(["Administrador"]);
  };

  RolesController.prototype.set_up_pac_users = function() 
  {
    this.pac_users = new PacUsersCollection();
    this.pac_users.on("fetch:success", $.proxy(function(response){
      this.form.template_values.pac_users = response.data.list;
      this.form.render_template();
    }, this)); 
  };

})();
