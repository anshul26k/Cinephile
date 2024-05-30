import React from "react";
import { useSelector } from "react-redux";

function GptMovies() {
  const gpt = useSelector((store) => store.gpt);
  const { GptMovieNames, GptMovieRes } = gpt;
  console.log(GptMovieNames);
  console.log(GptMovieRes);
  return (
    <div className="bg-black bg-opacity-70">

    <div className=" w-full text-white flex mt-20 mx-auto gap-2 justify-evenly"  >

      {GptMovieRes?.map((movie) => (
          <div>
              <h2>{movie?.Title}</h2>
              <img alt="hell" src={movie?.Poster} className="h-52 w-40"/>
        </div>
      ))}
     
      </div>
    </div>
  );
}

export default GptMovies;
