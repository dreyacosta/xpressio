module.exports = (grunt) ->
  grunt.initConfig
    coffee:
      compile: files: 'build/reactive.js' : 'source/reactive.coffee'

    jshint:
      options:
        boss: true
        curly: true
        eqeqeq: true
        eqnull: true
        immed: true
        indent: 2
        latedef: true
        laxcomma: true
        newcap: true
        noarg: true
        node: true
        sub: true
        undef: true
        globals:
          window: true
          document: true
          define: true
        ignores: ['assets/javascript/templates/**']
      all: [
        'Gruntfile.js'
        'javascripts/*.js'
      ]

    stylus:
      theme_default:
        options: compress: true
        files: 'build/xpressio.theme.default.css' : 'source/stylesheets/xpressio.styl'

    watch:
      jshint:
        files: [
          'Gruntfile.js',
          'javascripts/*.js'
        ]
        tasks: ['jshint']

      stylus:
        files: ['stylesheets/*.styl']
        tasks: ['stylus']

    grunt.loadNpmTasks 'grunt-contrib-jshint'
    grunt.loadNpmTasks 'grunt-contrib-stylus'
    grunt.loadNpmTasks 'grunt-contrib-watch'

    grunt.registerTask 'default', []