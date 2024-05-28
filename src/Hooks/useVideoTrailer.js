import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Api_url } from "../utils/constants";
import { addTrailer } from "../utils/movieSlice";

function useVideoTrailer( id ) {
  const dispatch = useDispatch();

  useEffect(() => {
    getMovieVideo();
  }, []);

  const getMovieVideo = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
      Api_url
    );
    const json = await data.json();
    console.log(json.results);
    const filterdata = json.results.filter((it) => it.type === "Trailer");
    const trailer = filterdata.length != 0 ? filterdata[0] : json.results[0];
    dispatch(addTrailer(trailer));
    console.log(trailer);
  };
}

export default useVideoTrailer;
