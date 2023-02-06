let swiper = new Swiper(".mySwiper", {
  // spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    // clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  slidesPerView: 4,


});
let swiper2 = new Swiper(".mySwiper2", {
  spaceBetween: 30,
  // centeredSlides: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    // clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});


let header_wrapper = document.querySelector(".header_wrapper"),
  modal_wrapper_icon = document.querySelectorAll(".modal_wrapper-icon"),
  search_box = document.querySelector(".search_box"),
  modal_wrapper = document.querySelector(".modal_wrapper"),
  menu = document.querySelector(".menu"),
  toggle_menu = document.querySelector(".toggle_menu"),
  product_cards = document.querySelectorAll('.product_card'),
  product_card_cart_btns = document.querySelectorAll(".product_card-cart-btn"),
  search_box_input = document.querySelector(".search_box-input"),
  search_engine_style = `display: flex`,
  search_engine_none_style = `display: none`;

window.addEventListener("scroll", () => {
  let window_scroll = window.scrollY;

  if (window_scroll > 45) {
    header_wrapper.style.top = 0;
  } else {
    header_wrapper.style.top = `60px`;
  }
});

// window.addEventListener("load", () => {
//   localStorage.clear()
// })

modal_wrapper_icon.forEach((elem) => {
  elem.addEventListener("click", () => {
    search_box.classList.toggle("default");
    modal_wrapper.classList.toggle("default");
  });
});

toggle_menu.addEventListener("click", () => {
  menu.classList.toggle("default");
  toggle_menu.classList.toggle("default");
});

product_card_cart_btns.forEach(elem => {
  counter = 0
  elem.addEventListener('click', () => {
    counter++
    childs_element = elem.parentElement.children
    let childrens = ["product_image", "title", "price"]
    for (let item = 0; item < childrens.length; item++) {
      if (item == 0) {
        localStorage.setItem(`${childrens[item]}${counter}`, childs_element[item].src)
      } else if (item == 1 || item == 2) {
        localStorage.setItem(`${childrens[item]}${counter}`, childs_element[item].textContent)
      }
    }

  })
})

product_cards.forEach(elem => {
  let word = elem.dataset.word.split(",")
  // console.log(word);
  word.forEach(data_word => {
    // console.log(data_word);
    if (data_word == "camera") {
      console.log(true);
    }
  })
})