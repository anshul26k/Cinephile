import React from 'react'

const VideoTitle = ({title,overview})=> {
  console.log("vedo",{title,overview})
  return (
    <div className='pt-36 px-12'>
        
        <h1 className='font-bold text-3xl'>{title}</h1>
        <p className='w-1/4 text-lg py-6'>{overview}</p>
        <div className='my-4'>
        <button className='px-6 py-2 m-2 bg-slate-400 rounded-md text-lg opacity-50'> ▶Play</button>
        <button className='px-6 py-2 m-2 bg-slate-400 rounded-md text-lg opacity-60'>More info</button>
        </div>
    </div>
  )
}

export default VideoTitle