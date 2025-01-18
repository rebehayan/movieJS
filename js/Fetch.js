import { LoadingEnd, LoadingStart } from "./Loading.js";

export const FetchTitle = async (keyword, page = 1) => {
  LoadingStart();

  try {
    const response = await fetch(`https://omdbapi.com/?apikey=6471fda5&s=${keyword}&page=${page}`);
    const json = await response.json();
    return json;
  } catch (error) {
    console.log(error);
  } finally {
    LoadingEnd();
  }
};

export const FetchDetail = async (id) => {
  LoadingStart();

  try {
    const response = await fetch(`https://omdbapi.com/?apikey=6471fda5&i=${id}&plot=full`);
    const json = await response.json();

    return json;
  } catch (error) {
    console.log(error);
  } finally {
    LoadingEnd();
  }
};

export const FetchArray = async (ids) => {
  LoadingStart();
  try {
    const response = await Promise.all(
      ids.map((id) => {
        return fetch(`https://omdbapi.com/?apikey=6471fda5&i=${id}`).then((res) => {
          return res.json();
        });
      })
    );

    return response;
  } catch (error) {
    console.log(error);
    return [];
  } finally {
    LoadingEnd();
  }
};
