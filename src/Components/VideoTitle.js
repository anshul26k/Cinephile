import React from 'react'

const VideoTitle = ({title,overview})=> {
  
  return (
    <div className=' w-full  aspect-video pt-[18%] px-20 absolute text-white bg-gradient-to-r from-black'>
        
        <h1 className='font-bold text-3xl'>{title}</h1>
        <p className='w-1/4 text-md py-5'>{overview}</p>
        <div className=''>
        <button className='px-6 py-2 m-2 bg-white rounded-md text-xl  text-black hover:opacity-70'> ▶Play</button>
        <button className='px-6 py-2 m-2 bg-slate-500 rounded-md text-xl bg-opacity-60  text-white'>More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle