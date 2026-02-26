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