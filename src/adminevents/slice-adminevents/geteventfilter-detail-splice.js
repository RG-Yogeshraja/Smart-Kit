import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import * as APIConstants from "../../hsStore/ApiConstants"

// API call
export const getEvent_filter_APICall = createAsyncThunk('getEvent_filterDetail/getEvent_filter_APICall', async (payload, setfal) => {
    const apiURL = APIConstants.APIbaseURL + APIConstants.eventfilterdetail
    const response = await axios.post(apiURL, payload)
    
    console.log(payload)
    
    console.log("filtered event data", response, setfal)
    return response.data
})

//reducer
export const getEvent_slice = createSlice({
    name: 'getEvent_filterDetail',
    initialState: {
        getEvent_dataval: [],
        getEvent_loading: 'idle',
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getEvent_filter_APICall.pending, (state, action) => {
            if (state.getEvent_loading === 'idle') {
                state.getEvent_loading = 'pending'
            } 
        })
        builder.addCase(getEvent_filter_APICall.fulfilled, (state, action) => {
            if (state.getEvent_loading === 'pending') {
                state.getEvent_dataval = action.payload
                state.getEvent_loading = 'idle'
            }
        })
        builder.addCase(getEvent_filter_APICall.rejected, (state, action) => {
            if (state.getEvent_loading === 'pending') {
                state.getEvent_loading = 'idle'
                state.error = 'Error occured'
            }
        })
    }
})


export default getEvent_slice.reducer
