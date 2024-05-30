import { createSlice } from "@reduxjs/toolkit";

const gptslice  = createSlice({
    name:"gpt",
    initialState:{
        showGptSearch:false
    },
    reducers:{
        toggleGptSearch:(state,action)=>{
             state.showGptSearch = !state.showGptSearch
        }
    }
})

export const {toggleGptSearch} = gptslice.actions
export default gptslice.reducer