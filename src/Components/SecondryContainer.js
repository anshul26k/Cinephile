import React from 'react'
import { useSelector } from 'react-redux'
import MovieCard from './MovieCard'
import MovieList from './MovieList'

function SecondryContainer() {
   
    const movie = useSelector(store=>store.movies.nowplayingmovies)
    console.log(movie)
  return (
    <div className="bg-black">
           <div className="-mt-52 pl-10 relative z-20">
           <MovieList title={"Now playing"} list={movie}/>
           <MovieList title={"Now playing"} list={movie}/>
           <MovieList title={"Now playing"} list={movie}/>
           <MovieList title={"Now playing"} list={movie}/>
           </div>
    </div>
  )
}

export default SecondryContainer

 {/* 
                moviesliSt ->
                    movies card
   */}
