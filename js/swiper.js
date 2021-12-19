var swi = new Swiper('.swiper-container', {
    autoplay: true,
    speed: 300,
    slidesPerView: 1.5,
    spaceBetween:10,
    centeredSlides : true,
    loop: true,
    pagination: {
      el: '.swiper-',
      clickable: true,
    },
  });

// var swiper = new Swiper('.swiper-container');

// var swiper = new Swiper('.swiper-container', {
//   scrollbar: {
//     el: '.swiper-scrollbar',
//     hide: true,
//   },
// });