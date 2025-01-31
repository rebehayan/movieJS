export const FetchTitle = async (keyword, page = 1) => {
  try {
    const response = await fetch(`https://omdbapi.com/?apikey=6471fda5&s=${keyword}&page=${page}`);
    const json = await response.json();
    return json;
  } catch (error) {
    console.log(error);
  } finally {
  }
};

export const FetchDetail = async (id) => {
  try {
    const response = await fetch(`https://omdbapi.com/?apikey=6471fda5&i=${id}&plot=full`);
    const json = await response.json();

    return json;
  } catch (error) {
    console.log(error);
  } finally {
  }
};

export const FetchArray = async (ids) => {
  try {
    const response = await Promise.all(
      ids.map(async (id) => {
        const res = await fetch(`https://omdbapi.com/?apikey=6471fda5&i=${id}`);
        return await res.json();
      })
    );

    return response;
  } catch (error) {
    console.log(error);
  } finally {
  }
};
