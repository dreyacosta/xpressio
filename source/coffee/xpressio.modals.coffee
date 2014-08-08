class Modals
  constructor: ->
    unless @ instanceof Modals
      return new Modals()
    @overlay = document.querySelector '.modal-overlay'
    modals   = document.querySelectorAll '[data-toggle="modal"]'
    modal.addEventListener 'click', @openModal for modal in modals
    @overlay.addEventListener 'click', @closeModal

  closeModal: =>
    @modalTarget.classList.remove 'modal-show'
    @overlay.classList.remove 'modal-show'

  openModal: (event) =>
    modalTargetId = event.currentTarget.dataset.target
    @modalTarget  = document.getElementById modalTargetId
    @overlay.classList.add 'modal-show'
    @modalTarget.classList.add 'modal-show'

module.exports = Modals