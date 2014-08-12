'use strict'

class Dropdowns
  constructor: ->
    unless @ instanceof Dropdowns
      return new Dropdowns()
    dropdowns      = document.querySelectorAll '.dropdown'
    @dropdownsMenu = document.querySelectorAll '.dropdown .menu'
    dropdown.addEventListener 'click', @openMenu for dropdown in dropdowns
    document.addEventListener 'click', @closeDropownsMenu

  closeDropownsMenu: =>
    dropdownMenu.classList.remove 'visible' for dropdownMenu in @dropdownsMenu

  openMenu: (event) ->
    do event.stopPropagation
    this.querySelector('.menu').classList.toggle 'visible'

module.exports = Dropdowns