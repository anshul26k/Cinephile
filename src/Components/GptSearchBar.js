import React, { useRef } from "react";
// import openai from '../utils/openai.js'
import axios from "axios";
import { Gemini_Ai } from "../utils/constants.js";
import { useDispatch } from "react-redux";
import {AddGptMovieNames,AddGptMovieRes} from '../utils/gtpslice.js'



function GptSearchBar() {
   const seachdata = useRef(null)
   const dispatch = useDispatch()
    
   const searchMovie = async (it) => {
           const data = await fetch(`https://www.omdbapi.com/?t=${it}&apikey=33037786`)
           const res =  await data.json()
           return res;
          //  console.log(res)
   }


   const handleSearch = async () =>{
      //  console.log(seachdata.current.value)
      const SearchQuery = "Act like a movie recommendation sysem and give only movie name from given query " + seachdata.current.value + "give only 6 movies in format sperated by commas like given shown in example : golmaal,farzi,don,raees,krish"
      // const result = await openai.chat.completions.create({
      //   messages: [{ role: 'user', content: SearchQuery }],
      //   model: 'gpt-3.5-turbo',
      // });
      // console.log(result)
      
      const response = await axios({
        url: `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${process.env.REACT_APP_GEMINI_ID}`,
        method: "post",
        data: {
          contents: [{ parts: [{ text: SearchQuery }] }],
        },
      });
      console.log(response)
      const moviesList = response?.data?.candidates?.[0]?.content?.parts?.[0]?.text?.split(",");
      // {const newmoviesList = moviesList?.filter((movie) => movie?.Poster && movie.Poster !== "N/A")}
      console.log(moviesList)
      const PromiseArray =  moviesList?.map((it)=>searchMovie(it))     
      const OmdbRes = await Promise.all(PromiseArray)
      console.log(OmdbRes)
     
      dispatch(AddGptMovieNames(moviesList))
      dispatch(AddGptMovieRes(OmdbRes))
   }

   
 



  return (
    <div className="pt-[10%] flex justify-center ">
      <form className="bg-black text-white grid grid-cols-12  md:w-1/2 " onSubmit={(e)=>e.preventDefault()}>
        <input ref={seachdata} type="text" className="p-2 m-3 col-span-9 rounded-md text-black" placeholder="What do u you want to watch today" />
        <button className=" m-3 p-2 col-span-3 bg-red-500 rounded-md" onClick={handleSearch}>Search</button>
      </form>
    </div>
  );
}

export default GptSearchBar;
