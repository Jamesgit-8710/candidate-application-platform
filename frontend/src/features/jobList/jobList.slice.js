import { createSlice } from '@reduxjs/toolkit';
import { getJobList } from './jobList.action';

const initialState = {
    jobList: [],
    loading: false,
    type: '',
    message: ''
}

export const jobSlice = createSlice({
    name: 'jobs',
    initialState,
    reducers: {
        setLoading: (state, action) => {
            state.loading = !state.loading
        }
    },
    extraReducers: (builder) => {
        builder

            .addCase(getJobList.fulfilled, (state, action) => {
                state.loading = false
                state.jobList = state.jobList.concat(action.payload.jdList);
                console.log(state.jobList)
            })
            .addCase(getJobList.pending, (state, action) => {
                state.loading = true
            })
            .addCase(getJobList.rejected, (state, action) => {
                state.loading = false
                state.message = "Something went wrong!"
                state.type = 'error'
            })

    }
});

export const { setLoading } = jobSlice.actions;
export default jobSlice.reducer;