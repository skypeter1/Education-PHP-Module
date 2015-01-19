var Auth;
(function(){
	
	var permissions = [];
	var current_user;
	
	Auth = function(){};
	
	Auth.prototype.check = function(to_check_perms)
	{	
		if(to_check_perms.length === 0) return true;
		
		for(var counter = 0; counter < to_check_perms.length; counter++)
		{
			if($.inArray(to_check_perms[counter], permissions) != -1)
				return true;
		}
		
		return false;
	};
	
	Auth.prototype.add_permission = function(permission)
	{
		permissions.push(permission);
	};
	
	Auth.prototype.set_current_user = function(user)
	{
		current_user = user;
	};
	
	Auth.prototype.get_current_user = function()
	{
		return current_user;
	};
	
})();
