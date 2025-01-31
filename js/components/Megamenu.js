export const Megamenu = () => {
  const search = document.querySelector(".search").cloneNode(true);
  const open = document.querySelector(".btn-menu");
  const links = document.querySelector(".header > div").cloneNode(true);
  const megamenu = document.querySelector("#megamenu");
  const nav = megamenu.querySelector("nav");
  const close = megamenu.querySelector(".btn-close");

  megamenu.prepend(search);
  nav.append(links);

  open.addEventListener("click", () => megamenu.show());
  close.addEventListener("click", () => megamenu.close());
};
