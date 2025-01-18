import { FetchDetail } from "./Fetch.js";
import { UrlParams } from "./UrlParams.js";

export const RenderDetail = () => {
  const obj = UrlParams();
  const detail = document.querySelector(".movie-detail");

  if (!detail) return;

  FetchDetail(obj.id).then((response) => {
    // console.log(response);
    const {
      Actors,
      Awards,
      BoxOffice,
      Country,
      DVD,
      Director,
      Genre,
      Language,
      Metascore,
      Plot,
      Poster,
      Production,
      Rated,
      Ratings, //Array
      Released,
      Response,
      Runtime,
      Title,
      Type,
      Website,
      Writer,
      Year,
      imdbID,
      imdbRating,
      imdbVotes,
    } = response;

    detail.innerHTML = /* html */ `
      <img src="${Poster === "N/A" ? "" : Poster.replace("300", "1200")}" class="bg" alt="" />
      <div class="poster"><img src="${Poster === "N/A" ? "" : Poster.replace("300", "600")}" alt="" /></div>
      <div>
        <h2 class="title">${Title}</h2>
        <div class="plot">${Plot}</div>
        <div class="hash">
          <div>${Genre}</div>
          <div>${Released}</div>
          <div>${Runtime}</div>
          <div>${Type}</div>
        </div>
        <ul class="list">
          <li><strong>Director</strong><span>${Director}</span></li>
          <li><strong>Writer</strong><span>${Writer}</span></li>
          <li><strong>Actors</strong><span>${Actors}</span></li>
        </ul>
      </div>
    `;
  });
};
