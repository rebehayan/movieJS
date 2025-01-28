export const RenderSlide = (array) => {
  const wrapEl = document.querySelector(".main-slide .swiper-wrapper");

  if (!wrapEl) return;

  const result = array.map(({ Poster, Title, Plot, Metascore, imdbRating, imdbID }) => {
    return /* html */ `
        <div class="swiper-slide">
          <div class="poster" style="background-image:url(${Poster.replace("300", "2000")})">
            <!-- ${Poster && Poster !== "N/A" ? `<img src="" alt="" />` : "No Image"} -->
          </div>
          <div class="information">
            <div class="title">${Title}</div>
            <div class="ratings">
              <div class="imdb"><img src="../images/ico_imdb.png" alt="imdbScore">${imdbRating}</div>
              <div class="meta"><img src="../images/ico_roten.png" alt="imdbScore">${Metascore}%</div>
            </div>
            <div class="plot">${Plot}</div>
            <a href="/pages/detail.html?id=${imdbID}" class="btn-more">Detail infomation</a>
          </div>
        </div>
    `;
  });

  wrapEl.innerHTML = result.join("");
};
