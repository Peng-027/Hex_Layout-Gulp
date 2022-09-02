"use strict";

$(function () {
  // console.log('Hello Bootstrap5');
  //program
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
  });
});
//# sourceMappingURL=all.js.map
