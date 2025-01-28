/* -------------------------------------------------------------------------- */
/*                             URL파라미터를 객체로 전환합니다.                   */
/* -------------------------------------------------------------------------- */
export const UrlParams = () => {
  const params = new URLSearchParams(window.location.search);
  let obj = {};

  if (!params) return;

  params.forEach((value, key) => {
    // console.log(value, key);
    obj[key] = value;
  });

  return obj;
};
