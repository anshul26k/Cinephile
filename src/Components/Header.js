import React from 'react'
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { useSelector } from 'react-redux';

function Header() {
   const navigate = useNavigate();
   const user = useSelector((store)=>store.user)

  const handlelogout=()=>{
    signOut(auth).then(() => {
      // Sign-out successful.
      navigate("/")
      
    }).catch((error) => {
      navigate("/Error")
    });
  }

  return (
    <div className='absolute w-full px-6 py-2 bg-gradient-to-b from-black z-20 flex justify-between'>
      <img src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" className='w-36'></img>

      {user && <div className='flex p-4 gap-2'>
        <img src="https://occ-0-2085-2186.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABXYofKdCJceEP7pdxcEZ9wt80GsxEyXIbnG_QM8znksNz3JexvRbDLr0_AcNKr2SJtT-MLr1eCOA-e7xlDHsx4Jmmsi5HL8.png?r=1d4" className='w-12 h-12' />
        <button className='bg-slate-700 px-2 rounded-lg font-bold' onClick={handlelogout}>Sign Out</button>
        </div>}
    </div>
    
  )
}

export default Header