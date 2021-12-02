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
const menuButton = document.querySelector('.button-menu');
const mainMenu = document.querySelector('.header');
const menuLink = document.querySelectorAll('.navigation__link');

if (menuButton) {
  menuButton.addEventListener('click', function (r) {
    document.body.classList.toggle('custom-lock');
    menuButton.classList.toggle('active');
    mainMenu.classList.toggle('active');
  });
};

// свернуть меню при клике по пункту меню
document.addEventListener('click', function (event) {
  if (event.target.classList.contains('navigation__link')) {
    mainMenu.classList.remove('active');
    if (document.querySelector('.custom-lock')) {
      document.querySelector('.custom-lock').classList.remove('custom-lock');
    }
  }
});

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
 });

 // Интерактивная карта с гео меткой
 let center = [45.013460, 38.958488];

 function init() {

   let map = new ymaps.Map("map", {
     center: center, // ваши данные
     zoom: 15
   });

   let placemarRkschool = new ymaps.Placemark([45.013460, 38.958488], {}, {
     iconLayout: 'default#image',
     /* говорим что будем отображать на карте в качестве геометки  */
     iconImageHref: '../img/map/balun.svg',
     /* указываем пусть к картинке на нашем сайте  */
     iconImageSize: [56, 80],
     /* размеры картинки  */
     iconImageOffset: [-19, -44] /* отступ от центра  */
   });

   map.controls.remove('geolocationControl'); // удаляем геолокацию
   map.controls.remove('searchControl'); // удаляем поиск
   map.controls.remove('trafficControl'); // удаляем контроль трафика
   map.controls.remove('typeSelector'); // удаляем тип
   map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
   map.controls.remove('zoomControl'); // удаляем контрол зуммирования
   map.controls.remove('rulerControl'); // удаляем контрол правил
   map.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально)

   map.geoObjects.add(placemarRkschool);

   placemarRkschool.events
     .add('mouseenter', function (e) {
       e.get('target').options.set('iconImageHref', '../img/map/balun-2.svg');
     })
     .add('mouseleave', function (e) {
       e.get('target').options.set('iconImageHref', '../img/map/balun.svg');
     });
 }

 ymaps.ready(init);

