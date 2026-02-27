var mySwiper = new Swiper(".swiper-container", {
  direction: "vertical",
  loop: true,
  speed: 1000,
  grabCursor: true,
  mousewheel: true,
  keyboard: true,
  effect: "creative",
  creativeEffect: {
    prev: {
      shadow: true,
      translate: [0, "-120%", -500],
    },
    next: {
      shadow: true,
      translate: [0, "120%", -500],
    },
  },
});

// Swiper pour les projets Web (Portfolio)
var webSwiper = new Swiper(".web-project-swiper", {
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});