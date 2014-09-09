"use strict"

browserify = require "browserify"
gulp       = require "gulp"
source     = require "vinyl-source-stream"

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