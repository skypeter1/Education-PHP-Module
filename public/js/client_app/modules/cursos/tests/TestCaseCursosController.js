describe("CursosController", function () {
    it("has cursos namespace and Curso as his model", function () {

        var controller = new CursosController(new BaseRouter());
        expect(controller.namespace).toBe("cursos");

        var expected_model = new controller.model();
        expect(expected_model instanceof Curso).toBe(true);

    });

    it("has CursosForm as his form", function () {

        var controller = new CursosController(new BaseRouter());

        expect(controller.form instanceof CursosForm).toBe(true);

    });

    it("has CursosTable as his list", function () {

        var controller = new CursosController(new BaseRouter());

        expect(controller.list instanceof CursosTable).toBe(true);

    });

    it("executes render_form on form can:render event", function () {

        var controller = new CursosController(new BaseRouter());
        spyOn(controller, "render_form");
        controller.form.trigger("got:template");
        expect(controller.render_form).toHaveBeenCalled();
    });

    it("fetch pac_products list and fetches bodegas collection on pac_products fetch success", function () {

        var controller = new CursosController(new BaseRouter());
        spyOn(controller.pac_products, "fetch");
        spyOn(controller.form, "render_template");

        controller.render_form();
        expect(controller.pac_products.fetch).wasCalled();

        spyOn(controller.form, "set_pac_products");

        controller.pac_products.trigger("fetch:success", {data: {list: "bodegas"}});

        expect(controller.form.set_pac_products).wasCalledWith("bodegas");
        expect(controller.form.render_template).toHaveBeenCalled();

    });

    it("sets on add prematricula, cupos minimo y maximo as default", function () {

        var controller = new CursosController();

        controller.add();

        expect(controller.form.template_values.precio_prematricula).toEqual(25);
        expect(controller.form.template_values.cupos_minimo).toEqual(6);
        expect(controller.form.template_values.cupos_maximo).toEqual(12);

    });

    it("should search by default current profesor on index", function () {
        var controller = new CursosController();
        document.help_vars = {current_user: {rol: "profesor", name: "profesor_name"}};
        spyOn(CrudController.prototype, "index").andCallFake(function () {
            expect(controller.list.search_form.search_term).toBe("profesor_name");
            var expected_filter = {'property': "GLOBAL", 'pattern': "profesor_name", 'method': "LIKE"};
            expect(controller.list.collection.status.filters[0]).toEqual(expected_filter);
        });

        controller.index();
    });

    it("should search nothing by default if user is not profesor", function () {
        var controller = new CursosController();
        document.help_vars = {current_user: {rol: "not profesor", name: "profesor_name"}};
        spyOn(CrudController.prototype, "index").andCallFake(function () {
            expect(controller.list.search_form.search_term === undefined).toBe(true);
            expect(controller.list.collection.status.filters === undefined).toBe(true);
        });

        controller.index();
    });
});
