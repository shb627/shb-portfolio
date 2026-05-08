const openModal = document.getElementById("openModal");
const closeModal = document.getElementById("closeModal");
const modal = document.getElementById("modal");

openModal.addEventListener("click", () => {
  modal.classList.add("show");
  document.body.style.overflow = "hidden"; // 배경 스크롤 막기
});

closeModal.addEventListener("click", () => {
  modal.classList.remove("show");
  document.body.style.overflow = "auto";
});

// 배경 눌렀을 때 닫기
modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.classList.remove("show");
    document.body.style.overflow = "auto";
  }
});

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
