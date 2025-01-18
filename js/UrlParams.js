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
