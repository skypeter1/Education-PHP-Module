module.exports = function(grunt) {

  var app_files = ['lib/jquery.js', 'lib/jquery-ui.js','lib/underscore.js', 'lib/backbone.js', 'lib/*.js', 'lib_customization/*.js'
    , 'base/EventBus.js', 'helpers/menu/Menu.js', 'helpers/*/*.js', 'base/BaseView.js', 'base/BaseForm.js'
    , 'base/BaseListView.js'
    , 'base/BaseModel.js', 'base/BaseController.js', 'base/data_types/*.js', 'base/*.js'
    , 'modules/users/*.js', 'modules/cursos/*.js', 'modules/*/*.js'];

  var testing_files = app_files.concat("lib_testing/*.js");
  var specs = ['lib_customization/tests/*.js', 'helpers/**/tests/*.js', 'base/**/tests/*.js', 'modules/*/tests/*.js'];
  var saga_files = testing_files.concat(specs);

  var min_files = app_files.concat(['app.js']);

  grunt.initConfig({
    min: {
      'build': {
        'src': min_files,
        'dest': 'build.js'
      }
    },
    concat: {
      build: {
        src: min_files,
        dest: 'build.js'
      }
    },
    lint: {
      grunt:'grunt.js',
      helpers: 'helpers/*/*.js',
      base:'base/*.js',
      modules:'modules/*/*.js',
      tests:['base/tests/*.js', 'helpers/*/tests/*.js', 'modules/*/tests/*.js']
    },
    watch: {
      files: min_files,
      tasks: 'concat'
    },
    jasmine : {
      src: testing_files,  
      specs: specs,
      junit: {output:'code_reports/junit/'}
    },
    saga : {
      files:saga_files,
      no_instrument_patterns:".+lib/.+js .+lib_testing/.+js .+jasmine.*js .+tests/.+js",
      output: "code_reports"
    },
    jshint: {

      tests: {
        options:{maxstatements:false, laxcomma:true}    
      },

      options: {
        smarttabs: true,
        immed: true,
        latedef: true,
        newcap: true,
        noarg: true,
        sub: true,
        undef: true,
        boss: true,
        eqnull: true,
        //unused: true,
        laxcomma:true,
        maxparams:3,
        browser:true,
        maxdepth:2, 
        maxcomplexity:10
        //maxstatements:10
      },
      globals: {
        $:true, BaseModel:true, BaseForm:true, auth:true,
        console:true, module:true, jQuery: true, _:true,
        sinon:true, afterEach:true, BaseView:true, AppRequest:true,
        TemplateProxy:true, Handlebars:true, Backbone: true, ErrorView: true,
        XDate:true, jasmine : true, describe : false, beforeEach : false,
        expect : false, it : false, spyOn : false, BaseListView:true,
        TableControls:true, SearchForm:true, TableFooter:true, ViewSwitcher:true,
        ConfirmModal:true, TableView:true, BaseCollection:true, BaseController:true,
        Menu:true, MenuItem:true, GeneralErrorView:true, EventBus:true, DateType:true,
        CrudController:true, Curso:true, CursosForm:true, CursosTable:true, 
        BooleanType:true, PacProductCollection:true, Alumno:true, AlumnosForm:true, 
        AlumnosTable:true, PacClientsCollection:true, BodegasCollection:true, 
        CursosCollection:true, MatriculasForm:true, MatriculasCollection:true,
        AlumnosSwitchForm:true, AlumnosCollection:true, FeedbackView:true, Sesion:true,
        SesionesForm:true, SesionesTable:true, User:true, UsersForm:true, UsersTable:true,
        ProveedoresCollection: true, ProfesoresCollection:true, AsistenciasForm:true,
        AsistenciasCollection: true, Examen:true, ExamenesForm:true, ExamenesTable:true,
        CursosController:true, NotasForm:true, NotasCollection: true, PagosForm:true,
        SesionesCollection:true, Pago:true, NotasGridView:true, CursosModalSelection: true,
        UsersController:true, ProfesoresModalSelectable:true, AsistenciaProfesorCollection: true,
        AsistenciaProfesoresTable:true, AsistenciaAlumnosCollection: true, 
        AsistenciaAlumnosTable:true, EmptyModel:true, AlumnosHistoryTable:true,
        AlumnosHistoryCollection:true, ReportTable:true, ReportSearchForm:true,
        Rol:true, RolesForm:true, RolesTable:true, PacUsersCollection:true
      }
    }
  });

  grunt.loadNpmTasks('grunt-jasmine-runner');
  grunt.loadNpmTasks('grunt-saga-runner');  
  grunt.loadNpmTasks('grunt-yui-compressor');  

  // tasks
  grunt.registerTask('default', 'lint jasmine');
  grunt.registerTask('test', 'jasmine');
  grunt.registerTask('test-html', 'jasmine-server');
  grunt.registerTask('coverage', 'saga');
  grunt.registerTask('cc', 'saga-html');

};
