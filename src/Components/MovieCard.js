import React from 'react'
import { CDN_URL } from '../utils/constants'

function MovieCard({path}) {
  return (
    <div className='w-48 pr-4'>
             <img alt="hell" src={CDN_URL+path}/>
    </div>
  )
}

export default MovieCard