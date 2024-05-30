import React, { useRef } from "react";
// import openai from '../utils/openai.js'
import axios from "axios";
import { Gemini_Ai } from "../utils/constants.js";



function GptSearchBar() {
   const seachdata = useRef(null)
   const handleSearch = async () =>{
      //  console.log(seachdata.current.value)
      const SearchQuery = "Act like a movie recommendation sysem and give only movie name from given query " + seachdata.current.value + "give only 5 movies in format sperated by comma like given example : golmal,farzi,don,raees,krish"
      // const result = await openai.chat.completions.create({
      //   messages: [{ role: 'user', content: SearchQuery }],
      //   model: 'gpt-3.5-turbo',
      // });
      // console.log(result)

      const response = await axios({
        url: `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${Gemini_Ai}`,
        method: "post",
        data: {
          contents: [{ parts: [{ text: SearchQuery }] }],
        },
      });
      console.log( response["data"]["candidates"][0]["content"]["parts"][0]["text"])
   }

   
 



  return (
    <div className="pt-[10%] flex justify-center">
      <form className="bg-black text-white grid grid-cols-12 w-1/2" onSubmit={(e)=>e.preventDefault()}>
        <input ref={seachdata} type="text" className="p-2 m-3 col-span-9 rounded-md text-black" placeholder="What do u you want to watch today" />
        <button className=" m-3 p-2 col-span-3 bg-red-500 rounded-md" onClick={handleSearch}>Search</button>
      </form>
    </div>
  );
}

export default GptSearchBar;
