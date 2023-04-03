import { createSlice } from "@reduxjs/toolkit";


const microReducers=createSlice({
    name:"Harshit",
    initialState:[],
    reducers:{

        // reducer to save profile 
        saveProfile(state,action){
            state.push(action.payload);
        },
    }
})


export default microReducers.reducer;
export const {saveProfile}=microReducers.actions;