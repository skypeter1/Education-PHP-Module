var Validator = {};
(function(){
	
	Validator.same_values = function(value1, value2)
	{
		return value1 == value2;
	};
	
	Validator.cedula = function(cedula)
	{	
		var not_only_numbers = !cedula.match(/^[0-9]+$/, cedula);
		var not_10_characters = (cedula.length != 10);
		var third_digit_greater_than_5 = parseInt((cedula.substring(2, 3)), 10) > 5;	
		
		if(not_only_numbers || not_10_characters || third_digit_greater_than_5) 
			return false;
		
		var province_code = parseInt(cedula.substring(0, 2), 10);
		if((1 > province_code) || (province_code > 24))
			return false;
			
		if(!Validator.luhn(cedula))
			return false;
		
		return true;
	};
	
	Validator.luhn = function(string)
	{
		var odd = false;
		var sum = 0;
        var digit;
		for (var i=0; i<string.length; i++ ) {
			digit = parseInt(string.substring(i,i+1), 10);
			if(odd)
				digit = digit * 2;
            sum += digit;
		}

		var mod10 = sum % 10;
		mod10 = 10 - mod10; 
		if (mod10==10) {      
			mod10=0;
		}
		return mod10;
	};

	Validator.integer = function(to_check)
	{
		if(to_check === "") return true;
		
		var matches = to_check.match(/^\d+$/);
		return (matches !== null);
	};
	
	Validator.floats = function(to_check)
	{
		if(to_check === "") return true;

		var matches = to_check.match(/^\d+(\.\d+)?$/);
		return (matches !== null);
	};
	
})();
