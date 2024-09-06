import { configureStore } from "@reduxjs/toolkit";
import mobileReducer from "./reducers/mobileReducer";
import coverReducer from "./reducers/coverReducer";


const store = configureStore({
    reducer: {
        mobile: mobileReducer,
        cover: coverReducer
    }
});


export default store;