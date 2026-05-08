document.addEventListener("DOMContentLoaded", () => {
  if (document.querySelector(".cardnews-swiper")) {
    const swiper = new Swiper(".cardnews-swiper", {
      effect: "coverflow",
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: "auto",
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 800,
        modifier: 1,
        slideShadows: true,
      },
      pagination: {
        el: ".swiper-pagination",
      },
      keyboard: {
        enabled: true,
        onlyInViewport: true,
      },
    });
  }
});
