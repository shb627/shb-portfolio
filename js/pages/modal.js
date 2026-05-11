document.addEventListener("DOMContentLoaded", () => {
  const modalLinks = document.querySelectorAll(".modal-link");
  const modal = document.querySelector("#modal");
  const modalImage = document.querySelector("#modalImage");

  modalLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault(); // 새탭/링크 이동 막기

      modalImage.src = link.getAttribute("href");
      modal.classList.add("active");
    });
  });

  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.classList.remove("active");
    }
  });
});
