export const Megamenu = () => {
  const search = document.querySelector(".search").cloneNode(true);
  const open = document.querySelector(".btn-menu");
  const link1 = document.querySelectorAll(".gnb a")[0].cloneNode(true);
  const link2 = document.querySelectorAll(".gnb a")[1].cloneNode(true);
  const megamenu = document.querySelector("#megamenu");
  const nav = megamenu.querySelector("nav");
  const close = megamenu.querySelector(".btn-close");

  megamenu.append(search);
  nav.append(link1);
  nav.append(link2);

  open.addEventListener("click", () => megamenu.show());
  close.addEventListener("click", () => megamenu.close());
};
