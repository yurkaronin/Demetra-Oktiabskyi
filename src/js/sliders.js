// слайдер первый экран
const topSwiper = document.querySelector('.top-slider__swiper');
if (topSwiper) {
  let swiper1 = new Swiper(".top-slider__swiper", {
    slidesPerView: 1,
    loop: true,
    navigation: {
      nextEl: ".top-slider__button-next",
      prevEl: ".top-slider__button-prev",
    },
    pagination: {
      el: ".top-slider__pagination",
      clickable: true,
    },
  });
}

// слайдер по направлениям услуг с иконками
const directionsSwiper = document.querySelector('.services-group-slider__swiper');
if (directionsSwiper) {
  let swiper2 = new Swiper(".services-group-slider__swiper", {
    breakpoints: {
      320: {
        slidesPerView: 2,
        spaceBetween: 15,
      },
      640: {
        slidesPerView: 3,
        spaceBetween: 16,
      },
      1150: {
        slidesPerView: 4,
        spaceBetween: 24,
      },
      1400: {
        slidesPerView: 5,
        spaceBetween: 32,
      }
    },
    slidesPerGroup: 1,
    loopFillGroupWithBlank: true,
    loop: true,
    navigation: {
      nextEl: ".services-group-slider__button-next",
      prevEl: ".services-group-slider__button-prev"
    },
    pagination: {
      el: ".services-group-slider__pagination",
      clickable: true,
    },
  });
}

// слайдер специалистов
const doctorsSwiper = document.querySelector('.doctors-slider__swiper');
if (doctorsSwiper) {
  var swiper = new Swiper(".doctors-slider__swiper", {
    breakpoints: {
      230: {
        slidesPerView: 1,
        spaceBetween: 24,
      },
      950: {
        slidesPerView: 2,
        spaceBetween: 24,
        centeredSlides: false,
      },
      1250: {
        slidesPerView: 'auto',
        spaceBetween: 34,
      }
    },
    centeredSlides: true,
    loop: true,
    loopedSlides: 2,
    loopAdditionalSlides: 2,
    navigation: {
      nextEl: ".doctors-slider__button-next",
      prevEl: ".doctors-slider__button-prev"
    },
    pagination: {
      el: ".doctors-slider__pagination",
      clickable: true,
    },
  });
}

// Слайдер с текстовыми отзывами
const reviewsSwiper = document.querySelector('.reviews-swiper');
if (reviewsSwiper) {
  var swiper3 = new Swiper(".reviews-swiper", {
    slidesPerView: 1,
    spaceBetween: 20,
    autoHeight: true,
    loop: true,
    navigation: {
      nextEl: ".reviews-slider__button-next",
      prevEl: ".reviews-slider__button-prev",
    },
    slidesPerView: 1,
    spaceBetween: 30,
    freeMode: true,
    pagination: {
      el: ".reviews-slider__pagination",
      clickable: true,
    },
  });
}
