import { FetchArray } from "../api/Fetch.js";
import { FavMovies } from "../utils/FavMovies.js";
import { RenderList } from "../utils/RenderList.js";
import { GetFavList } from "../utils/FavList.js";

export const RenderFav = async () => {
  const list = document.querySelector(".my-fav-list");

  if (!list) return;

  const favData = GetFavList();

  try {
    const data = await FetchArray(favData);
    RenderList(".my-fav-list", data);
    FavMovies();
  } catch (error) {
    console.log(error);
  }
};
