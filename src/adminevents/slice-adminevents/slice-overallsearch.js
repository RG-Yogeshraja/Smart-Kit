import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import * as APIConstants from "../../hsStore/ApiConstants"

// API call
export const eventsOverallSearch_APIcall = createAsyncThunk('eventsOverAllSearchData/eventsOverallSearch_APIcall', async (payload) => {
    const apiURL = APIConstants.APIbaseURL + APIConstants.eventsOverAllSearchPath
    const response = await axios.post(apiURL, payload)
    //
    console.log("over all search by name data", response)
    return response.data
})

//reducer
export const EventsOverAllSearch_slice = createSlice({
    name: 'eventsOverAllSearchData',
    initialState: {
        data: [],
        loading: 'idle',
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(eventsOverallSearch_APIcall.pending, (state, action) => {
            console.log("getting1", state.loading)
            if (state.loading === 'idle') {
                state.loading = 'pending'
            }
        })
        builder.addCase(eventsOverallSearch_APIcall.fulfilled, (state, action) => {
            console.log("getting2", state.loading)
            if (state.loading === 'pending') {
                state.data = action.payload
                state.loading = 'idle'
            }
        })
        builder.addCase(eventsOverallSearch_APIcall.rejected, (state, action) => {
            console.log("getting3", state.loading)
            if (state.loading === 'pending') {
                state.loading = 'idle'
                state.error = 'Error occured'
            }
        })
    }
})


export default EventsOverAllSearch_slice.reducer
