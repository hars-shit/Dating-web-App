import { configureStore } from "@reduxjs/toolkit";
import microReducers from "./microReducers";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import { combineReducers } from "@reduxjs/toolkit";
import QuestionReducer from "./QuestionReducer";


const persistConfig={
    key:"root",
    version:1,
    storage
};

const reducer=combineReducers({
    users:microReducers,
    users1:QuestionReducer,
})

const persistedReducer=persistReducer(persistConfig,reducer);
const store=configureStore({
    //  payloads container 
    reducer:persistedReducer,
})

export default store;