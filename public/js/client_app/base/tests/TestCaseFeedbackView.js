describe("FeedbackView", function() {
	
	it("has a non default template", function() {
		
		var view = new FeedbackView();
		expect(view.template).toNotBe("default");
		
	});

});