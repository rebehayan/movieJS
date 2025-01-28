export const LoadingStart = () => {
  if (document.querySelector(".loading")) return;
  const loading = document.createElement("div");
  loading.classList.add("loading");

  loading.textContent = "로딩중";
  document.body.appendChild(loading);
  loading.classList.add("show");
};

export const LoadingEnd = () => {
  if (!document.querySelector(".loading")) return;
  const loading = document.querySelector(".loading");

  loading.classList.remove("show");
  setTimeout(() => {
    loading.remove();
  }, 500);
};
