import React, { useEffect } from "react";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { Logo, userlogo } from "../utils/constants";
import { toggleGptSearch } from "../utils/gtpslice";

function Header() {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const GptSearchView = useSelector((store) => store.gpt.showGptSearch);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        // User is signed out
        // ...
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, []);

  const handlelogout = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/Error");
      });
  };

  const handleGptSeach = () => {
        dispatch(toggleGptSearch())
  }

  return (
    <div className=" absolute w-full px-6 py-2 bg-gradient-to-b from-black z-20 flex flex-col justify-between md:flex md:flex-row">
      <img src={Logo} className="w-36 mx-auto md:mx-0"></img>

      {user && (
        <div className="flex p-4 gap-2 justify-between ">
          <button className="px-4 py-2 m-2 rounded-lg bg-purple-600 text-white" onClick={handleGptSeach}>
             {GptSearchView?"Homepage":"GptSearch"}
          </button>
          <button
            className="bg-slate-700 px-4 py-2 m-2 rounded-lg font-bold"
            onClick={handlelogout}
          >
            Sign Out
          </button>
          <img src={userlogo} className="w-12 mt-2 h-10 hidden md:block rounded-lg " />
        </div>
      )}
    </div>
  );
}

export default Header;
