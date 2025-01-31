/* -------------------------------------------------------------------------- */
/*                                 즐겨찾기 가지고오기                           */
/* -------------------------------------------------------------------------- */
export const GetFavList = () => {
  const storage = sessionStorage.getItem("favList");
  if (storage) {
    return storage.split(",");
  } else {
    return [];
  }
};

/* -------------------------------------------------------------------------- */
/*                                 즐겨찾기 추가,삭제                            */
/* -------------------------------------------------------------------------- */
const SetFavList = (data) => {
  return sessionStorage.setItem("favList", data);
};

const RemoveFavList = (id) => {
  const prevList = GetFavList();
  const updateList = prevList.filter((itemID) => itemID !== id);
  SetFavList(updateList);
};

export const addFavList = (id) => {
  const favListArray = GetFavList();

  const isValid = favListArray.find((itemID) => itemID === id);

  if (!isValid) {
    const favlist = [...favListArray, id];
    SetFavList(favlist);
  } else {
    RemoveFavList(id);
  }
};
