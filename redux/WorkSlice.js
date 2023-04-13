const { createSlice } = require("@reduxjs/toolkit");
import axios from 'axios';

export const WorkSlice = createSlice({
    name: "work",
    initialState: {
        jobs: [],
        favourities: [],
        Job: [],
    },
    reducers: {
        setJobs: (state, action) => {
            state.jobs.push(action.payload)
        },
        findJob: (state, action) => {
            state.Job.push(action.payload)
        },
        setFavourities: (state, action) => {
            const isExist = state.favourities.some(item => item.id === action.payload.id)
            if (isExist) {
                return state
            } else {
                state.favourities.push(action.payload)
            }
        }
    },
})


export const { setJobs, findJob, setFavourities } = WorkSlice.actions;

export default WorkSlice.reducer