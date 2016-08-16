module.exports = function(grunt) {
  // load all grunt tasks
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    sass: {
      options: {
        outputStyle: 'expanded'
      },
      compile: {
        files: {
          'web/css/main.css': 'web/scss/main.scss'
        }
      }
    },

    connect: {
      server: {
        options: {
          base: 'web',
          open: true
        }
      }
    },

    watch: {
      options: {
        spawn: false
      },
      css: {
        files: ['web/**/*.scss'],
        tasks: ['sass']
      }
    }
  });

  grunt.registerTask('default', ['sass', 'connect', 'watch']);
};
