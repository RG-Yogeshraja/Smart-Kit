import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import * as APIConstants from "../../hsStore/ApiConstants"

// API call
export const addTottendFromWaitlist_APIcall = createAsyncThunk('addToAttendFromWaitlistData/addTottendFromWaitlist_APIcall', async (payload) => {
    const apiURL = APIConstants.APIbaseURL + APIConstants.addToAttendFromWaitlistPath
    const response = await axios.post(apiURL, payload)
    //
    console.log("addto attending from event waitlist data", response)
    return response.data
})

//reducer
export const addToAttendFromWaitlist_slice = createSlice({
    name: 'addToAttendFromWaitlistData',
    initialState: {
        data: [],
        loading: 'idle',
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(addTottendFromWaitlist_APIcall.pending, (state, action) => {
            console.log("getting1", state.loading)
            if (state.loading === 'idle') {
                state.loading = 'pending'
            }
        })
        builder.addCase(addTottendFromWaitlist_APIcall.fulfilled, (state, action) => {
            console.log("getting2", state.loading)
            if (state.loading === 'pending') {
                state.data = action.payload
                state.loading = 'idle'
            }
        })
        builder.addCase(addTottendFromWaitlist_APIcall.rejected, (state, action) => {
            console.log("getting3", state.loading)
            if (state.loading === 'pending') {
                state.loading = 'idle'
                state.error = 'Error occured'
            }
        })
    }
})


export default addToAttendFromWaitlist_slice.reducer
