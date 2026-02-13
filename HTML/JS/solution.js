gsap.registerPlugin(CustomEase, Flip);

CustomEase.create("osmo-ease", "0.625, 0.05, 0, 1");

gsap.defaults({
  ease: "osmo-ease",
  duration: 0.8,
});

function initFlipButtons() {
  const wrappers = document.querySelectorAll('[data-flip-button="wrap"]');

  wrappers.forEach((wrapper) => {
    const buttons = wrapper.querySelectorAll('[data-flip-button="button"]');
    const bg = wrapper.querySelector('[data-flip-button="bg"]');

    if (!bg) return;

    buttons.forEach((button) => {
      button.addEventListener("mouseenter", function () {
        const state = Flip.getState(bg);
        this.appendChild(bg);
        Flip.from(state, { duration: 0.4 });
      });

      button.addEventListener("focus", function () {
        const state = Flip.getState(bg);
        this.appendChild(bg);
        Flip.from(state, { duration: 0.4 });
      });

      button.addEventListener("mouseleave", function () {
        const activeLink = wrapper.querySelector(".active");
        if (!activeLink) return;
        const state = Flip.getState(bg);
        activeLink.appendChild(bg);
        Flip.from(state, { duration: 0.4 });
      });

      button.addEventListener("blur", function () {
        const activeLink = wrapper.querySelector(".active");
        if (!activeLink) return;
        const state = Flip.getState(bg);
        activeLink.appendChild(bg);
        Flip.from(state, { duration: 0.4 });
      });
    });
  });
}

function initTabSystem() {
  const wrappers = document.querySelectorAll('[data-tabs="wrapper"]');

  wrappers.forEach((wrapper) => {
    const nav = wrapper.querySelector('[data-tabs="nav"]');
    const buttons = nav.querySelectorAll('[data-tabs="button"]');
    const contentWrap = wrapper.querySelector('[data-tabs="content-wrap"]');
    const contentItems = contentWrap.querySelectorAll('[data-tabs="content-item"]');
    const visualWrap = wrapper.querySelector('[data-tabs="visual-wrap"]');
    const visualItems = visualWrap.querySelectorAll('[data-tabs="visual-item"]');

    let activeButton = null;
    let activeContent = null;
    let activeVisual = null;
    let isAnimating = false;

    function switchTab(index, initial = false) {
      if (!initial && (isAnimating || buttons[index] === activeButton)) return;
      isAnimating = true;

      const outgoingContent = activeContent;
      const incomingContent = contentItems[index];
      const outgoingVisual = activeVisual;
      const incomingVisual = visualItems[index];

      const outgoingLines = outgoingContent ? outgoingContent.querySelectorAll("[data-tabs-fade]") : [];
      const incomingLines = incomingContent.querySelectorAll("[data-tabs-fade]");

      const timeline = gsap.timeline({
        onComplete: () => {
          if (!initial && outgoingContent) {
            outgoingContent.classList.remove("active");
            outgoingVisual.classList.remove("active");
          }
          activeContent = incomingContent;
          activeVisual = incomingVisual;
          isAnimating = false;
        },
      });

      incomingContent.classList.add("active");
      incomingVisual.classList.add("active");

      timeline
        .to(outgoingLines, { autoAlpha: 0, duration: 0.3 }, 0)
        .to(outgoingVisual, { autoAlpha: 0, scale: 0.98, duration: 0.3 }, 0)
        .fromTo(incomingLines, { y: "1em", autoAlpha: 0 }, { y: "0em", autoAlpha: 1, stagger: 0.05, duration: 0.5 }, 0.2)
        .fromTo(incomingVisual, { autoAlpha: 0, scale: 0.98 }, { autoAlpha: 1, scale: 1, duration: 0.5 }, 0.2);

      if (activeButton) activeButton.classList.remove("active");
      buttons[index].classList.add("active");
      activeButton = buttons[index];
    }

    switchTab(0, true);

    buttons.forEach((button, i) => {
      button.addEventListener("click", () => switchTab(i));
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  initTabSystem();
  initFlipButtons();
});