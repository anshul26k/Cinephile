import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { addnowplayingmovies } from '../utils/movieSlice';
import { Api_url } from '../utils/constants';

export const useNowplayingmovies = ()  => {
  
 const dispatch = useDispatch();

  useEffect(()=>{
        movies()
  },[])


  const movies = async () =>{
      const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', Api_url)
      const movie  = await data.json();
      console.log(movie.results)
      dispatch(addnowplayingmovies(movie.results))
  }
  
}



export default useNowplayingmovies