import { FavMovies } from "../utils/FavMovies.js";
import { FetchTitle } from "../api/Fetch.js";
import { NoResultRender, RenderList } from "../utils/RenderList.js";
import { UrlParams } from "../utils/UrlParams.js";
import { goBack } from "./Navigation.js";
import { LoadingEnd, LoadingStart } from "../utils/Loading.js";

// 더보기
let currentPage = 1;
const handleMoreButton = (response, keyword) => {
  const Resultlength = response.totalResults;

  if (Resultlength > 10) {
    const list = document.querySelector(".search-result");

    if (!list) return;

    list.insertAdjacentHTML("afterend", `<button class='btn-more mx-auto'>More</button>`);

    const more = document.querySelector(".btn-more");
    more.addEventListener("click", async () => {
      currentPage++;

      const response = await FetchTitle(keyword, currentPage);
      RenderList(".search-result", response.Search); // 리스트 데이터바인딩

      // 전체 결과 개수보다 많아지면 버튼 숨김
      if (currentPage * 10 >= Resultlength) {
        more.style.display = "none";
      }
    });
  }
};

export const SearchResult = async () => {
  const obj = UrlParams();

  const textEl = document.querySelector(".result-text strong");

  if (!textEl) return;

  textEl.textContent = obj.keyword; // 검색어 타이틀

  const input = document.querySelector(".search input");
  input.value = obj.keyword; // 검색어 input value

  LoadingStart();

  try {
    const response = await FetchTitle(obj.keyword);

    if (response.Response === "True") {
      RenderList(".search-result", response.Search); // 리스트 데이터바인딩
      handleMoreButton(response, obj.keyword); // 더보기 버튼
      FavMovies(); //즐겨찾기등록
    } else {
      NoResultRender(".result-text", "no-result", "검색결과가 없습니다.");
      console.log(response);
    }
  } catch (error) {
    console.log(error);
  } finally {
    goBack(); // 뒤로가기
    LoadingEnd();

    document.querySelector("title").textContent = `${obj.keyword} Result - SearchMovies`;
  }
};
