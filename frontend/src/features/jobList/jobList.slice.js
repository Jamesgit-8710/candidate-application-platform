import { createSlice } from '@reduxjs/toolkit';
import { getJobList } from './jobList.action';

const initialFiltersState = {
    roles: [],
    location: [],
    experience: null,
    remoteOnsite: [],
    minBasePay: null,
    companyName: ''
};

const initialState = {
    isJobListLoaded: false,
    loading: true,
    jobList: [],
    filters: initialFiltersState,
    type: '',
    message: ''
}

export const jobSlice = createSlice({
    name: 'jobs',
    initialState,
    reducers: {
        setInitialFiltersState: (state, action) => {
            state.filters = initialFiltersState
        },
        updateFilters: (state, action) => {
            state.filters[action.payload.fieldName] = action.payload.value;
        }
    },
    extraReducers: (builder) => {
        builder

            .addCase(getJobList.fulfilled, (state, action) => {
                state.loading = false
                state.jobList = state.jobList.concat(action.payload.jdList);
                if(action.payload.jdList.length!==0){
                    state.isJobListLoaded = false
                }else{
                    state.isJobListLoaded = true
                }
            })
            .addCase(getJobList.pending, (state, action) => {
                state.loading = true
            })
            .addCase(getJobList.rejected, (state, action) => {
                state.isJobListLoaded = true
                state.loading = false
                state.message = "Something went wrong!"
                state.type = 'error'
            })

    }
});

export const { setInitialFiltersState , updateFilters } = jobSlice.actions;
export default jobSlice.reducer;