$(function() {
  console.log('Hello Bootstrap5');
});

var swiper = new Swiper(".mySwiper", {
  watchSlidesProgress: true,
  slidesPerView: 3,
  spaceBetween: 24,
  loop: true,
  speed: 1000,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  
  // autoplay: {
  //   delay: 3000,
  //   disableOnInteraction: false
  // },
  // breakpoints: {
  //   768: {
  //     slidesPerView: 2.3
  //   },
  //   1200: {
  //     slidesPerView: 2.88
  //   },
  //   1400: {
  //     slidesPerView: 2.9
  //   }
  // },
});