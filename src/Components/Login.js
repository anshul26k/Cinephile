import React, { useRef, useState } from 'react'
import Header from './Header'
import { validate } from '../utils/validate'

function Login() {
    const [isSignIn,setisSignIn]=useState(true)

    const [errormsg,seterrormsg] = useState(null)

    const email = useRef()
    const password  = useRef();

    const handltoggle=()=>{
                setisSignIn(!isSignIn);
    }

    const handlevalidation=()=>{
          const error = validate(email.current.value,password.current.value)
          seterrormsg(error)
        //   console.log(error)
        //  console.log(email)
        //  console.log(password)
    }

  return (
    <div >
        <Header/>
        <div className='absolute  '>
            <img src='https://assets.nflxext.com/ffe/siteui/vlv3/a99688ca-33c3-4099-9baa-07a2e2acb398/ca15fd28-b624-4852-8bfe-9cdd5c88475d/IN-en-20240520-popsignuptwoweeks-perspective_alpha_website_large.jpg'></img>
        </div>
        <form  onSubmit={(e)=>{e.preventDefault()}} className='w-3/12 absolute bg-black p-10 my-36 mx-auto right-0 left-0 text-white bg-opacity-80'>
            <div className='p-2 font-bold text-3xl'>{isSignIn?"Sign In":"Sign Up"}</div>
            {!isSignIn &&  <input type='text' placeholder='Full Name' className='p-3 my-4 w-full bg-gray-500'/>}
            <input ref={email} type='email' placeholder='Email Address' className='p-3 my-4 w-full bg-gray-500'/>
            <input ref={password} type='password' placeholder='Password' className='p-3 my-4 w-full bg-gray-500'/>
            <p className='text-red-500'>{errormsg}</p>

            <button className='p-3 my-6 bg-red-600 w-full rounded-lg' onClick={handlevalidation}>{isSignIn?"Sign In":"Sign Up"}</button>
            <p className='cursor-pointer' onClick={handltoggle}>
            {isSignIn?"New to Netflix? Sign Up Now.":"Already a user? Sign In Now."}
            </p>
        </form>
    </div>
    
  )
}

export default Login