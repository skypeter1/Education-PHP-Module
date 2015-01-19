function parseDMY(str) {
	var parts = str.split('/');
	if (parts.length == 3) {
		return new XDate(parseInt(parts[2]), parseInt(parts[1] ? parts[1]-1 : 0), parseInt(parts[0]));
	}
}

function parseDMYWithTime(str) {
	var parts = str.split('-');
	
	if(parts.length == 2)
	{	
		var date = parts[0];
		var time = parts[1];
	
		var date = date.split("/")
		var time = time.split(":");
	
		if (date.length == 3 && time.length == 2) {
			return new XDate(parseInt(date[2]), parseInt(date[1] ? date[1]-1 : 0), parseInt(date[0]), time[0], time[1]);
		}
	}
}

XDate.prototype.getTimestamp = function()
{
	return Math.round(this.getTime() / 1000);	
}

XDate.parsers.push(parseDMYWithTime);
XDate.parsers.push(parseDMY);

