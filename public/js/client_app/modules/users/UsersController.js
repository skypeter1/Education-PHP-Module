var UsersController;
(function(){

  UsersController = function(router)
  {
    CrudController.call(this, "users", router);
    this.set_auth_namespace("User::");
    this.set_up_proveedores();
  };

  UsersController.prototype = new CrudController();

  UsersController.constructor = UsersController;

  UsersController.prototype.set_up_model = function() 
  {
    this.model = User.extend();
  };

  UsersController.prototype.set_up_form = function() 
  {
    this.form = new UsersForm();
    this.form.on("can:render", $.proxy(function(){
      this.proveedores.fetch();
    }, this));
    this.form.template_helpers.admin = auth.check(["Administrador"]);
  };

  UsersController.prototype.form_save_success = function(save_and_new)
  {
    if(save_and_new === true)
      {
        this.feedback_view.template_values.message = this.get_feedback_message_on_save_success();
        this.feedback_view.atach($("#content"));
        this.feedback_view.render();

        if(document.location.hash.match(/new/))
          this.add();

        this.router.navigate(this.namespace+"/new", true);

        return;
      }

      if(this.modal_mode || this.no_url)
        this.index();
      else
        {
          var is_admin = auth.check(["Administrador"]);
          if(is_admin)
            this.router.navigate(this.namespace, true);
          else
            this.router.navigate("cursos", true);

        }  
  };

  UsersController.prototype.set_up_list = function() 
  {
    this.list = new UsersTable({collection:this.collection});
  };

  UsersController.prototype.set_up_proveedores = function() 
  {
    this.proveedores = new ProveedoresCollection();
    this.proveedores.on("fetch:success", $.proxy(function(response){

      this.form.set_proveedores(response.data.list);
      this.form.render_template();

    }, this));
  };

})();
