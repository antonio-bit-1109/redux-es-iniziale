import { createSlice } from "@reduxjs/toolkit";

const querySlice = createSlice({
    name: "stringa",

    initialState: {
        query: "",
        jobs: [],
        lavoretti: [],
        preferiti: [],
    },

    reducers: {
        setQuery: (state, action) => {
            state.query = action.payload;
        },

        setJobs: (state, action) => {
            state.jobs = action.payload;
        },

        setLavoretti: (state, action) => {
            state.lavoretti = action.payload;
        },
        setPreferiti: (state, action) => {
            state.preferiti = action.payload;
        },
    },
});

export const { setQuery, setJobs, setLavoretti, setPreferiti } = querySlice.actions;
export default querySlice.reducer;
