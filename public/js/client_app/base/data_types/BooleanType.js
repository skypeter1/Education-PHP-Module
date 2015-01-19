var BooleanType = {
	
	output: function(value)
	{
		return (value == "on" || value == 1 || value == "true");
	},

	input: function(value)
	{
		return (value == 1);
	}

}