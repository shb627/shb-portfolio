// 불러오는거 확인 잘하기
import { initializeData } from "./modules/api.js";
import { initCourseDetailPage } from "./pages/courseDetail.js";
import {
  initHeoroCarousel,
  initPopularCoursesSwiper,
  renderPopularCourses,
} from "./pages/main.js";

window.addEventListener("load", () => {
  initializeData();
  renderPopularCourses();
  initCourseDetailPage();

  initHeoroCarousel();
  initPopularCoursesSwiper();
});
