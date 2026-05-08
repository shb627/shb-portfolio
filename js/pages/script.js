const texts = document.querySelectorAll(".fade-text");

window.addEventListener("scroll", () => {
  texts.forEach((text) => {
    const rect = text.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    if (rect.top < windowHeight * 0.8 && rect.bottom > 0) {
      text.classList.add("active");
    } else {
      text.classList.remove("active");
    }
  });
});

// 스와이퍼
document.addEventListener("DOMContentLoaded", () => {
  if (document.querySelector(".detail-swiper")) {
    const swiper = new Swiper(".detail-swiper", {
      effect: "cards",
      grabCursor: true,
      keyboard: {
        enabled: true,
        onlyInViewport: true,
      },
    });
  }
});
