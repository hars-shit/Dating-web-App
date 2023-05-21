import { createSlice } from "@reduxjs/toolkit";

const Likes=createSlice({
    name:"Likes",
    initialState:[],
    reducers:{
        savevalues(state,action){
            state.push(action.payload);
        },
    }
})
export default Likes.reducer;
export const {savevalues}=Likes.actions;