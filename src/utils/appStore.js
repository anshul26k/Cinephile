import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import movieReducer from "./movieSlice"
import gptReducer from "./gtpslice"
const appStore = configureStore({
    reducer:{
        user:userReducer,
        movies:movieReducer,
        gpt:gptReducer
    },
})

export default appStore
