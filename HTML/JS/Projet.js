var mySwiper = new Swiper(".swiper-container", {
  direction: "vertical",
  loop: true,
  speed: 1000,
  parallax: true,
  grabCursor: true,
  effect: "slide",
  
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  mousewheel: {
    enabled: true,
    sensitivity: 1,
  },

  autoplay: false
});