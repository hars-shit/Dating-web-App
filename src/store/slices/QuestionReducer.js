import { createSlice } from "@reduxjs/toolkit";

const QuestionReducer=createSlice({
    name:"Questions",
    initialState:[],
    reducers:{
        
        // reducer to save question's data 
        
        saveanswer(state,action){
            state.push(action.payload);
        },
    }
})

export default QuestionReducer.reducer;
export const {saveanswer}=QuestionReducer.actions;