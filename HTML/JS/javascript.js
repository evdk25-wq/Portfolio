const menuButton = document.querySelector(".menu-button");
const menuOverlay = document.querySelector(".menu-overlay");
const container = document.querySelector(".container");
const body = document.body;

gsap.registerPlugin(ScrollTrigger, CustomEase);

CustomEase.create("easeOutFast", "M0,0 C0.25,0.1 0.25,1 1,1");
CustomEase.create("easeInFast", "M0,0 C0.5,0 0.75,0.2 1,1");

function openMenu() {
  menuButton.classList.add("is-active");
  body.classList.add("menu-open");

  if (container) {
    gsap.to(container, {
      x: "100px",
      duration: 0.8,
      ease: "easeOutFast"
    });
  }
}

function closeMenu() {
  if (container) {
    gsap.to(container, {
      x: "0px",
      duration: 0.6,
      ease: "easeInFast",
      onComplete: () => {
        menuButton.classList.remove("is-active");
        body.classList.remove("menu-open");
      }
    });
  } else {
    menuButton.classList.remove("is-active");
    body.classList.remove("menu-open");
  }
}

function toggleMenu() {
  const isMenuOpen = menuButton.classList.contains("is-active");
  if (isMenuOpen) {
    closeMenu();
  } else {
    openMenu();
  }
}

menuButton.addEventListener("click", toggleMenu);

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && menuButton.classList.contains("is-active")) {
    closeMenu();
  }
});

window.addEventListener("DOMContentLoaded", () => {
  gsap.fromTo(
    ".fixed-menu",
    { x: -120, opacity: 0 },
    { x: 0, opacity: 1, duration: 0.6, ease: "power2.out", delay: 0.1 }
  );
});

const next = document.querySelector(".next");
const prev = document.querySelector(".prev");
const slideContainer = document.querySelector(".slide");

if (next && prev && slideContainer) {
  next.addEventListener("click", () => {
    const items = document.querySelectorAll(".item");
    slideContainer.appendChild(items[0]);
  });

  prev.addEventListener("click", () => {
    const items = document.querySelectorAll(".item");
    slideContainer.prepend(items[items.length - 1]);
  });
}

window.shareSite = async function(e) {
  e.preventDefault();
  if (navigator.share) {
    try {
      await navigator.share({
        title: "Webfrabiks Portfolio",
        url: window.location.href
      });
    } catch (err) {
      console.error(err);
    }
  } else {
    alert("Le partage n'est pas supporté sur ce navigateur.");
  }
};