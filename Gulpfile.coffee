"use strict"

browserify = require "browserify"
gulp       = require "gulp"
stylus     = require "gulp-stylus"
concat     = require "gulp-concat"
source     = require "vinyl-source-stream"


source =
  core: [
    'source/stylesheets/*.styl'
  ]
  default: [
    'source/themes/default/__variables.styl'
    'source/themes/default/xpressio.theme.*.styl'
  ]
  velox: [
    'source/themes/velox/__variables.styl'
    'source/themes/velox/xpressio.theme.landing.styl'
    'source/themes/velox/xpressio.theme.default.styl'
    'source/themes/velox/xpressio.theme.prism.styl'
  ]


gulp.task "stylus", ->
  gulp.src source.default
    .pipe concat 'xpressio.default.styl'
    .pipe stylus
      compress: true
      errors: true
    .pipe gulp.dest('build/')

  gulp.src source.velox
    .pipe concat 'xpressio.velox.styl'
    .pipe stylus
      compress: true
      errors: true
    .pipe gulp.dest('build/')


gulp.task "browserify", ->
  bundler = browserify
    entries: [
      "./source/coffee/xpressio.coffee"
    ]
    extensions: ['.coffee']
    debug: true

  bundler.transform "coffeeify"

  bundler.bundle()
    .pipe source "xpressio.js"
    .pipe gulp.dest "./build"


gulp.task "default", ->
  gulp.watch source.core, ['stylus']
  gulp.watch source.default, ['stylus']
  gulp.watch source.velox, ['stylus']