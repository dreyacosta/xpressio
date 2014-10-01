'use strict'

xpressio = {}
xpressio.VERSION = '0.4.5'

xpressio.dropdowns = require './xpressio.dropdowns.coffee'
xpressio.modals    = require './xpressio.modals.coffee'

window.xpressio = xpressio if typeof window isnt 'undefined'