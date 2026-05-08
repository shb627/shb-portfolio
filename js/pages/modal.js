modalContent.innerHTML = `
  <h2>로그인</h2>
  <input type="text">
`;

const openModal = document.getElementById("openModal");
const closeModal = document.getElementById("closeModal");
const modalContent = document.getElementById("modalContent");

openModal.addEventListener("click", () => {
  modal.classList.add("show");
  document.body.style.overflow = "hidden"; // 배경 스크롤 막기
});

closeModal.addEventListener("click", () => {
  modal.classList.remove("show");
  document.body.style.overflow = "auto";
});

// 배경 눌렀을 때 닫기
modalContent.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.classList.remove("show");
    document.body.style.overflow = "auto";
  }
});
