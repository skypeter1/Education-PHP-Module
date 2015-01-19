describe("DateType", function(){

    it("expect a string date and outputs a timestamp", function(){
    
        var date = "01/10/2012"
        spyOn(XDate.prototype, "getTimestamp").andReturn("timestamp");
        
        var timestamp = DateType.output(date);
        expect(timestamp).toBe("timestamp");
    });
    
    it("expect input transform timestamp to human redeable date", function(){
    	var timestamp = "1351193389";
    	var date = DateType.input(timestamp);

    	expect(date).toBe("25/10/2012");
    });

});
