import { FetchTitle } from "./Fetch.js";
import { RenderList } from "./RenderList.js";
import { UrlParams } from "./UrlParams.js";

const goBack = () => {
  const button = document.querySelector(".btn-prev");

  if (!button) return;

  button.addEventListener("click", () => {
    window.history.back();
  });
};

const handleMoreButton = (Resultlength) => {
  if (Resultlength > 10) {
    const list = document.querySelector(".search-result");

    if (!list) return;

    list.insertAdjacentHTML("afterend", `<button class='btn-more'>더보기</button>`);
  }
};

export const SearchResult = () => {
  const obj = UrlParams();

  FetchTitle(obj.keyword).then((response) => {
    const Resultlength = response.totalResults;

    RenderList(".search-result", response.Search); // 리스트 데이터바인딩
    handleMoreButton(Resultlength); // 더보기 버튼
  });

  goBack(); // 뒤로가기
};
