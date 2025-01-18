export const RenderList = (target, array) => {
  const wrapEl = document.querySelector(target);

  if (!wrapEl) return;

  const result = array.map(({ Poster, Title, Type, Year, imdbID }) => {
    return /* html */ `
        <li>
            <button class="btn-fav" data-id="${imdbID}">즐겨찾기</button>
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
