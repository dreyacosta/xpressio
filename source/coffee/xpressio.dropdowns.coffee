'use strict'

class Dropdowns
  constructor: ->
    unless @ instanceof Dropdowns
      return new Dropdowns()
    dropdowns = document.querySelectorAll '.dropdown'
    dropdown.addEventListener 'click', @openMenu for dropdown in dropdowns

  openMenu: ->
    this.querySelector('.menu').classList.toggle 'visible'

module.exports = Dropdowns