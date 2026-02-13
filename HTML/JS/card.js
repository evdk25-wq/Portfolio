
const buttons = document.querySelectorAll(".card-buttons button");
const sections = document.querySelectorAll(".card-section");
const card = document.querySelector(".card");

buttons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const targetId = e.currentTarget.getAttribute("data-section");
    const targetSection = document.querySelector(targetId);
    
    if (targetId === "#about") {
      card.classList.remove("is-active");
    } else {
      card.classList.add("is-active");
    }
    
    card.setAttribute("data-state", targetId);
    buttons.forEach((b) => b.classList.remove("is-active"));
    sections.forEach((s) => s.classList.remove("is-active"));
    e.currentTarget.classList.add("is-active");
    targetSection.classList.add("is-active");
  });
});