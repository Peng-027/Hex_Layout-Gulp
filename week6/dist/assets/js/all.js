"use strict";

$(function () {// console.log('Hello Bootstrap5');
}); //program

var program_swiper = new Swiper(".program-swiper", {
  slidesPerView: 9,
  spaceBetween: 16,
  autoplay: true,
  loop: true
}); //join

var join_swiper = new Swiper(".join-swiper", {
  autoplay: true,
  loop: true,
  pagination: {
    el: ".join-pagination"
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  }
}); // aos

AOS.init({
  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120,
  // offset (in px) from the original trigger point
  delay: 0,
  // values from 0 to 3000, with step 50ms
  duration: 400,
  // values from 0 to 3000, with step 50ms
  easing: 'ease',
  // default easing for AOS animations
  once: true,
  // whether animation should happen only once - while scrolling down
  mirror: false,
  // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom' // defines which position of the element regarding to window should trigger the animation

}); // date

var elem = document.querySelector('input[name="inputDate"]');
var datepicker = new Datepicker(elem, {
  autohide: true,
  language: 'zh-TW',
  buttonClass: 'btn',
  format: "yyyy/mm/dd"
});
//# sourceMappingURL=all.js.map
