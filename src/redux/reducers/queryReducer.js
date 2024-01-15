import { createSlice } from "@reduxjs/toolkit";

const querySlice = createSlice({
    name: "stringa",

    initialState: {
        query: "",
        jobs: [],
    },

    reducers: {
        setQuery: (state, action) => {
            state.query = action.payload;
        },

        setJobs: (state, action) => {
            state.jobs = action.payload;
        },
    },
});

export const { setQuery, setJobs } = querySlice.actions;
export default querySlice.reducer;
