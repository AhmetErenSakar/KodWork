import { configureStore } from "@reduxjs/toolkit";
import { WorkSlice } from "./WorkSlice";


export const store = configureStore({
    reducer: {
        work: WorkSlice.reducer,
    },
})