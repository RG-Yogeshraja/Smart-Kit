import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import * as APIConstants from "../../hsStore/ApiConstants"

// API call
export const addToEventAttending_APIcall = createAsyncThunk('addToEventAttendingData/addToEventAttending_APIcall', async (payload) => {
    const apiURL = APIConstants.APIbaseURL + APIConstants.addToEventAttendingPath
    const response = await axios.post(apiURL, payload)
    //
    console.log("add to event attending data", response)
    return response.data
})

//reducer
export const addToEventAttending_slice = createSlice({
    name: 'addToEventAttendingData',
    initialState: {
        data: [],
        loading: 'idle',
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(addToEventAttending_APIcall.pending, (state, action) => {
            console.log("getting1", state.loading)
            if (state.loading === 'idle') {
                state.loading = 'pending'
            }
        })
        builder.addCase(addToEventAttending_APIcall.fulfilled, (state, action) => {
            console.log("getting2", state.loading)
            if (state.loading === 'pending') {
                state.data = action.payload
                state.loading = 'idle'
            }
        })
        builder.addCase(addToEventAttending_APIcall.rejected, (state, action) => {
            console.log("getting3", state.loading)
            if (state.loading === 'pending') {
                state.loading = 'idle'
                state.error = 'Error occured'
            }
        })
    }
})


export default addToEventAttending_slice.reducer
