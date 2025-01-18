export const FavMovies = () => {
  const buttons = document.querySelectorAll(".btn-fav");

  if (!buttons) return;

  let idList = [];

  const addStorage = (id) => {
    idList = [...idList, id];
    console.log(idList);
    sessionStorage.setItem("favList", idList);
  };

  buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
      e.preventDefault();
      const id = e.target.getAttribute("data-id");
      addStorage(id);
    });
  });
};
