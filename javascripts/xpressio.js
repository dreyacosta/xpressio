(function() {
  'use strict';

  var root = this;

  var xpressio = {};

  if (typeof exports !== 'undefined') {
    xpressio = exports;
  } else {
    xpressio = root.xpressio = {};
  }

  xpressio.VERSION = '0.3.5';

  var modals = xpressio.modals = function() {
    var modalsAll = document.querySelectorAll('[data-modal]');

    var openModal = function(event) {
      var element = event.currentTarget;
      var modalId = element.getAttribute('data-modal');
      var thisModal = document.querySelector('[data-modal-id="' + modalId + '"');
      var overlay = document.querySelector('.modal-overlay');

      overlay.addEventListener('click', closeModal);

      overlay.classList.add('modal-show');
      thisModal.classList.add('modal-show');
    }

    var closeModal = function() {
      var modalsAllId = document.querySelectorAll('[data-modal-id]');
      var overlay = document.querySelector('.modal-overlay');

      for (var i = 0; i < modalsAllId.length; i++) {
        var modal = modalsAllId[i];

        modal.classList.remove('modal-show');
      }

      overlay.classList.remove('modal-show');
    }

    for (var i = 0; i < modalsAll.length; i++) {
      var modal = modalsAll[i];

      modal.addEventListener('click', openModal);
    }
  }

  modals();

  return xpressio;
}).call(this);