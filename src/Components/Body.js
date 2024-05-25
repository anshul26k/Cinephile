import React, { useEffect } from 'react'
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import Login from './Login'
import Browse from './Browse'
import { auth } from '../utils/firebase'
import { onAuthStateChanged } from 'firebase/auth'
import { useDispatch } from 'react-redux'
import { addUser, removeUser } from '../utils/userSlice'

function Body() {
   const dispatch = useDispatch()

   useEffect(()=>{
      onAuthStateChanged(auth, (user) => {
         if (user) {
           const {uid,email,displayName,photoURL} = user;
           dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}))
           
         } else {
           // User is signed out
           // ...
           dispatch(removeUser())
          
         }
       })
   },[])
    

  return (
      <BrowserRouter>
         <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="/browse" element={<Browse/>}/>
         </Routes>
      </BrowserRouter>
  )
}

export default Body