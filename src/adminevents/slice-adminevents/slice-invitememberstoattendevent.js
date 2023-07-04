import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import * as APIConstants from "../../hsStore/ApiConstants"

// API call
export const inviteMembersToAttendEvent_APIcall = createAsyncThunk('inviteMembersToAttendEventData/inviteMembersToAttendEvent_APIcall', async (payload) => {
    const apiURL = APIConstants.APIbaseURL + APIConstants.inviteMembersToAttendEventPath
    const response = await axios.post(apiURL, payload)
    //
    console.log("invite members to attend the event data", response)
    return response.data
})

//reducer
export const inviteMembersToAttendEvent_slice = createSlice({ 
    name: 'inviteMembersToAttendEventData',
    initialState: {
        data: [],
        loading: 'idle',
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(inviteMembersToAttendEvent_APIcall.pending, (state, action) => {
            //
            console.log("getting1", state.loading)
            if (state.loading === 'idle') {
                state.loading = 'pending'
            }
        })
        builder.addCase(inviteMembersToAttendEvent_APIcall.fulfilled, (state, action) => {
            console.log("getting2", state.loading)
            if (state.loading === 'pending') {
                //
                state.data = action.payload
                state.loading = 'idle'
            }
        })
        builder.addCase(inviteMembersToAttendEvent_APIcall.rejected, (state, action) => {
            console.log("getting3", state.loading)
            if (state.loading === 'pending') {
                state.loading = 'idle'
                state.error = 'Error occured'
            }
        })
    }
})


export default inviteMembersToAttendEvent_slice.reducer
