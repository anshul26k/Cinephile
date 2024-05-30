import React from "react";
import { useSelector } from "react-redux";

function GptMovies() {
  const gpt = useSelector((store) => store.gpt);
  const { GptMovieNames, GptMovieRes } = gpt;
  console.log(GptMovieNames);
  console.log(GptMovieRes);
  return (
    <div className="bg-black bg-opacity-70">

    <div className="w-full text-white flex flex-wrap  mt-20 p-10 md:p-0 mx-auto gap-2 justify-evenly"  >

      {GptMovieRes?.map((movie) => (
          <div className="flex flex-col items-center">
              <h2>{movie?.Title}</h2>
              <img alt="hell" src={movie?.Poster} className="h-52 w-40"/>
        </div>
      ))}
     
      </div>
    </div>
  );
}

export default GptMovies;
