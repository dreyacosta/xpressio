xpressio = {}

if typeof module isnt 'undefined'
  if module.exports
    exports = module.exports = xpressio
  exports.xpressio = xpressio

window.xpressio = xpressio if typeof window isnt 'undefined'