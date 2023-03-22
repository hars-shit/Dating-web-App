import { configureStore } from "@reduxjs/toolkit";
import microReducers from "./microReducers";


const store=configureStore({
    //  payloads container 
    reducer:{
        users:microReducers,
    }
})

export default store;