export const Search = () => {
  const searchs = document.querySelectorAll(".search");

  if (searchs.length === 0) return;

  searchs.forEach((search) => {
    search.addEventListener("submit", (e) => {
      e.preventDefault();
      const input = search.querySelector("input");

      const value = input.value.trim();
      if (!value) {
        alert("검색어를 넣어주세요.");
        input.focus();
        input.value = "";
        return;
      }

      window.location.href = `/pages/search.html?keyword=${value}`;
    });
  });
};
