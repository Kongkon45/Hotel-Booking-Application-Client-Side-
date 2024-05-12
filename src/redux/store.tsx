import { configureStore } from "@reduxjs/toolkit";
import hotelReducer from "./features/hotelSlice";

export const store = configureStore({
    reducer : {
        hotels : hotelReducer
    }
})