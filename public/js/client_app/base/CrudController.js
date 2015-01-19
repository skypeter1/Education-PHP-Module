var CrudController;
(function(){

  CrudController = function(namespace, router)
  {
    BaseController.call(this, router);

    this.no_url = false;

    this.namespace = namespace;
    this.set_up_model();
    this.set_up_collection();
    this.set_up_list();
    this.set_up_form();
    this.set_up_modal();

    set_up_event_subscription.call(this);

    if(namespace && router)
      {
        this.router.create_crud_for(namespace);
        this.subscribe_to_crud(namespace);
      }

      this.feedback_view = new FeedbackView();
  };

  CrudController.prototype = new BaseController();
  CrudController.prototype.constructor = CrudController;

  CrudController.prototype.index = function()
  {        
    $(this.list.el).empty();
    this.collection.fetch();
    this.view(this.list);
  }; 

  CrudController.prototype.add = function()
  {
    this.form.template_values = {};
    this.form.render();
    this.show_form();
  };

  CrudController.prototype.show_form = function(id)
  {
    this.view(this.form);
  };

  CrudController.prototype.edit = function(id)
  {	
    this.form.template_values = {};
    $(this.form.el).empty();
    var model = new this.model({id:id});
    model.on(this.namespace+":fetch:success", $.proxy(this.edit_form, this));
    model.fetch();
    this.show_form();
  };

  CrudController.prototype.render_list = function()
  {
    this.list.render();
  };

  CrudController.prototype.set_auth_namespace = function(namespace)
  {
    this.collection.set_auth_namespace(namespace);
    this.model.prototype.auth_namespace = namespace;
  };

  CrudController.prototype.edit_form = function(model)
  {
    this.form.set_values(model.toJSON());
    this.form.render();
  };

  function save_form(data, save_and_new)
  {
    var model = new this.model(data);
    model.on(this.namespace+":response:error", $.proxy(show_form_errors, this)); 
    model.on(this.namespace+":save:success", $.proxy(this.form_save_success, this, save_and_new));
    model.save();
  }

  CrudController.prototype.form_save_success = function(save_and_new)
  {
    if(save_and_new === true)
      {
        this.feedback_view.template_values.message = this.get_feedback_message_on_save_success();
        this.feedback_view.atach($("#content"));
        this.feedback_view.render();
        if(document.location.hash.match(/new/))
          this.router.navigate(this.namespace, true);

        this.router.navigate(this.namespace+"/new", true);

        return;
      }

      if(this.modal_mode || this.no_url)
        this.index();
      else
        this.router.navigate(this.namespace, true);
  };

  CrudController.prototype.get_feedback_message_on_save_success = function() 
  {
    return "Datos Guardados correctamente !";
  };

  CrudController.prototype.modal = function(view, modal_options, as_modal)
  {
    this.form.clear_errors();
    BaseController.prototype.modal.call(this, view, modal_options, as_modal);
  };

  function show_form_errors(errors)
  {
    this.form.render_errors(errors);
  }

  CrudController.prototype.set_up_model = function()
  {
    this.model = BaseModel.extend({namespace:this.namespace});
  };

  CrudController.prototype.set_up_collection = function()
  {
    this.collection = new BaseCollection({model:new this.model()});
    this.collection.namespace = this.namespace;
  };

  CrudController.prototype.set_up_list = function()
  {
    this.list = new TableView({collection:this.collection});
  };

  CrudController.prototype.set_up_form = function()
  {
    this.form = new BaseForm();
    this.form.namespace = this.namespace;
  };

  CrudController.prototype.set_up_modal = function()
  {
    this.confirm_modal = new ConfirmModal();
  };

  CrudController.prototype.no_url_mode = function()
  {
    this.no_url = true;
    this.form.no_url_mode();
    this.list.no_url_mode();		
  };

  CrudController.prototype.subscribe_to_crud = function(namespace)
  {
    this.bus.on(namespace+":route:index", $.proxy(this.index, this));
    this.bus.on(namespace+":route:show", $.proxy(this.show, this));
    this.bus.on(namespace+":route:new", $.proxy(this.add, this));
    this.bus.on(namespace+":route:edit", $.proxy(this.edit, this));
  };

  CrudController.prototype.get_delete_message = function(model)
  {
    return "Seguro que quiere eliminar este registro ?";
  };

  CrudController.prototype.get_block_message = function(model)
  {
    return "Seguro que quiere bloquear este registro ?";
  };

  CrudController.prototype.get_unblock_message = function(model)
  {
    return "Seguro que quiere desbloquear este registro ?";
  };

  CrudController.prototype.delete_model = function(id, version)
  {
    var model = new this.model({id:id, version:version});
    $(this.list.el).empty();
    model.on(this.namespace+':delete:success', $.proxy(function(response){this.index();}, this));
    model.on(this.namespace+':response:error', $.proxy(function(errors, model){this.delete_model_error(errors, model);}, this));
    model.destroy({wait: true});
  };

  CrudController.prototype.delete_model_error = function(errors, model){};

  CrudController.prototype.block_model = function(id, version)
  {
    var model = new this.model({id:id, version:version});
    model.on(this.namespace+':block:success', $.proxy(function(response){this.index();}, this));
    model.on(this.namespace+':response:error', $.proxy(function(errors, model){this.block_model_error(errors, model);}, this));
    model.block(true);
  };

  CrudController.prototype.block_model_error = function(errors, model){};

  CrudController.prototype.unblock_model = function(id, version)
  {
    var model = new this.model({id:id, version:version});
    model.on(this.namespace+':unblock:success', $.proxy(function(response){this.index();}, this));
    model.block(false);
  };

  function confirm_delete(id)
  {
    var model = this.collection.get(id);
    var version = model.attributes.version;
    var message = this.get_delete_message(model);
    this.confirm_modal.confirm(message, $.proxy(this.delete_model, this, id, version));
  }

  function confirm_block(id)
  {
    var model = this.collection.get(id);
    var version = model.attributes.version;
    var message = this.get_block_message(model);
    this.confirm_modal.confirm(message, $.proxy(this.block_model, this, id, version));
  }

  function confirm_unblock(id)
  {
    var model = this.collection.get(id);
    var version = model.attributes.version;
    var message = this.get_unblock_message(model);
    this.confirm_modal.confirm(message, $.proxy(this.unblock_model, this, id, version, false));
  }

  function set_up_event_subscription()
  {
    this.form.on("submit", $.proxy(save_form, this));
    this.form.on("ui:cancel", $.proxy(function(){this.index();}, this));
    this.list.collection.on('fetch:success', $.proxy(this.render_list, this));
    this.list.on('ui:delete', $.proxy(confirm_delete, this));
    this.list.on('ui:block', $.proxy(confirm_block, this));
    this.list.on('ui:unblock', $.proxy(confirm_unblock, this));
    this.list.on("ui:refresh", $.proxy(function(){this.index();}, this));
    this.list.on("ui:edit", $.proxy(function(id){this.edit(id);}, this));
    this.list.on("ui:new", $.proxy(function(){this.add();}, this));
  }

})();
