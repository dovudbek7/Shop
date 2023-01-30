let swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
      el: '.swiper-pagination',
      clickable:true,
      dynamicBullets:true,
    },
    pagination: {
      el: ".swiper-pagination",
    },
    mousewheel: true,
    keyboard: true,
    scrollbar: {
        el: '.swiper-scrollbar',
      },
      loop:true,
    grabCursor:true,
    spaceBetween:20,
    
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    // breakpoints: {
    //     0: {
    //         slidesPerView: 1,
    //     },
    //     100 : {
    //         slidesPerView: 2,
    //     },
    //     991: {
    //         slidesPerView: 3,
    //     },
    // },
  });
  