import Swiper from "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs";
import { FetchArray } from "../api/Fetch.js";
import { RenderSlide } from "./RenderSlide.js";

export const MainSlide = () => {
  const movieList = ["tt2911666", "tt0335266", "tt1454468"];

  const initialSlide = () => {
    const swiper = new Swiper(".swiper", {
      mousewheel: true,
      direction: "vertical",
      loop: true,
      autoplay: {
        delay: 3000,
      },
      pagination: {
        el: ".pagination",
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '">' + (index + 1) + "</span>";
        },
        bulletActiveClass: "active",
        bulletClass: "item",
        bulletElement: "button",
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  };

  FetchArray(movieList).then((data) => {
    RenderSlide(data);
    initialSlide();
  });
};
