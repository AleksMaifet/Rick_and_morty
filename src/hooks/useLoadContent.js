import { useCallback, useState } from "react";

export const useLoadContent = () => {
  const [imgList, setImgList] = useState([]);
  const getContent = useCallback(async () => {
    /* TODO: fetch images from this url: https://rickandmortyapi.com/api/character/
      (to fetch with name add name in search query: https://rickandmortyapi.com/api/character/?name=rick)
    */
    setImgList([]);
  }, []);

  // TODO: Put fetchMore method here

  return [imgList, getContent];
};