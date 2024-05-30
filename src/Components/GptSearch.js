import React from 'react'
import GptSearchBar from './GptSearchBar'
import { BG_URL } from '../utils/constants'
import GptMovies from './GptMovies'

function GptSearch() {
  return (
    <div>
       <div className="absolute -z-20  ">
        <img src={BG_URL}></img>
      </div>
      <GptSearchBar/>
      <GptMovies/>
    </div>
  )
}

export default GptSearch