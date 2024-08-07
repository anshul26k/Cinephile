import React, { useRef, useState } from "react";
import Header from "./Header";
import { validate } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { BG_URL } from "../utils/constants";

function Login() {
  console.log(process.env.REACT_APP_id)
  console.log(process.env.REACT_APP_API_id)
  const [isSignIn, setisSignIn] = useState(true);
  const [errormsg, seterrormsg] = useState(null);
  const email = useRef();
  const password = useRef();
  const name = useRef();
  const navigate = useNavigate();

  const handltoggle = () => {
    setisSignIn(!isSignIn);
  };

  const handlevalidation = () => {
    const error = validate(email.current.value, password.current.value);
    seterrormsg(error);
    if (error) return;

    if (!isSignIn) {
      // sign up
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: "https://avatars.githubusercontent.com/u/81466016?v=4",
          })
            .then(() => {
             
              // Profile updated!
              // ...
            })
            .catch((error) => {
               navigate("/error")
              // An error occurred
              // ...
            });
        
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          seterrormsg(errorCode + ":" + errorMessage);
          // ..
        });
    } else {
      // sign in
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
         
         
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          seterrormsg(errorCode + ":" + errorMessage);
        });
    }
  };

  return (
    
    <div>
      <Header />
      <div className="absolute  ">
        <img src={BG_URL} className="h-screen object-cover md:h-full"></img>
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="bu md:w-3/12 absolute bg-black p-10 my-36 mx-auto right-0 left-0 text-white bg-opacity-80"
      >
        <div className="p-2 font-bold text-3xl">
          {isSignIn ? "Sign In" : "Sign Up"}
        </div>
        {!isSignIn && (
          <input
            type="text"
            ref={name}
            placeholder="Full Name"
            className="p-3 my-4 w-full bg-gray-500"
          />
        )}
        <input
          ref={email}
          type="email"
          placeholder="Email Address"
          className="p-3 my-4 w-full bg-gray-500"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-3 my-4 w-full bg-gray-500"
        />
        <p className="text-red-500">{errormsg}</p>

        <button
          className="p-3 my-6 bg-red-600 w-full rounded-lg"
          onClick={handlevalidation}
        >
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>
        <p className="cursor-pointer" onClick={handltoggle}>
          {isSignIn
            ? "New to Netflix? Sign Up Now."
            : "Already a user? Sign In Now."}
        </p>
      </form>
    </div>
  );
}

export default Login;
