import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name:"movies",
    initialState:{
            nowplayingmovies:null,
            trailer:null,
    },
    reducers:{
        addnowplayingmovies:(state,action)=>{
                state.nowplayingmovies = action.payload
        },
        addTrailer:(state,action)=>{
                state.trailer= action.payload
        }
    }
})

export const {addnowplayingmovies,addTrailer} = movieSlice.actions
export default movieSlice.reducer