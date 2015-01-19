describe("EventBus", function() {

	beforeEach(function() {
        EventBus.off();
	});

    it("executes subscriber function on a certain event", function(){
    
        var function_executed = false;
        EventBus.on("test_event", function(){
            function_executed = true;
        });
        EventBus.trigger("test_event"); 
        expect(function_executed).toBe(true);
    });

    it("unsuscribes from all events on off", function(){
      
        var function_executed = false;
        EventBus.on("test_event", function(){
            function_executed = true;
        });
        EventBus.off();
        EventBus.trigger("test_event"); 
        expect(function_executed).toBe(false);
    });
	
});
