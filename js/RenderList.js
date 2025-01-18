export const RenderList = (target, array) => {
  const wrapEl = document.querySelector(target);

  if (!wrapEl) return;

  const result = array.map(({ Poster, Title, Type, Year, imdbID }) => {
    return /* html */ `
        <li>
            <a href="/pages/detail.html?id=${imdbID}">
                <div class="thumbnail">
                    ${Poster && Poster !== "N/A" ? `<img src="${Poster}" alt="" />` : "No Image"}
                </div>
                <div class="title">${Title}</div>
                <div class="infomation">
                    <div class="type">${Type}</div>
                    <div class="year">${Year}</div>
                </div>
            </a>
        </li>
    `;
  });

  wrapEl.innerHTML = result.join("");
};
