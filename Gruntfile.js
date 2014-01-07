module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    stylus: {
      compile: {
        options: {
          compress: true
        },
        files: {
          'stylesheets/xpressio.css': ['stylesheets/xpressio.styl']
        }
      }
    },

    imagemin: {
      dist: {
        options: {
          optimizationLevel: 9
        },
        files: [
          {expand: true, src: ['images/*'], dest: 'www/'}
        ]
      }
    },

    copy: {
      target: {
        files: [
          {
            expand: true,
            src: [
              '*.html',
              '*.ico',
              'stylesheets/*.css',
              'font/*'
            ],
            dest: 'www/'
          }
        ]
      }
    },

    jshint: {
      options: {
        boss: true,
        curly: true,
        eqeqeq: true,
        eqnull: true,
        immed: true,
        indent: 2,
        latedef: true,
        laxcomma: true,
        newcap: true,
        noarg: true,
        node: true,
        sub: true,
        undef: true,
        globals: {
          window: true,
          document: true,
          define: true
        },
        ignores: ['assets/javascript/templates/**']
      },
      all: [
        'Gruntfile.js',
        'javascripts/*.js'
      ]
    },

    watch: {
      jshint: {
        files: [
          'Gruntfile.js',
          'javascripts/*.js'
        ],
        tasks: ['jshint']
      },
      stylus: {
        files: ['stylesheets/*.styl'],
        tasks: ['stylus']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-stylus');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task(s).
  grunt.registerTask('default', ['stylus', 'imagemin', 'copy']);

};