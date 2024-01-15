import { configureStore } from "@reduxjs/toolkit";
import queryReducer from "../reducers/queryReducer";

export const store = configureStore({
    reducer: {
        queryState: queryReducer,
    },
});

export default store;
