export const Header = () => {
  const header = document.querySelector(".header");
  if (!header) return;

  const handleHeader = () => {
    if (document.documentElement.scrollTop > 100) {
      header.classList.add("fixed");
    } else {
      header.classList.remove("fixed");
    }
  };

  window.addEventListener("scroll", handleHeader);
};
