// 뒤로가기
export const goBack = () => {
  const button = document.querySelector(".btn-prev");

  if (!button) return;

  button.addEventListener("click", () => {
    window.history.back();
  });
};
