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

  document.addEventListener('click', function(e) {
    e.stopPropagation();

    var dropdowns = document.querySelectorAll('.dropdown .menu');

    for (var i = 0; i < dropdowns.length; i++) {
      var dropdown = dropdowns[i];

      dropdown.classList.remove('visible');
    }
  });

  var modals = xpressio.modals = function() {
    var modalsAll = document.querySelectorAll('._modal');

    var openModal = function(event) {
      var element = event.currentTarget;
      var modalId = element.getAttribute('data-modal');

      var thisModal = document.getElementById(modalId);
      var overlay = document.querySelector('.modal-overlay');

      overlay.addEventListener('click', closeModal);

      overlay.classList.add('modal-show');
      thisModal.classList.add('modal-show');
    };

    var closeModal = function() {
      var modalsAllId = document.querySelectorAll('.modal');
      var overlay = document.querySelector('.modal-overlay');

      for (var i = 0; i < modalsAllId.length; i++) {
        var modal = modalsAllId[i];

        modal.classList.remove('modal-show');
      }

      overlay.classList.remove('modal-show');
    };

    for (var i = 0; i < modalsAll.length; i++) {
      var modal = modalsAll[i];

      modal.addEventListener('click', openModal);
    }
  };

  var dropdown = xpressio.dropdown = function() {
    var dropdowns = document.querySelectorAll('.dropdown');

    var openMenu = function(e) {
      e.stopPropagation();
      this.querySelector('.menu').classList.toggle('visible');
    };

    for (var i = 0; i < dropdowns.length; i++) {
      var dropdown = dropdowns[i];

      dropdown.addEventListener('click', openMenu);
    }
  };

  return xpressio;
}).call(this);

document.addEventListener('DOMContentLoaded', function() {
  xpressio.modals();
  xpressio.dropdown();
});