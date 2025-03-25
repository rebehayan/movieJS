import { FetchDetail } from "../api/Fetch.js";
import { goBack } from "./Navigation.js";
import { FavMovies } from "../utils/FavMovies.js";
import { GetFavList } from "../utils/FavList.js";
import { UrlParams } from "../utils/UrlParams.js";

export const Detail = async () => {
  const obj = UrlParams();
  const detail = document.querySelector(".movie-detail");
  let movieTitle;

  if (!detail) return;

  try {
    const response = await FetchDetail(obj.id);
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

    const posterBG = Poster === "N/A" ? "" : Poster.replace("300", "1200");
    const poster = Poster === "N/A" ? "" : Poster.replace("300", "600");
    movieTitle = Title;
    const genreList = Genre.split(",")
      .map((item) => {
        return `<div>${item}</div>`;
      })
      .join("");

    let favID;
    const favlist = GetFavList();
    favlist.forEach((item) => {
      if (item === imdbID) {
        favID = imdbID;
      }
    });

    detail.innerHTML = /* html */ `
      <img src="${posterBG}" class="bg" alt="" />
      <div class="poster"><img src="${poster}" alt="" /></div>
      <div>
        <div class="top">
          <h2 class="title">${Title}</h2>
          <button class="btn-fav ${favID && "active"}" data-id="${imdbID}" aria-label="즐겨찾기"></button>
        </div>
        <div class="plot">${Plot}</div>
        <div class="hash">
          ${genreList}
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
  } catch (error) {
    console.log(error);
  } finally {
    goBack();
    FavMovies();
    document.querySelector("title").textContent = `${movieTitle} Detail Information - SearchMovies`;
  }
};
