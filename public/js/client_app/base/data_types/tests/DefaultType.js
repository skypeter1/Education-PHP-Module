describe("DefaultType", function(){

    it("has output function and returns argument passed", function(){
       
        var output = DefaultType.output("output");
        expect(output).toBe("output");

    });

    it("has input function and returns argument passed", function(){
        
        var input = DefaultType.input("input");
        expect(input).toBe("input");
    
    })
});
