import { Search } from "./components/Search.js";
import { SearchResult } from "./components/SearchResult.js";
import { Detail } from "./components/Detail.js";
import { MainSlide } from "./components/MainSlide.js";
import { RenderFav } from "./components/RenderFav.js";
import { About } from "./components/About.js";
import { HTMLInclude } from "./utils/HTMLInclude.js";
import { Megamenu } from "./components/Megamenu.js";

const init = async () => {
  await HTMLInclude("/include/MegaMenu.html", "#megamenu");
  await Megamenu();

  Search();
  SearchResult();
  Detail();
  MainSlide();
  RenderFav();
  About();
};

(async () => {
  await HTMLInclude("/include/Header.html", ".header");
  await init();
})();
