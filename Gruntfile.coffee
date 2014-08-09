module.exports = (grunt) ->
  grunt.initConfig
    stylus:
      theme_default:
        options: compress: true, import: ['__variables']
        files: 'build/xpressio.theme.default.css' : 'source/themes/default/xpressio.theme.*.styl'
      theme_velox:
        options: compress: true, import: ['__variables']
        files: 'build/xpressio.theme.velox.css' : 'source/themes/velox/xpressio.theme.*.styl'

    browserify:
      dist:
        files: 'build/xpressio.js' : ['source/coffee/xpressio.coffee']
      options:
        transform: ['coffeeify']

    watch:
      coffee:
        files: [
          'source/coffee/*.coffee'
        ]
        tasks: ['browserify']

      stylus:
        files: ['source/**/*.styl']
        tasks: ['stylus']

    grunt.loadNpmTasks 'grunt-contrib-stylus'
    grunt.loadNpmTasks 'grunt-contrib-watch'
    grunt.loadNpmTasks 'grunt-browserify'

    grunt.registerTask 'default', ['stylus', 'browserify']