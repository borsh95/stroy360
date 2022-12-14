"use strict";

(function () {
  var breakPoints = {};
  document.addEventListener('click', function (e) {
    var $target = e.target; // Кнопка открытия категорий в шапке

    if ($target.closest('.btn-mainmenu-toggle')) {
      document.body.classList.toggle('custom-catalog-menu-open');
    } // закрыте категорий при клике вне категории


    if (document.body.classList.contains('custom-catalog-menu-open') && !$target.closest('.mein-catalog-wrap')) {
      document.body.classList.remove('custom-catalog-menu-open');
    } //header hamburger


    if ($target.closest('.header__hamburger')) {
      $target.closest('.header__hamburger').classList.toggle('active');
      document.body.classList.toggle('burger-open');
    } //header hamburger


    if ($target.closest('.menu__link-arr')) {
      e.preventDefault();
      $target.closest('.menu__link-arr').closest('.menu__item').classList.toggle('menu__item--open');
    }

    if ($target.closest('.js-search-toggle')) {
      var $search = document.querySelector('.js-search-input');
      if (!$search) return;
      document.body.classList.toggle('search-mobile-open');
      $search.focus();
    }

    if (document.body.classList.contains('search-mobile-open') && !$target.closest("[class*=js-search]")) {
      document.body.classList.remove('search-mobile-open');
    }
  });

  if (document.querySelector('.flash-message')) {
    var showMsg = function showMsg() {
      localStorage.setItem('lastView', Date.now());
      flashMsg.classList.add(openedClass);
    };

    var closeMsg = function closeMsg() {
      flashMsg.classList.remove(openedClass);
    }; // flash message


    var flashMsg = document.querySelector('.flash-message');
    var openedClass = 'flash-message--opened';

    if (!localStorage.lastView) {
      showMsg();
    } else if ((Date.now() - +localStorage.lastView) / (1 * 1000 * 3600) >= 1) {
      showMsg();
    }

    flashMsg.addEventListener('click', function (e) {
      if (e.target.closest('.flash-message__close')) {
        closeMsg();
      }
    });
  }

  if ($('.side-slider').length) {
    $('.side-slider').slick({
      autoplay: true,
      autoplaySpeed: 3000,
      infinite: true,
      speed: 600,
      slidesToShow: 1,
      // adaptiveHeight: true,
      fade: true,
      cssEase: 'linear'
    });
  }
})();
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbImJyZWFrUG9pbnRzIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsIiR0YXJnZXQiLCJ0YXJnZXQiLCJjbG9zZXN0IiwiYm9keSIsImNsYXNzTGlzdCIsInRvZ2dsZSIsImNvbnRhaW5zIiwicmVtb3ZlIiwicHJldmVudERlZmF1bHQiLCIkc2VhcmNoIiwicXVlcnlTZWxlY3RvciIsImZvY3VzIiwic2hvd01zZyIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJEYXRlIiwibm93IiwiZmxhc2hNc2ciLCJhZGQiLCJvcGVuZWRDbGFzcyIsImNsb3NlTXNnIiwibGFzdFZpZXciLCIkIiwibGVuZ3RoIiwic2xpY2siLCJhdXRvcGxheSIsImF1dG9wbGF5U3BlZWQiLCJpbmZpbml0ZSIsInNwZWVkIiwic2xpZGVzVG9TaG93IiwiZmFkZSIsImNzc0Vhc2UiXSwibWFwcGluZ3MiOiI7O0FBQUEsYUFBQTtBQUNBLE1BQUFBLFdBQUEsR0FBQSxFQUFBO0FBSUFDLEVBQUFBLFFBQUEsQ0FBQUMsZ0JBQUEsQ0FBQSxPQUFBLEVBQUEsVUFBQUMsQ0FBQSxFQUFBO0FBQ0EsUUFBQUMsT0FBQSxHQUFBRCxDQUFBLENBQUFFLE1BQUEsQ0FEQSxDQUdBOztBQUNBLFFBQUFELE9BQUEsQ0FBQUUsT0FBQSxDQUFBLHNCQUFBLENBQUEsRUFBQTtBQUNBTCxNQUFBQSxRQUFBLENBQUFNLElBQUEsQ0FBQUMsU0FBQSxDQUFBQyxNQUFBLENBQUEsMEJBQUE7QUFDQSxLQU5BLENBUUE7OztBQUNBLFFBQUFSLFFBQUEsQ0FBQU0sSUFBQSxDQUFBQyxTQUFBLENBQUFFLFFBQUEsQ0FBQSwwQkFBQSxLQUFBLENBQUFOLE9BQUEsQ0FBQUUsT0FBQSxDQUFBLG9CQUFBLENBQUEsRUFBQTtBQUNBTCxNQUFBQSxRQUFBLENBQUFNLElBQUEsQ0FBQUMsU0FBQSxDQUFBRyxNQUFBLENBQUEsMEJBQUE7QUFDQSxLQVhBLENBYUE7OztBQUNBLFFB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QUFBLEVBQUE7QUFSQSxLQUFBO0FBVUE7QUFDQSxDQXJGQSxHQUFBIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gKCkge1xyXG5cdGNvbnN0IGJyZWFrUG9pbnRzID0ge1xyXG5cclxuXHR9XHJcblxyXG5cdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcclxuXHRcdGNvbnN0ICR0YXJnZXQgPSBlLnRhcmdldDtcclxuXHJcblx0XHQvLyDQmtC90L7Qv9C60LAg0L7RgtC60YDRi9GC0LjRjyDQutCw0YLQtdCz0L7RgNC40Lkg0LIg0YjQsNC/0LrQtVxyXG5cdFx0aWYgKCR0YXJnZXQuY2xvc2VzdCgnLmJ0bi1tYWlubWVudS10b2dnbGUnKSkge1xyXG5cdFx0XHRkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC50b2dnbGUoJ2N1c3RvbS1jYXRhbG9nLW1lbnUtb3BlbicpO1xyXG5cdFx0fVxyXG5cclxuXHRcdC8vINC30LDQutGA0YvRgtC1INC60LDRgtC10LPQvtGA0LjQuSDQv9GA0Lgg0LrQu9C40LrQtSDQstC90LUg0LrQsNGC0LXQs9C+0YDQuNC4XHJcblx0XHRpZiAoZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuY29udGFpbnMoJ2N1c3RvbS1jYXRhbG9nLW1lbnUtb3BlbicpICYmICEkdGFyZ2V0LmNsb3Nlc3QoJy5tZWluLWNhdGFsb2ctd3JhcCcpKSB7XHJcblx0XHRcdGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnY3VzdG9tLWNhdGFsb2ctbWVudS1vcGVuJyk7XHJcblx0XHR9XHJcblxyXG5cdFx0Ly9oZWFkZXIgaGFtYnVyZ2VyXHJcblx0XHRpZiAoJHRhcmdldC5jbG9zZXN0KCcuaGVhZGVyX19oYW1idXJnZXInKSkge1xyXG5cdFx0XHQkdGFyZ2V0LmNsb3Nlc3QoJy5oZWFkZXJfX2hhbWJ1cmdlcicpLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpO1xyXG5cdFx0XHRkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC50b2dnbGUoJ2J1cmdlci1vcGVuJyk7XHJcblx0XHR9XHJcblxyXG5cdFx0Ly9oZWFkZXIgaGFtYnVyZ2VyXHJcblx0XHRpZiAoJHRhcmdldC5jbG9zZXN0KCcubWVudV9fbGluay1hcnInKSkge1xyXG5cdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG5cdFx0XHQkdGFyZ2V0LmNsb3Nlc3QoJy5tZW51X19saW5rLWFycicpLmNsb3Nlc3QoJy5tZW51X19pdGVtJykuY2xhc3NMaXN0LnRvZ2dsZSgnbWVudV9faXRlbS0tb3BlbicpXHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKCR0YXJnZXQuY2xvc2VzdCgnLmpzLXNlYXJjaC10b2dnbGUnKSkge1xyXG5cdFx0XHRjb25zdCAkc2VhcmNoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmpzLXNlYXJjaC1pbnB1dCcpO1xyXG5cdFx0XHRpZiAoISRzZWFyY2gpIHJldHVybjtcclxuXHJcblx0XHRcdGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnRvZ2dsZSgnc2VhcmNoLW1vYmlsZS1vcGVuJyk7XHJcblx0XHRcdCRzZWFyY2guZm9jdXMoKTtcclxuXHRcdH1cclxuXHJcblx0XHRpZiAoZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuY29udGFpbnMoJ3NlYXJjaC1tb2JpbGUtb3BlbicpICYmICEkdGFyZ2V0LmNsb3Nlc3QoXCJbY2xhc3MqPWpzLXNlYXJjaF1cIikpIHtcclxuXHRcdFx0ZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdzZWFyY2gtbW9iaWxlLW9wZW4nKTtcclxuXHRcdH1cclxuXHR9KVxyXG5cclxuXHJcblx0aWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mbGFzaC1tZXNzYWdlJykpIHtcclxuXHRcdGNvbnN0IGZsYXNoTXNnID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZsYXNoLW1lc3NhZ2UnKTtcclxuXHRcdGNvbnN0IG9wZW5lZENsYXNzID0gJ2ZsYXNoLW1lc3NhZ2UtLW9wZW5lZCc7XHJcblxyXG5cdFx0aWYgKCFsb2NhbFN0b3JhZ2UubGFzdFZpZXcpIHtcclxuXHRcdFx0c2hvd01zZygpO1xyXG5cdFx0fSBlbHNlIGlmICgoRGF0ZS5ub3coKSAtICtsb2NhbFN0b3JhZ2UubGFzdFZpZXcpIC8gKDEgKiAxMDAwICogMzYwMCkgPj0gMSkge1xyXG5cdFx0XHRzaG93TXNnKCk7XHJcblx0XHR9XHJcblxyXG5cdFx0ZnVuY3Rpb24gc2hvd01zZygpIHtcclxuXHRcdFx0bG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2xhc3RWaWV3JywgRGF0ZS5ub3coKSk7XHJcblxyXG5cdFx0XHRmbGFzaE1zZy5jbGFzc0xpc3QuYWRkKG9wZW5lZENsYXNzKTtcclxuXHRcdH1cclxuXHJcblx0XHRmdW5jdGlvbiBjbG9zZU1zZygpIHtcclxuXHRcdFx0Zmxhc2hNc2cuY2xhc3NMaXN0LnJlbW92ZShvcGVuZWRDbGFzcyk7XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gZmxhc2ggbWVzc2FnZVxyXG5cdFx0Zmxhc2hNc2cuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xyXG5cdFx0XHRpZiAoZS50YXJnZXQuY2xvc2VzdCgnLmZsYXNoLW1lc3NhZ2VfX2Nsb3NlJykpIHtcclxuXHRcdFx0XHRjbG9zZU1zZygpO1xyXG5cdFx0XHR9XHJcblx0XHR9KVxyXG5cdH1cclxuXHJcblx0aWYgKCQoJy5zaWRlLXNsaWRlcicpLmxlbmd0aCkge1xyXG5cdFx0JCgnLnNpZGUtc2xpZGVyJykuc2xpY2soe1xyXG5cdFx0XHRhdXRvcGxheTogdHJ1ZSxcclxuXHRcdFx0YXV0b3BsYXlTcGVlZDogMzAwMCxcclxuXHRcdFx0aW5maW5pdGU6IHRydWUsXHJcblx0XHRcdHNwZWVkOiA2MDAsXHJcblx0XHRcdHNsaWRlc1RvU2hvdzogMSxcclxuXHRcdFx0Ly8gYWRhcHRpdmVIZWlnaHQ6IHRydWUsXHJcblx0XHRcdGZhZGU6IHRydWUsXHJcblx0XHRcdGNzc0Vhc2U6ICdsaW5lYXInXHJcblx0XHR9KTtcclxuXHR9XHJcbn0oKSk7Il19
