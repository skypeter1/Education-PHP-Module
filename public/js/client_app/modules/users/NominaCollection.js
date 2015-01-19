var NominaCollection = BaseCollection.extend({

  initialize: function () {
    BaseCollection.prototype.initialize.call(this);
    this.namespace = "users";
  },
      
  fetch_nomina: function (flag) {
    if ( this.can("search") ) {   
      var options = {};   
      if (flag=='set_nomina'){
        options = {};
        //this.set_limit(5000);
        options = this.add_status_to_options(options);
        options.success = $.proxy(this.fetch_success, this);
        options.alternate_url = "set_nomina";
                         
      }else{  
        options = {};     
        //this.set_limit(5000);
        options = this.add_status_to_options(options);
        options.success = $.proxy(this.fetch_success, this);
        options.alternate_url = "get_nomina";
      }      
      Backbone.Collection.prototype.fetch.call(this, options);
    }else
       this.bus.trigger("authorization:error");
    }

});
