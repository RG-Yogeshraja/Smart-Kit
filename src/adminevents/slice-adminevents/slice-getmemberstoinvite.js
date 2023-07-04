import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import * as APIConstants from "../../hsStore/ApiConstants"

// API call
export const getMembersToInvite_APIcall = createAsyncThunk('getMembersToInviteData/getMembersToInvite_APIcall', async (payload) => {
    const apiURL = APIConstants.APIbaseURL + APIConstants.getMembersToInvitePath
    const response = await axios.post(apiURL, payload)
    //
    console.log("Get members to invite data", response)
    return response.data
})

//reducer
export const getMembersToInvite_slice = createSlice({ 
    name: 'getMembersToInviteData',
    initialState: {
        data: [],
        loading: 'idle',
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getMembersToInvite_APIcall.pending, (state, action) => {
            console.log("getting1", state.loading)
            if (state.loading === 'idle') {
                state.loading = 'pending'
            }
        })
        builder.addCase(getMembersToInvite_APIcall.fulfilled, (state, action) => {
            console.log("getting2", state.loading)
            if (state.loading === 'pending') {
                state.data = action.payload
                state.loading = 'idle'
            }
        })
        builder.addCase(getMembersToInvite_APIcall.rejected, (state, action) => {
            console.log("getting3", state.loading)
            if (state.loading === 'pending') {
                state.loading = 'idle'
                state.error = 'Error occured'
            }
        })
    }
})


export default getMembersToInvite_slice.reducer
