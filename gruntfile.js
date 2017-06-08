module.exports = function(grunt) {

  grunt.initConfig({
    sass: {
      dist: {
        files: {
          'src/assets/css/app.css': 'src/assets/scss/app.scss'
        }
      }
    },

    watch: {
      sass: {
        files: ['src/assets/scss/*.scss'],
        tasks: ['sass']
      },
      html: {
        files: ['src/index.html'],
        options: {
          livereload: true
        }
      }
    },

    browserSync: {
      dev: {
        bsFiles: {
          src : [
            'src/assets/css/*.css',
            'src/index.html',
          ]
        },
        options: {
          watchTask: true,
          server: './src'
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-browser-sync');

  grunt.registerTask('default', ['sass', 'browserSync', 'watch']);
};
