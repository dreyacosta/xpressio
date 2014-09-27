"use strict"

browserify = require "browserify"
gulp       = require "gulp"
stylus     = require "gulp-stylus"
source     = require "vinyl-source-stream"

source =
  default: [
    'source/themes/default/__variables.styl'
    'source/themes/default/xpressio.theme.default.styl'
  ]

gulp.task "stylus", ->
  gulp.src source.default
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