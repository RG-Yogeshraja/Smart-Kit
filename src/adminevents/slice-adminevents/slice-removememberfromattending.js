import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import * as APIConstants from "../../hsStore/ApiConstants"

// API call
export const removeMemberFromAttending_APIcall = createAsyncThunk('removeMemberFromAttendingData/removeMemberFromAttending_APIcall', async (payload) => {
    const apiURL = APIConstants.APIbaseURL + APIConstants.removeMemberFromAttendingPath
    const response = await axios.post(apiURL, payload)
    //
    console.log("remove member from event attending data", response)
    return response.data
})

//reducer
export const removeMemberFromAttending_slice = createSlice({
    name: 'removeMemberFromAttendingData',
    initialState: {
        data: [],
        loading: 'idle',
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(removeMemberFromAttending_APIcall.pending, (state, action) => {
            console.log("getting1", state.loading)
            if (state.loading === 'idle') {
                state.loading = 'pending'
            }
        })
        builder.addCase(removeMemberFromAttending_APIcall.fulfilled, (state, action) => {
            console.log("getting2", state.loading)
            if (state.loading === 'pending') {
                state.data = action.payload
                state.loading = 'idle'
            }
        })
        builder.addCase(removeMemberFromAttending_APIcall.rejected, (state, action) => {
            console.log("getting3", state.loading)
            if (state.loading === 'pending') {
                state.loading = 'idle'
                state.error = 'Error occured'
            }
        })
    }
})


export default removeMemberFromAttending_slice.reducer
