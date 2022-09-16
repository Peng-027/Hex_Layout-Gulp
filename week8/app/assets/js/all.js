$(function() {
  console.log('Hello Bootstrap5');

  $("#nav-profile-tab").on('click', function(){

    // //當圖片讀取完畢才執行
    // $('.introduce-fall').imagesLoaded(function () {
    //   //選擇瀑布流的區塊名稱
    //   $('.introduce-fall').masonry({
    //     itemSelector: ".item"
    //   })
    // });
    

  })



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
    clickable: true,
  },

  // autoplay: {
  //   delay: 3000,
  //   disableOnInteraction: false
  // },

  breakpoints: {

    768:{
      slidesPerView: 3,
      spaceBetween: 24,
    }
  },

});