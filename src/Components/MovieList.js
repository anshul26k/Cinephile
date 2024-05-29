import React from "react";
import MovieCard from "./MovieCard";

function MovieList({ title, list }) {
  console.log(list);
  return (
    <div className=" p-6 text-white">
      <div>
        <h1 className="py-2 text-3xl">{title}</h1>
      </div>

      <div className="flex overflow-x-scroll no-scrollbar">
        <div className="flex">
          {list?.map((movie) => (
            <MovieCard key={movie.id} path={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default MovieList;
