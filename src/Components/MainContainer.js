import React from 'react'
import { useSelector } from 'react-redux'
import VideoTitle from './VideoTitle'
import VideoBg from './VideoBg'

function MainContainer() {
    const movie = useSelector((store)=>store.movies.nowplayingmovies)
    if(movie==null)return;
    const newMovie = movie[0];
    const {original_title,overview,id}=newMovie;
    console.log(movie[0])
  return (
    <div>
        <VideoTitle title={original_title} overview={overview} />
        <VideoBg id={id}/>
    </div>
  )
}

export default MainContainer