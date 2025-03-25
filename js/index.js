import { Search } from "./components/Search.js";
import { SearchResult } from "./components/SearchResult.js";
import { Detail } from "./components/Detail.js";
import { MainSlide } from "./components/MainSlide.js";
import { RenderFav } from "./components/RenderFav.js";
import { HTMLInclude } from "./utils/HTMLInclude.js";
import { Megamenu } from "./components/Megamenu.js";
import { Header } from "./components/Header.js";

const init = async () => {
  await HTMLInclude("/include/MegaMenu.html", "#megamenu");
  Megamenu();

  Search();
  SearchResult();
  Detail();
  MainSlide();
  RenderFav();
  Header();
};

(async () => {
  await HTMLInclude("/include/Header.html", ".header");
  await HTMLInclude("/include/Footer.html", ".footer");
  await init();
})();
