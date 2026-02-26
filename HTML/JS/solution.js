const config = {
  scrollDelay: 1500,
  autoPlayDelay: 6000,
  animationExitDuration: 700,
};

let currentSlide = 0;
const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");
const totalSlides = slides.length;
let isScrolling = false;

const portfolioData = [
  {
    number: "01 / 02",
    title: "Web Development",
    description: "Le pôle Web Development assure la conception de plateformes performantes alliant une architecture technique robuste à une ergonomie fluide. Chaque solution est développée sur mesure pour garantir une rapidité d'exécution optimale et une adaptabilité parfaite aux enjeux de votre activité."
  },
  {
    number: "02 / 02",
    title: "Mobile Applications",
    description: "Le développement Mobile App conçoit des solutions natives ou hybrides fluides et performantes sur les environnements iOS et Android. Chaque interface est optimisée pour exploiter pleinement les fonctionnalités des appareils afin d'offrir une expérience utilisateur intuitive et engageante."
  }
];

function updateContent(index) {
  const data = portfolioData[index];
  const elements = ["portfolioNumber", "portfolioTitle", "portfolioDescription"];
  const portfolioButton = document.querySelector(".portfolio-button");

  elements.forEach((id) => {
    document.getElementById(id).style.animation = "fadeOutDown 0.4s ease-in forwards";
  });
  portfolioButton.style.animation = "fadeOutDown 0.4s ease-in forwards";

  setTimeout(() => {
    document.getElementById("portfolioNumber").textContent = data.number;
    document.getElementById("portfolioTitle").textContent = data.title;
    document.getElementById("portfolioDescription").textContent = data.description;

    document.getElementById("portfolioNumber").style.animation = "slideInFromTop 0.8s ease-out 0.2s forwards";
    document.getElementById("portfolioTitle").style.animation = "bounceIn 1s ease-out 0.4s forwards";
    document.getElementById("portfolioDescription").style.animation = "fadeInUp 0.8s ease-out 0.6s forwards";
    portfolioButton.style.animation = "floatIn 0.8s ease-out 0.8s forwards";
  }, config.animationExitDuration);
}

function showSlide(index) {
  slides.forEach((slide) => slide.classList.remove("active"));
  dots.forEach((dot) => dot.classList.remove("active"));

  slides[index].classList.add("active");
  dots[index].classList.add("active");

  updateContent(index);
  currentSlide = index;
}

function nextSlide() {
  const next = (currentSlide + 1) % totalSlides;
  showSlide(next);
}

function prevSlide() {
  const prev = (currentSlide - 1 + totalSlides) % totalSlides;
  showSlide(prev);
}

window.addEventListener("wheel", (e) => {
  if (isScrolling) return;

  isScrolling = true;
  if (e.deltaY > 0) {
    nextSlide();
  } else {
    prevSlide();
  }

  setTimeout(() => {
    isScrolling = false;
  }, config.scrollDelay);
});

let touchStartY = 0;
window.addEventListener("touchstart", (e) => {
  touchStartY = e.touches[0].clientY;
});

window.addEventListener("touchend", (e) => {
  if (isScrolling) return;

  const touchEndY = e.changedTouches[0].clientY;
  const diff = touchStartY - touchEndY;

  if (Math.abs(diff) > 50) {
    isScrolling = true;
    if (diff > 0) {
      nextSlide();
    } else {
      prevSlide();
    }

    setTimeout(() => {
      isScrolling = false;
    }, config.scrollDelay);
  }
});

dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    if (!isScrolling) {
      showSlide(index);
    }
  });
});

window.addEventListener("keydown", (e) => {
  if (isScrolling) return;

  if (e.key === "ArrowDown" || e.key === "ArrowRight") {
    nextSlide();
  } else if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
    prevSlide();
  }
});

setInterval(nextSlide, config.autoPlayDelay);