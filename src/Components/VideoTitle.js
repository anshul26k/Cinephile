import React from 'react'

const VideoTitle = ({title,overview})=> {
  
  return (
    <div className=' w-full  aspect-video pt-[18%] px-10 md:px-20 absolute text-white bg-gradient-to-r from-black'>
        
        <h1 className='md:font-bold text-xl md:text-3xl'>{title}</h1>
        <p className='hidden md:block w-2/4 text-md py-5'>{overview}</p>
        <div className=''>
        <button className='md:px-6 md:py-2  px-2 py-1 mt-2 bg-white rounded-md text-sm md:text-lg text-black hover:opacity-70'> ▶Play</button>
        <button className='hidden md:inline-block px-6 py-2 m-2 bg-slate-500 rounded-md text-xl bg-opacity-60  text-white'>More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle