import { addFavList } from "./FavList.js";

/* -------------------------------------------------------------------------- */
/*                               즐겨찾기 버튼을 제어합니다.                      */
/* -------------------------------------------------------------------------- */

export const FavMovies = () => {
  const buttons = document.querySelectorAll(".btn-fav");

  if (!buttons) return;

  buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
      e.preventDefault();
      e.target.classList.toggle("active");
      const id = e.target.getAttribute("data-id");
      addFavList(id);
    });
  });
};
