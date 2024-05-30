import React from 'react'
import GptSearchBar from './GptSearchBar'
import { BG_URL } from '../utils/constants'
import GptMovies from './GptMovies'

function GptSearch() {
  return (
    <>
       <div className="fixed -z-20 ">
        <img src={BG_URL} className='h-screen object-cover md:h-full'></img>
      </div>
      <div className='pt-[40%] md:pt-0'>
      <GptSearchBar/>
      <GptMovies/>
      </div>
    </>
  )
}

export default GptSearch