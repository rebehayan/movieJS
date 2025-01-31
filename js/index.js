import { Search } from "./components/Search.js";
import { SearchResult } from "./components/SearchResult.js";
import { Detail } from "./components/Detail.js";
import { MainSlide } from "./components/MainSlide.js";
import { RenderFav } from "./components/RenderFav.js";
import { About } from "./components/About.js";
import { HTMLInclude } from "./utils/HTMLInclude.js";

const init = () => {
  Search();
  SearchResult();
  Detail();
  MainSlide();
  RenderFav();
  About();
  HTMLInclude("/include/MegaMenu.html", "#megamenu");
};

HTMLInclude("/include/Header.html", ".header").then(() => init());
