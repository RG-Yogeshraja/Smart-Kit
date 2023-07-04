import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import * as APIConstants from "../../hsStore/ApiConstants"

// API call
export const EventExplorerAlgorithm_APIcall = createAsyncThunk('eventExplorerAlgorithmData/EventExplorerAlgorithm_APIcall', async (payload) => {
    const apiURL = APIConstants.APIbaseURL + APIConstants.eventExplorerAlgorithmPath
    const response = await axios.post(apiURL, payload)
    
    console.log("Event Explorer Algorithm data", response)
    return response.data
})

//reducer
export const eventExplorerAlgorithm_slice = createSlice({
    name: 'eventExplorerAlgorithmData',
    initialState: {
        data: [],
        loading: 'idle',
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(EventExplorerAlgorithm_APIcall.pending, (state, action) => {
            console.log("getting1", state.loading)
            if (state.loading === 'idle') {
                state.loading = 'pending'
            }
        })
        builder.addCase(EventExplorerAlgorithm_APIcall.fulfilled, (state, action) => {
            console.log("getting2", state.loading)
            if (state.loading === 'pending') {
                state.data = action.payload
                state.loading = 'idle'
            }
        })
        builder.addCase(EventExplorerAlgorithm_APIcall.rejected, (state, action) => {
            console.log("getting3", state.loading)
            if (state.loading === 'pending') {
                state.loading = 'idle'
                state.error = 'Error occured'
            }
        })
    }
})


export default eventExplorerAlgorithm_slice.reducer
