describe("PacUsersCollection", function() {

  it("has roles as his namespace", function(){

    var collection = new PacUsersCollection();
    expect(collection.namespace).toBe("roles");

  });

  it("passes to Backbone.collection.fetch get_pac_clients as alternate url", function(){

    var collection = new PacUsersCollection();

    spyOn(Backbone.Collection.prototype, "fetch");
    collection.fetch();

    var arguments_passed = Backbone.Collection.prototype.fetch.mostRecentCall.args;

    expect(arguments_passed[0].alternate_url).toBe("get_pac_users");

  });

});

