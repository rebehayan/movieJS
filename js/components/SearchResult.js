import { FavMovies } from "../utils/FavMovies.js";
import { FetchTitle } from "../api/Fetch.js";
import { NoResultRender, RenderList } from "../utils/RenderList.js";
import { UrlParams } from "../utils/UrlParams.js";
import { goBack } from "./Navigation.js";
import { LoadingEnd, LoadingStart } from "../utils/Loading.js";

// 더보기
const handleMoreButton = (Resultlength) => {
  if (Resultlength > 10) {
    const list = document.querySelector(".search-result");

    if (!list) return;

    list.insertAdjacentHTML("afterend", `<button class='btn-more'>더보기</button>`);
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
    const Resultlength = response.totalResults;

    if (response.Response === "True") {
      RenderList(".search-result", response.Search); // 리스트 데이터바인딩
      handleMoreButton(Resultlength); // 더보기 버튼
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
  }
};
