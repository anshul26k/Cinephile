import { createSlice } from "@reduxjs/toolkit";

const gptslice  = createSlice({
    name:"gpt",
    initialState:{
        showGptSearch:false,
        GptMovieNames:null,
        GptMovieRes:null

    },
    reducers:{
        toggleGptSearch:(state,action)=>{
             state.showGptSearch = !state.showGptSearch
        },
        AddGptMovieNames:(state,action)=>{
             state.GptMovieNames=action.payload
        },
        AddGptMovieRes:(state,action)=>{
            state.GptMovieRes=action.payload
        }
    }
})

export const {toggleGptSearch,AddGptMovieNames,AddGptMovieRes} = gptslice.actions
export default gptslice.reducer