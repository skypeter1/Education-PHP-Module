describe("BaseCollection", function() {

	beforeEach(function(){
		this.server = sinon.fakeServer.create();
		this.bus = EventBus;
	});
	
	afterEach(function(){
		this.server.restore();
		this.bus.off();
	});
	
	it("fetch correctly from the server", function(){
		
		var collection = new BaseCollection();
		
		var fetch_success_response;
		collection.on("fetch:success", function(response){
			fetch_success_response = response;
		});
		
		var mock_data = {data:{list:[]}};
		mock_data.data.list.push({name:"jon", "id":1});
		mock_data.data.list.push({name:"txau", "id":2});
		mock_data.data.list.push({name:"konz", "id":3});				
		
		this.server.respondWith("POST", "",
			[200, {"Content-Type": "application/json"},JSON.stringify(mock_data)]);
			
		collection.fetch();
		this.server.respond();
	
		expect(collection.models[0].get("name")).toBe("jon");
		expect(collection.models[1].get("name")).toBe("txau");
		expect(collection.models[2].get("name")).toBe("konz");
		expect(fetch_success_response).toEqual(mock_data);
	});
	
	it("has methods to set filters in status", function(){
		var collection = new BaseCollection();
		collection.add_filter('email', 'john@gmail.com', 'where');
		
		expect(collection.status.filters[0].property).toBe('email');
		expect(collection.status.filters[0].pattern).toBe('john@gmail.com');
		expect(collection.status.filters[0].method).toBe('where');
		collection.add_filter('name', 'john', 'like');
		expect(collection.status.filters.length).toBe(2);
	});
	
	it("only accepts one filter per property", function(){
		var collection = new BaseCollection();
		collection.add_filter('email', 'john@gmail.com', 'where');
		collection.add_filter('email', 'rob@stark.com', 'where');
		expect(collection.status.filters.length).toBe(1);
	});
	
	it("has methods to remove filters in status", function(){
		var collection = new BaseCollection();
		collection.add_filter('email', 'john@gmail.com', 'where');
		
		collection.remove_filter("email");
		
		expect(collection.status.filters.length).toBe(0);
	});
	
	it("there is no error if you try to remove unexistant filter", function(){
		var collection = new BaseCollection();
		collection.remove_filter("unexistant");
	});
	
	it("has methods to set pagination in status", function(){
		var collection = new BaseCollection();
		collection.set_limit(100);

		expect(collection.status.paginator.page_size).toBe(100);
	});
	
	it("has methods to set order in status", function(){
		var collection = new BaseCollection();
		collection.set_order('email','asc');

		expect(collection.status.order.field).toBe('email');
		expect(collection.status.order.direction).toBe('asc');
	});
	
	it("reset status on reset_status()", function(){
		var collection = new BaseCollection();
		collection.set_order('email','asc');
		collection.reset_status();
		
		expect(collection.status).toEqual({});
	});

	it("sends his status on fetch", function(){
		spyOn(Backbone.Collection.prototype, 'fetch');
		var collection = new BaseCollection();
		
		collection.add_filter('email', 'john@gmail.com', 'where');
		collection.set_limit(100);
		collection.set_order('email','asc');
		
		collection.fetch();
		
		var options = Backbone.Collection.prototype.fetch.mostRecentCall.args[0];
		expect($.parseJSON(options.data.data)).toEqual(collection.status);
	});
	
	it("checks for search permission if auth namespace setted", function() {
        window.auth = new Auth();

		spyOn($, "ajax");
		var model = new BaseCollection();
		model.set_auth_namespace("namespace_");
		
		var auth_error_triggered = false;
		this.bus.on("authorization:error", function(){auth_error_triggered = true;});
		
		model.fetch();

		expect($.ajax).not.toHaveBeenCalled();
        expect(auth_error_triggered).toBe(true);
		
		auth.add_permission("namespace_search");
		
		auth_error_triggered = false;
		model.fetch();
		expect($.ajax).toHaveBeenCalled();
		expect(auth_error_triggered).toBe(false);
	});

	it("always triggers add event on model when added", function(){

		var collection = new BaseCollection();
		spyOn(Backbone.Collection.prototype, "add");
		collection.add(new BaseModel(), {silent:true});

		var arguments_for_call = Backbone.Collection.prototype.add.argsForCall;

		expect(Backbone.Collection.prototype.add).toHaveBeenCalled();
		expect(arguments_for_call[0][1].silent).toBe(false);

	});
	
});
