import { GetFavList } from "../utils/FavList.js";

/* -------------------------------------------------------------------------- */
/*                               영화리스트를 랜더링합니다.                       */
/* -------------------------------------------------------------------------- */

export const RenderList = (target, array) => {
  const wrapEl = document.querySelector(target);

  if (!wrapEl) return;

  const favlist = GetFavList();
  const result = array.map(({ Poster, Title, Type, Year, imdbID }) => {
    let favID;
    favlist.forEach((item) => {
      if (item === imdbID) {
        favID = imdbID;
      }
    });

    return /* html */ `
        <li>
            <button class="btn-fav ${favID && "active"}" data-id="${imdbID}" aria-label="즐겨찾기"></button>
            <a href="/pages/detail.html?id=${imdbID}">
                <div class="thumbnail">
                    ${Poster && Poster !== "N/A" ? `<img src="${Poster}" alt="" />` : "No Image"}
                </div>
                <div class="title">${Title}</div>
                <div class="information">
                    <div class="type">${Type}</div>
                    <div class="year">${Year}</div>
                </div>
            </a>
        </li>
    `;
  });

  wrapEl.innerHTML = result.join("");
};

export const NoResultRender = (target, className, text) => {
  const el = document.querySelector(target);
  el.classList.add(className);
  el.querySelector("p").innerHTML = text;
};
