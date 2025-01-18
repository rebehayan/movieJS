import { FetchArray } from "./Fetch.js";
import { RenderList } from "./RenderList.js";

export const RenderFav = () => {
  const list = document.querySelector(".my-fav-list");

  if (!list) return;

  let favData = [];

  const data = sessionStorage.getItem("favList").split(",");

  favData = [...favData, ...data];

  console.log(favData);

  FetchArray(favData).then((data) => {
    console.log(data);
    RenderList(".my-fav-list", data);
  });
};
