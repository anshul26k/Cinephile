import React, { useDebugValue, useEffect } from "react";
import { Api_url } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addTrailer } from "../utils/movieSlice";
import useVideoTrailer from "../Hooks/useVideoTrailer";

function VideoBg({ id }) {
  const data = useSelector((store) => store.movies?.trailer);
  useVideoTrailer(id)

  return (
    <div>
      <iframe
        width="560"
        height="315"
        src={"https://www.youtube.com/embed/" + data?.key}
        title="YouTube video player"
      ></iframe>
    </div>
  );
}

export default VideoBg;
