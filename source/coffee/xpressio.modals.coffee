'use strict'

modals = ->
  modalsAll = document.querySelectorAll '[data-toggle="modal"]'

  closeModal = ->
    modalsAllId = document.querySelectorAll '.modal'
    overlay     = document.querySelector '.modal-overlay'

    modal.classList.remove 'modal-show' for modal in modalsAllId

    overlay.classList.remove 'modal-show'

  openModal = (event) ->
    element = event.currentTarget
    modalId = element.getAttribute 'data-target'

    thisModal = document.getElementById modalId
    overlay   = document.querySelector '.modal-overlay'

    overlay.addEventListener 'click', closeModal

    overlay.classList.add 'modal-show'
    thisModal.classList.add 'modal-show'

  modal.addEventListener 'click', openModal for modal in modalsAll

  return

module.exports = modals