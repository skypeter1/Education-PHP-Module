var PacUsersCollection = BaseCollection.extend({

	initialize: function(){
		BaseCollection.prototype.initialize.call(this);
		this.namespace = "roles";
	},

  fetch: function(options){
    if(options === undefined) options = {};

    options.alternate_url = "get_pac_users";
    BaseCollection.prototype.fetch.call(this, options);
  }

});

