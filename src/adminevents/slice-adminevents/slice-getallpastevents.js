import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import * as APIConstants from "../../hsStore/ApiConstants"

// API call
export const getAllPastEvents_APIcall = createAsyncThunk('getAllActiveEventsData/getAllPastEvents_APIcall', async (payload) => {
    const apiURL = APIConstants.APIbaseURL + APIConstants.getAllPastEventsPath
    const response = await axios.post(apiURL, payload)
    //
    console.log("get all past events data", response)
    return response.data
})

//reducer
export const getAllPastEvents_slice = createSlice({
    name: 'getAllPastEventsData',
    initialState: {
        data: [],
        loading: 'idle',
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getAllPastEvents_APIcall.pending, (state, action) => {
            console.log("getting1", state.loading)
            if (state.loading === 'idle') {
                state.loading = 'pending'
            }
        })
        builder.addCase(getAllPastEvents_APIcall.fulfilled, (state, action) => {
            console.log("getting2", state.loading)
            if (state.loading === 'pending') {
                state.data = action.payload
                state.loading = 'idle'
            }
        })
        builder.addCase(getAllPastEvents_APIcall.rejected, (state, action) => {
            console.log("getting3", state.loading)
            if (state.loading === 'pending') {
                state.loading = 'idle'
                state.error = 'Error occured'
            }
        })
    }
})


export default getAllPastEvents_slice.reducer
