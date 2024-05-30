import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Api_url } from "../utils/constants";
import { addTrailer } from "../utils/movieSlice";

function useVideoTrailer( id ) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(addTrailer({
      "iso_639_1": "en",
      "iso_3166_1": "US",
      "name": "Final Trailer",
      "key": "Kdr5oedn7q8",
      "site": "YouTube",
      "size": 1080,
      "type": "Trailer",
      "official": true,
      "published_at": "2024-04-30T16:00:26.000Z",
      "id": "663139927aecc6012472b32a"
    }));
    // getMovieVideo();
  }, []);

  const getMovieVideo = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
      Api_url
    );
    const json = await data.json();
    
    const filterdata = json.results.filter((it) => it.type === "Trailer");
    const trailer = filterdata.length != 0 ? filterdata[0] : json.results[0];
    console.log(trailer);
    dispatch(addTrailer(trailer));
  
    
  };
}

export default useVideoTrailer;
