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

    detail.innerHTML = `
        제목 ${Title}<br>
        내용 ${Plot}
    `;
  });
};
