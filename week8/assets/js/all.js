"use strict";

$(function () {
  console.log('Hello Bootstrap5');
});
var swiper = new Swiper(".mySwiper", {
  watchSlidesProgress: true,
  slidesPerView: 1,
  spaceBetween: 0,
  loop: true,
  speed: 1000,
  centeredSlides: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
  // autoplay: {
  //   delay: 3000,
  //   disableOnInteraction: false
  // },
  breakpoints: {
    768: {
      slidesPerView: 3,
      spaceBetween: 24
    }
  }
});
//# sourceMappingURL=all.js.map
