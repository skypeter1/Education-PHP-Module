module.exports = function (grunt) {

  var app_files = [
    'lib/jquery.js',      'lib/jquery-ui.js',       'lib/underscore.js',    'lib/backbone.js',
    'lib/*.js',           'lib_customization/*.js', 'base/EventBus.js',     'helpers/menu/Menu.js',
    'helpers/*/*.js',     'base/BaseView.js',       'base/BaseForm.js',     'base/BaseListView.js',
    'base/BaseModel.js',  'base/BaseController.js', 'base/data_types/*.js', 'base/*.js',
    'modules/users/*.js', 'modules/cursos/*.js',    'modules/*/*.js'
  ];

  var app_files_without_libs = ['helpers/*/*.js', 'base/*.js', 'modules/*/*.js'];

  var testing_files = app_files.concat("lib_testing/*.js");
  var specs = ['lib_customization/tests/*.js', 'helpers/**/tests/*.js', 'base/**/tests/*.js', 'modules/*/tests/*.js'];
  var saga_files = testing_files.concat(specs);

  var min_files = app_files.concat(['app.js']);
  grunt.initConfig({
    uglify: {
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
    watch: {
      files: min_files,
      tasks: 'concat'
    },

    jshint: {
      tests: {
        options: {maxstatements: false, laxcomma: true},
        src: ['base/tests/*.js', 'helpers/*/tests/*.js', 'modules/*/tests/*.js']
      },
      all: app_files_without_libs,
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
        laxcomma: true,
        maxparams: 3,
        browser: true,
        maxdepth: 2,
        maxcomplexity: 10,
        //maxstatements:10
        globals: {
          $: true, BaseModel: true, BaseForm: true, Auth: true, auth: true,
          console: true, module: true, jQuery: true, _: true,
          sinon: true, afterEach: true, BaseView: true, AppRequest: true,
          TemplateProxy: true, Handlebars: true, Backbone: true, ErrorView: true,
          XDate: true, jasmine: true, describe: false, beforeEach: false,
          expect: false, it: false, spyOn: false, BaseListView: true,
          TableControls: true, SearchForm: true, TableFooter: true, ViewSwitcher: true,
          ConfirmModal: true, TableView: true, BaseCollection: true, BaseController: true,
          Menu: true, MenuItem: true, GeneralErrorView: true, EventBus: true, DateType: true,
          CrudController: true, Curso: true, CursosForm: true, CursosTable: true,
          BooleanType: true, PacProductCollection: true, Alumno: true, AlumnosForm: true,
          AlumnosTable: true, PacClientsCollection: true, BodegasCollection: true,
          CursosCollection: true, MatriculasForm: true, MatriculasCollection: true,
          AlumnosSwitchForm: true, AlumnosCollection: true, FeedbackView: true, Sesion: true,
          SesionesForm: true, SesionesSearchForm: true, SesionesTable: true,
          User: true, UsersForm: true, UsersTable: true,
          ProveedoresCollection: true, ProfesoresCollection: true, AsistenciasForm: true,
          AsistenciasCollection: true, Examen: true, ExamenesForm: true, ExamenesTable: true,
          CursosController: true, NotasForm: true, NotasCollection: true, PagosForm: true,
          SesionesCollection: true, Pago: true, NotasGridView: true, CursosModalSelection: true,
          UsersController: true, ProfesoresModalSelectable: true, AsistenciaProfesorCollection: true,
          AsistenciaProfesoresTable: true, AsistenciaAlumnosCollection: true,
          AsistenciaAlumnosTable: true, EmptyModel: true, AlumnosHistoryTable: true,
          AlumnosHistoryCollection: true, ReportTable: true, ReportSearchForm: true,
          Rol: true, RolesForm: true, RolesTable: true, PacUsersCollection: true,
          SesionesController: true, BaseRouter: true, RolesController: true, PagosController: true,
          RolesController: true, ExamenesController: true, setFixtures: true, Loader: true, Validator: true,
          AlumnosHistoryController: true, AlumnosSwitchController: true, AlumnosController: true,
          AsistenciaAlumnosController: true, AsistenciaProfesorController: true,
          NominaController: true, NominaCollection: true, NominaTable: true, NominaSearchForm: true,
          ReportController: true, ErrorsController: true,
          NotasGridController: true
        }
      }
    },
    karma: {
      unit: {
        options: {
          files: saga_files//  JASMINE,
        },
        singleRun: true,
        browsers: ['PhantomJS'],
        frameworks: ['jasmine'],
        // coverage reporter generates the coverage
        reporters: ['progress', 'coverage'],

        preprocessors: {
          // source files, that you wanna generate coverage for
          // do not include tests or libraries
          // (these files will be instrumented by Istanbul)

          'base/*.js': 'coverage',
          'helpers/*/*.js': 'coverage',
          'modules/*/*.js': 'coverage'
        },
        coverageReporter: {
          type: 'text-summary', //'html' -> for html report, 'text-summary' -> for console report
          dir: 'coverage/'
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-karma');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-watch');
  // tasks
  grunt.registerTask('default', [
    'jshint',
    'karma',
    'concat',
    'uglify'/*,
    'watch'*/
  ]);
};