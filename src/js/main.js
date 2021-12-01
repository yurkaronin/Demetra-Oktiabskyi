"use strict";
// прилипающее меню в шапке
window.onscroll = function showHeader() {
  var header = document.querySelector('.header');

  if (window.pageYOffset > header.offsetHeight) {
    header.classList.add('sticky');
  } else {
    header.classList.remove('sticky');
  }
}

// кнопка меню
var menuButton = document.querySelector('.button-menu');
if (menuButton) {
  let mainMenu = document.querySelector('.mobile-main-nav');
  menuButton.addEventListener('click', function (r) {
    document.body.classList.toggle('custom-lock');
    menuButton.classList.toggle('active');
    mainMenu.classList.toggle('active');
  });
}

// кнопка поиска в шапке
let searchButton = document.querySelector('.button-search');
if (searchButton) {
  let headerSearch = document.querySelector('.header__search-form');
  searchButton.addEventListener('click', function (r) {
    searchButton.classList.toggle('active');
    headerSearch.classList.toggle('active');
  });
}

// кнопка аккордеона в меню
let mobMenu = document.querySelectorAll(".main-nav-mobile");
let subList = document.querySelectorAll(".sublist-nav");
let subMenuButton = document.querySelectorAll('.toggle-btn').forEach((item) =>
  item.addEventListener('click', () => {
    item.classList.toggle('active');
    subList.classList.toggle('active');
    mobMenu.classList.toggle('active');
  })
);

// Диалоговые окна
const btns = document.querySelectorAll('.btn');
const modalOverlay = document.querySelector('.modal-overlay ');
const modals = document.querySelectorAll('.modal');
const buttonClose = document.querySelectorAll('.modal');

btns.forEach((el) => {
  el.addEventListener('click', (e) => {
    let path = e.currentTarget.getAttribute('data-path');

    modals.forEach((el) => {
      el.classList.remove('modal--visible');
      document.body.classList.toggle('custom-lock');
    });

    document.querySelector(`[data-target="${path}"]`).classList.add('modal--visible');
    modalOverlay.classList.add('modal-overlay--visible');
    document.body.classList.toggle('custom-lock');
  });
});

modalOverlay.addEventListener('click', (e) => {

  if (e.target == modalOverlay) {
    modalOverlay.classList.remove('modal-overlay--visible');
    document.body.classList.toggle('custom-lock');
    modals.forEach((el) => {
      el.classList.remove('modal--visible');
      document.body.classList.toggle('custom-lock');
    });
  }

  if (e.target.classList.contains('modal-close')) {
    modalOverlay.classList.remove('modal-overlay--visible');
    document.body.classList.toggle('custom-lock');
    modals.forEach((el) => {
      el.classList.remove('modal--visible');
      document.body.classList.toggle('custom-lock');
    });
  }

  if (e.target.classList.contains('button--close-text')) {
    modalOverlay.classList.remove('modal-overlay--visible');
    document.body.classList.toggle('custom-lock');
    modals.forEach((el) => {
      el.classList.remove('modal--visible');
      document.body.classList.toggle('custom-lock');
    });
  }
});

// Кастомная валидация форм
(function () {
  window.addEventListener("click", function (event) {

    if (event.target.classList.contains("js-validate")) {

      const formParent = event.target.closest("form");

      formParent.querySelectorAll(".custom-form__item-wrapper").forEach(function (item) {
        console.log(item)
        if (item.querySelector("[data-required]")) {
          if (item.querySelector("[data-required]").value === '') {
            console.log("не заполнен")
            item.classList.add("js-field-error");
          } else {
            console.log("заполнен")
            item.classList.remove("js-field-error");
          }
        }
      });
    }
  })
})();

// маска для поля с телефоном
Inputmask("+7 (999) 999-99-99").mask('[type="tel"]');

// Кастомный select
const elements = document.querySelectorAll('.custom-select__list');

if (elements) {
  let nameSelect;
  for (let i = 0, customName = 1; i < elements.length; i++) {
    elements[i].setAttribute('data-name', `select${customName}`);
    nameSelect = elements[i].getAttribute('data-name');


    const example = new Choices(`[data-name='${nameSelect}']`, {
      itemSelectText: '',
      searchEnabled: false,
      placeholder: false,
    });

    customName++;
  }
};

 SmoothScroll({
   // Время скролла 400 = 0.4 секунды
   animationTime: 800,
   // Размер шага в пикселях
   stepSize: 75,

   // Дополнительные настройки:

   // Ускорение
   accelerationDelta: 30,
   // Максимальное ускорение
   accelerationMax: 2,

   // Поддержка клавиатуры
   keyboardSupport: true,
   // Шаг скролла стрелками на клавиатуре в пикселях
   arrowScroll: 50,

   // Pulse (less tweakable)
   // ratio of "tail" to "acceleration"
   pulseAlgorithm: true,
   pulseScale: 4,
   pulseNormalize: 1,

   // Поддержка тачпада
   touchpadSupport: true,
 })
